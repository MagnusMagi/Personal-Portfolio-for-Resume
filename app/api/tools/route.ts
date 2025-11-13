import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import type { ToolsData, Tool } from '@/types/tools';

const TOOLS_FILE_PATH = join(process.cwd(), 'data', 'tools.json');

// Helper function to read tools
async function readTools(): Promise<ToolsData> {
  const fileContents = await readFile(TOOLS_FILE_PATH, 'utf8');
  return JSON.parse(fileContents);
}

// Helper function to write tools
async function writeTools(data: ToolsData): Promise<void> {
  await writeFile(TOOLS_FILE_PATH, JSON.stringify(data, null, 2), 'utf8');
}

// Simple authentication check
function isAuthenticated(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  const apiKey = process.env.CMS_API_KEY || 'your-secret-key-change-in-production';
  return authHeader === `Bearer ${apiKey}`;
}

// GET - Fetch all tools
export async function GET() {
  try {
    const data = await readTools();
    
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Error reading tools.json:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tools' },
      { status: 500 }
    );
  }
}

// POST - Create a new tool
export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { name, href, category } = body;

    if (!name || !href || !category) {
      return NextResponse.json(
        { error: 'Missing required fields: name, href, category' },
        { status: 400 }
      );
    }

    const data = await readTools();
    const newTool: Tool = {
      name,
      href,
      category,
    };

    data.tools.push(newTool);
    await writeTools(data);

    return NextResponse.json({ success: true, tool: newTool }, { status: 201 });
  } catch (error) {
    console.error('Error creating tool:', error);
    return NextResponse.json(
      { error: 'Failed to create tool' },
      { status: 500 }
    );
  }
}

// PUT - Update a tool
export async function PUT(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { id, name, href, category } = body;

    if (id === undefined || !name || !href || !category) {
      return NextResponse.json(
        { error: 'Missing required fields: id, name, href, category' },
        { status: 400 }
      );
    }

    const data = await readTools();

    if (id < 0 || id >= data.tools.length) {
      return NextResponse.json(
        { error: 'Tool not found' },
        { status: 404 }
      );
    }

    data.tools[id] = { name, href, category };
    await writeTools(data);

    return NextResponse.json({ success: true, tool: data.tools[id] });
  } catch (error) {
    console.error('Error updating tool:', error);
    return NextResponse.json(
      { error: 'Failed to update tool' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a tool
export async function DELETE(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id === null) {
      return NextResponse.json(
        { error: 'Missing id parameter' },
        { status: 400 }
      );
    }

    const toolIndex = parseInt(id, 10);
    const data = await readTools();

    if (toolIndex < 0 || toolIndex >= data.tools.length) {
      return NextResponse.json(
        { error: 'Tool not found' },
        { status: 404 }
      );
    }

    data.tools.splice(toolIndex, 1);
    await writeTools(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting tool:', error);
    return NextResponse.json(
      { error: 'Failed to delete tool' },
      { status: 500 }
    );
  }
}

