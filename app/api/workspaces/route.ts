import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
  try {
    const { prisma } = await import('@/lib/prisma');
    const userId = req.headers.get('x-user-id');
    
    // In a production environment, we'd want to enforce userId, 
    // but for now, we'll allow an empty filter to avoid breaking existing data 
    // unless/until a session is established.
    const workspaces = await prisma.workspace.findMany({
      where: userId ? { userId } : {},
      orderBy: { createdAt: 'desc' },
      include: {
        _count: {
          select: { papers: true }
        }
      }
    });

    return NextResponse.json({ workspaces });
  } catch (error: any) {
    console.error('Fetch workspaces error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { prisma } = await import('@/lib/prisma');
    const { name } = await req.json();
    const userId = req.headers.get('x-user-id');

    if (!name) {
      return NextResponse.json({ error: 'Workspace name is required' }, { status: 400 });
    }

    const workspace = await prisma.workspace.create({
      data: { 
        name,
        userId: userId || null 
      }
    });

    return NextResponse.json({ workspace });
  } catch (error: any) {
    console.error('Create workspace error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { prisma } = await import('@/lib/prisma');
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    const userId = req.headers.get('x-user-id');

    if (!id) {
      return NextResponse.json({ error: 'Workspace ID is required' }, { status: 400 });
    }

    // Ensure user owns the workspace before deleting
    const workspace = await prisma.workspace.findUnique({ where: { id } });
    
    if (!workspace) {
        return NextResponse.json({ error: 'Workspace not found' }, { status: 404 });
    }

    if (userId && workspace.userId && workspace.userId !== userId) {
        return NextResponse.json({ error: 'Unauthorized to delete this workspace' }, { status: 403 });
    }

    if (workspace.name === 'Default') {
        return NextResponse.json({ error: 'Cannot delete the default workspace' }, { status: 400 });
    }

    await prisma.workspace.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Delete workspace error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
