import { generateTextWaterfall, streamTextWaterfall, getEmbeddingModel } from '@/lib/ai';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { embed } from 'ai';

export const maxDuration = 60;

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const messages = await prisma.message.findMany({
      where: { chatSessionId: id },
      orderBy: { createdAt: 'asc' },
    });

    return NextResponse.json({ messages });
  } catch (error: any) {
    console.error('List messages error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const startTime = Date.now();

  try {
    const { id: sessionId } = await params;
    const { content, paper_ids, workspace_id } = await req.json();

    if (!content) {
      return NextResponse.json({ error: 'Message content is required' }, { status: 400 });
    }

    // 1. Store user message
    await prisma.message.create({
      data: {
        chatSessionId: sessionId,
        role: 'user',
        content,
      }
    });

    // 2. Get conversation context (last 10 messages for context window)
    const history = await prisma.message.findMany({
      where: { chatSessionId: sessionId },
      orderBy: { createdAt: 'asc' },
      take: 10,
    });

    const conversationContext = history
      .map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
      .join('\n\n');

    // 3. HyDE Transformation  
    let hypotheticalAnswer = "";
    try {
      const { text } = await generateTextWaterfall({
        system: 'You are a research assistant. Provide a brief, technical, and high-level hypothetical answer to the following question. Focus on keywords and concepts that would likely appear in a research paper addressing this.',
        prompt: content,
      });
      hypotheticalAnswer = text;
    } catch (err) {
      hypotheticalAnswer = content;
    }

    const embedValue = hypotheticalAnswer?.trim() || content;

    // 4. Generate embedding
    const { embedding } = await embed({
      model: getEmbeddingModel(),
      value: embedValue,
    });

    // 5. Vector Search
    let retrievedChunks: Array<{ paperTitle: string, content: string, similarity: number }> = [];

    if (paper_ids && paper_ids.length > 0) {
      retrievedChunks = await prisma.$queryRawUnsafe(`
        SELECT "Paper"."title" as "paperTitle", "DocumentChunk".content, 1 - ("DocumentChunk".embedding <=> $1::vector) as similarity
        FROM "DocumentChunk"
        JOIN "Paper" ON "DocumentChunk"."paperId" = "Paper".id
        WHERE "Paper".id = ANY($2::text[])
        ORDER BY "DocumentChunk".embedding <=> $1::vector
        LIMIT 15;
      `, embedding, paper_ids);
    } else if (workspace_id) {
      retrievedChunks = await prisma.$queryRawUnsafe(`
        SELECT "Paper"."title" as "paperTitle", "DocumentChunk".content, 1 - ("DocumentChunk".embedding <=> $1::vector) as similarity
        FROM "DocumentChunk"
        JOIN "Paper" ON "DocumentChunk"."paperId" = "Paper".id
        WHERE "Paper"."workspaceId" = $2
        ORDER BY "DocumentChunk".embedding <=> $1::vector
        LIMIT 15;
      `, embedding, workspace_id);
    } else {
      retrievedChunks = await prisma.$queryRaw<Array<{ paperTitle: string, content: string, similarity: number }>>`
        SELECT "Paper"."title" as "paperTitle", "DocumentChunk".content, 1 - ("DocumentChunk".embedding <=> ${embedding}::vector) as similarity
        FROM "DocumentChunk"
        JOIN "Paper" ON "DocumentChunk"."paperId" = "Paper".id
        ORDER BY "DocumentChunk".embedding <=> ${embedding}::vector
        LIMIT 15;
      `;
    }

    // 6. Reranking
    let finalChunks = retrievedChunks.slice(0, 5);
    if (process.env.COHERE_API_KEY && retrievedChunks.length > 0) {
      try {
        const cohereResponse = await fetch('https://api.cohere.ai/v1/rerank', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.COHERE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: content,
            documents: retrievedChunks.map(c => c.content),
            top_n: 5,
            model: 'rerank-english-v3.0'
          })
        });
        if (cohereResponse.ok) {
          const { results } = await cohereResponse.json();
          finalChunks = results.map((r: any) => ({
            ...retrievedChunks[r.index],
            similarity: r.relevance_score,
          }));
        }
      } catch (err) {
        console.error("Cohere Rerank failed:", err);
      }
    }

    // 7. Build context
    let contextText = "No relevant context found.";
    let citations: any[] = [];

    if (finalChunks.length > 0) {
      contextText = finalChunks.map((chunk) => {
        citations.push({
          paper_title: chunk.paperTitle,
          section: "Matched Context",
          relevance_score: Number(chunk.similarity),
          text_snippet: chunk.content.substring(0, 250) + "..."
        });
        return `[Source: ${chunk.paperTitle}]\n${chunk.content}`;
      }).join('\n\n---\n\n');
    }

    const systemPrompt = `You are a world-class Research Analyst engaged in a multi-turn conversation.
Use the conversation history for context continuity.

CITATION RULES:
Cite sources using [Source: Title] notation inline.

IMPORTANT: For mathematical formulas, use standard Markdown math delimiters:
- Use $...$ for inline math
- Use $$...$$ for block equations on new lines.

CONVERSATION HISTORY:
${conversationContext}

DOCUMENT CONTEXT:
${contextText}`;

    // 8. Stream the synthesis
    const { stream, modelId } = await streamTextWaterfall({
      system: systemPrompt,
      prompt: content,
    });

    const elapsed = Date.now() - startTime;
    const avgSimilarity = finalChunks.length > 0
      ? finalChunks.reduce((acc, c) => acc + Number(c.similarity || 0), 0) / finalChunks.length
      : 0;

    const encoder = new TextEncoder();
    const metadataPayload = JSON.stringify({
      citations,
      confidence: Math.round(avgSimilarity * 100) / 100,
      response_time_ms: elapsed,
      model_used: modelId,
    });

    // Create a TransformStream that collects the full text and appends metadata
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    let fullAnswer = "";

    (async () => {
      try {
        const decoder = new TextDecoder();
        const reader = stream.getReader();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          fullAnswer += decoder.decode(value, { stream: true });
          await writer.write(value);
        }

        // Store assistant message in DB
        await prisma.message.create({
          data: {
            chatSessionId: sessionId,
            role: 'assistant',
            content: fullAnswer,
            citations: citations,
          }
        });

        // Update session title based on first user message if it's the default
        const session = await prisma.chatSession.findUnique({ where: { id: sessionId } });
        if (session && session.title.startsWith('Chat ')) {
          const shortTitle = content.length > 50 ? content.substring(0, 50) + '...' : content;
          await prisma.chatSession.update({
            where: { id: sessionId },
            data: { title: shortTitle }
          });
        }

        // Append metadata
        await writer.write(encoder.encode(`\n\n__METADATA__${metadataPayload}__END_METADATA__`));
        await writer.close();
      } catch (err) {
        await writer.abort(err as any);
      }
    })();

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
      },
    });

  } catch (error: any) {
    console.error('Chat message error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
