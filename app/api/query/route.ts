import { generateTextWaterfall, streamTextWaterfall, getEmbeddingModel } from '@/lib/ai';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { embed } from 'ai';

export const maxDuration = 60;

export async function POST(req: Request) {
  const startTime = Date.now();

  try {
    const { question, paper_ids, workspace_id } = await req.json();

    if (!question) {
      return NextResponse.json({ error: 'No question provided' }, { status: 400 });
    }

    // 1. HyDE Transformation (Generate hypothetical answer to improve alignment)
    let hypotheticalAnswer = "";
    try {
      const { text } = await generateTextWaterfall({
        system: 'You are a research assistant. Provide a brief, technical, and high-level hypothetical answer to the following question. Focus on keywords and concepts that would likely appear in a research paper addressing this.',
        prompt: question,
      });
      hypotheticalAnswer = text;
    } catch (err) {
      console.warn("HyDE failed, falling back to original question for embedding", err);
      hypotheticalAnswer = question;
    }

    const embedValue = hypotheticalAnswer?.trim() || question;
    console.log("Generating embedding for search query:", embedValue.substring(0, 100) + "...");

    // 2. Generate embedding for HYPOTHETICAL answer (this is the HyDE trick)
    const { embedding } = await embed({
      model: getEmbeddingModel(),
      value: embedValue,
    });

    // 3. Vector Search (Phase 1: Retrieval)
    let retrievedChunks: Array<{ paperTitle: string, content: string, similarity: number }> = [];
    
    // Build filter — parameterized queries to prevent SQL injection
    if (paper_ids && paper_ids.length > 0) {
      retrievedChunks = await prisma.$queryRawUnsafe(`
        SELECT "Paper"."title" as "paperTitle", "DocumentChunk".content, 1 - ("DocumentChunk".embedding <=> $1::vector) as similarity
        FROM "DocumentChunk"
        JOIN "Paper" ON "DocumentChunk"."paperId" = "Paper".id
        WHERE "Paper".id = ANY($2::text[])
        ORDER BY "DocumentChunk".embedding <=> $1::vector
        LIMIT 20;
      `, embedding, paper_ids);
    } else if (workspace_id) {
        retrievedChunks = await prisma.$queryRawUnsafe(`
        SELECT "Paper"."title" as "paperTitle", "DocumentChunk".content, 1 - ("DocumentChunk".embedding <=> $1::vector) as similarity
        FROM "DocumentChunk"
        JOIN "Paper" ON "DocumentChunk"."paperId" = "Paper".id
        WHERE "Paper"."workspaceId" = $2
        ORDER BY "DocumentChunk".embedding <=> $1::vector
        LIMIT 20;
      `, embedding, workspace_id);
    } else {
      retrievedChunks = await prisma.$queryRaw<Array<{ paperTitle: string, content: string, similarity: number }>>`
        SELECT "Paper"."title" as "paperTitle", "DocumentChunk".content, 1 - ("DocumentChunk".embedding <=> ${embedding}::vector) as similarity
        FROM "DocumentChunk"
        JOIN "Paper" ON "DocumentChunk"."paperId" = "Paper".id
        ORDER BY "DocumentChunk".embedding <=> ${embedding}::vector
        LIMIT 20;
      `;
    }

    // 4. Reranking (Phase 2: Precision)
    let finalChunks = retrievedChunks.slice(0, 5);
    
    // Optional: Integrate Cohere Rerank if API key is provided
    if (process.env.COHERE_API_KEY && retrievedChunks.length > 0) {
        try {
            const cohereResponse = await fetch('https://api.cohere.ai/v1/rerank', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.COHERE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: question,
                    documents: retrievedChunks.map(c => c.content),
                    top_n: 5,
                    model: 'rerank-english-v3.0'
                })
            });
            
            if (cohereResponse.ok) {
                const { results } = await cohereResponse.json();
                finalChunks = results.map((r: any) => {
                    const chunk = retrievedChunks[r.index];
                    return { ...chunk, similarity: r.relevance_score };
                });
            }
        } catch (err) {
            console.error("Cohere Rerank failed, falling back to vector similarity", err);
        }
    }

    // 5. Format context and compute real confidence
    let contextText = "No relevant context found.";
    let citations: any[] = [];
    let avgSimilarity = 0;
    
    if (Array.isArray(finalChunks) && finalChunks.length > 0) {
      avgSimilarity = finalChunks.reduce((acc, c) => acc + Number(c.similarity || 0), 0) / finalChunks.length;
      
      contextText = finalChunks.map((chunk) => {
        citations.push({
          paper_title: chunk.paperTitle,
          section: "Matched Context",
          page_number: 1,
          relevance_score: Number(chunk.similarity),
          text_snippet: chunk.content.substring(0, 250) + "..."
        });
        return `[Source: ${chunk.paperTitle}]\n${chunk.content}`;
      }).join('\n\n---\n\n');
    }

    const systemPrompt = `You are a world-class Research Analyst. 
Analyze the provided document context and answer the user's question with academic depth and precision.

COMPARISON MODE:
If the context contains information from multiple different research papers, ensure you:
1. Synthesize the findings across all sources.
2. Identify areas of consensus or divergence between the papers.
3. Clearly attribute specific claims to their respective papers using [Source: Title].

CITATION RULES:
Cite sources using [Source: Title] notation inline. 
If the context doesn't contain enough information, explain what is missing.

IMPORTANT: For mathematical formulas, use standard Markdown math delimiters:
- Use $...$ for inline math (e.g., $E=mc^2$)
- Use $$...$$ for block equations on new lines.
Do not use literal parentheses ( ) or brackets [ ] for math!

CONTEXT:
${contextText}`;

    // 6. Stream the synthesis response
    const { stream, modelId } = await streamTextWaterfall({
      system: systemPrompt,
      prompt: question,
    });

    const elapsed = Date.now() - startTime;

    // 7. Generate follow-up questions asynchronously
    // We encode metadata into the stream as a custom SSE event
    const encoder = new TextEncoder();
    const metadataPayload = JSON.stringify({
      citations,
      confidence: Math.round(avgSimilarity * 100) / 100,
      response_time_ms: elapsed,
      model_used: modelId,
      chunks_retrieved: retrievedChunks.length,
      chunks_used: finalChunks.length,
    });

    // Create a TransformStream that appends metadata after the text stream
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();

    (async () => {
      try {
        const reader = stream.getReader();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          await writer.write(value);
        }

        // After stream completes, append metadata as a special line
        await writer.write(encoder.encode(`\n\n__METADATA__${metadataPayload}__END_METADATA__`));

        // Generate follow-up questions
        try {
          const { text: followUpsRaw } = await generateTextWaterfall({
            prompt: `Based on this research question and answer context, suggest exactly 3 brief follow-up research questions a scholar might ask. Return ONLY a JSON array of 3 strings, no other text.

Question: ${question}
Context topics: ${finalChunks.map(c => c.paperTitle).join(', ')}`,
          });

          // Extract JSON array from the response
          const jsonMatch = followUpsRaw.match(/\[.*\]/s);
          if (jsonMatch) {
            await writer.write(encoder.encode(`\n__FOLLOWUPS__${jsonMatch[0]}__END_FOLLOWUPS__`));
          }
        } catch (err) {
          console.warn('Follow-up generation failed, skipping:', err);
        }

        await writer.close();
      } catch (err) {
        await writer.abort(err as any);
      }
    })();

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error: any) {
    console.error('Query error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
