import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { parsePdf } from '@/lib/pdf';
import { chunkText } from '@/lib/chunking';
import { generateEmbeddings } from '@/lib/embeddings';
import { generateAutomatedInsights } from '@/lib/insights';
import { extractPaperMetadata } from '@/lib/metadata';
import { v4 as uuidv4 } from 'uuid';
export const maxDuration = 60; // Allow longer execution on Vercel for PDF parsing

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const workspaceId = formData.get('workspaceId') as string;
    const paperId = (formData.get('paperId') as string) || uuidv4();

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const userId = req.headers.get('x-user-id');
    let finalWorkspaceId = workspaceId;
    
    if (!finalWorkspaceId) {
      let defaultWorkspace = await prisma.workspace.findFirst({ 
        where: { name: 'Default', userId: userId || null } 
      });
      
      if (!defaultWorkspace) {
        defaultWorkspace = await prisma.workspace.create({ 
          data: { name: 'Default', userId: userId || null } 
        });
      }
      finalWorkspaceId = defaultWorkspace.id;
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    
    // 1. Parse PDF
    const text = await parsePdf(buffer);
    if (!text || text.trim().length === 0) {
      return NextResponse.json({ error: 'Failed to extract text from PDF' }, { status: 400 });
    }

    // 2. Create Paper record - URL is 'local' as storage is in browser IndexedDB
    const paper = await prisma.paper.create({
      data: {
        id: paperId,
        title: file.name,
        workspaceId: finalWorkspaceId,
        url: `local:${paperId}`, 
      }
    });

    // Chunk text
    const chunks = chunkText(text);
    
    // Generate embeddings in batches (Cohere is very stable on trial keys)
    const BATCH_SIZE = 50; 
    let chunksProcessed = 0;

    for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
      const batchChunks = chunks.slice(i, i + BATCH_SIZE);
      const batchTexts = batchChunks.map(c => c.content);

      const embeddings = await generateEmbeddings(batchTexts);
      
      // Store in DB
      for (let j = 0; j < batchChunks.length; j++) {
        const chunk = batchChunks[j];
        const embedding = embeddings[j];
        const id = uuidv4();
        
        await prisma.$executeRaw`
          INSERT INTO "DocumentChunk" (id, "paperId", content, section, page, embedding)
          VALUES (${id}, ${paper.id}, ${chunk.content}, ${null}, ${null}, ${embedding}::vector)
        `;
      }
      chunksProcessed += batchChunks.length;
    }

    // Trigger insight generation and metadata extraction asynchronously
    generateAutomatedInsights(paper.id, text);
    extractPaperMetadata(paper.id, text);

    return NextResponse.json({
      success: true,
      paperId: paper.id,
      chunksCount: chunksProcessed,
      stages: {
        extraction: 'complete',
        chunking: `${chunks.length} chunks created`,
        embedding: `${chunksProcessed} chunks embedded`,
        insights: 'processing',
        metadata: 'processing',
      }
    });

  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
