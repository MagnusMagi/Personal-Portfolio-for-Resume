export interface Tool {
  name: string;
  href: string;
  category: string;
  iconUrl?: string;
  inlineIcon?: string;
}

export interface ToolsData {
  tools: Tool[];
}

