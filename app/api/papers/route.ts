import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  await headers();
  try {
    const url = new URL(req.url);
    const workspaceId = url.searchParams.get('workspaceId');

    const papers = await prisma.paper.findMany({
      where: workspaceId ? { workspaceId } : undefined,
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { chunks: true }
        }
      }
    });

    // Map Prisma models to the expected frontend JSON structure
    const formattedPapers = papers.map(p => ({
      paper_id: p.id,
      metadata: {
        title: p.title,
        authors: p.authors ? p.authors.split(',') : [],
        year: p.year,
        chunks: p._count.chunks,
        summary: p.summary,
        url: p.url,
      },
      createdAt: p.createdAt,
    }));

    return NextResponse.json({ papers: formattedPapers });
  } catch (error: any) {
    console.error('Fetch papers error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Paper ID is required' }, { status: 400 });
    }

    await prisma.paper.delete({
      where: { id: id as string }
    });

    return NextResponse.json({ success: true, message: 'Paper deleted successfully' });
  } catch (error: any) {
    console.error('Delete paper error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
