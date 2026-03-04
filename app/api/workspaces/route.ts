import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET() {
  await headers();
  try {
    const workspaces = await prisma.workspace.findMany({
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
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ error: 'Workspace name is required' }, { status: 400 });
    }

    const workspace = await prisma.workspace.create({
      data: { name }
    });

    return NextResponse.json({ workspace });
  } catch (error: any) {
    console.error('Create workspace error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Workspace ID is required' }, { status: 400 });
    }

    // Default workspace should not be deleted if it is our fallback
    const workspace = await prisma.workspace.findUnique({ where: { id } });
    if (workspace?.name === 'Default') {
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
