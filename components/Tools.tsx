"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Tool } from "@/types/tools";

// Inline SVG icons for tools that don't load from CDN
const getInlineIcon = (name: string): string | null => {
  const inlineIcons: Record<string, string> = {
    "Hardhat": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#F9FAFB" stroke="#121212" stroke-width="1.5"/><path d="M12 4.18l8 4v8.64l-8-4V4.18z" fill="#121212" opacity="0.1"/><path d="M4 8.18l8 4v8.64l-8-4V8.18z" fill="#121212" opacity="0.1"/></svg>`,
    "MetaMask": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#E2761B"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#E4761B"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.66-2.84z" fill="#E4761B"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#E4761B"/></svg>`,
    "Midjourney": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#A020F0"/><path d="M12 6v6l4 2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`,
    "Superhuman": `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="#6366F1" stroke="#6366F1" stroke-width="0.5"/></svg>`,
  };
  return inlineIcons[name] || null;
};

const getIconUrl = (name: string): string => {
  // Special cases for icons not available in Simple Icons or need custom URLs
  const specialIcons: Record<string, string> = {
    "AWS": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  };
  
  if (specialIcons[name]) {
    return specialIcons[name];
  }
  
  const iconMap: Record<string, string> = {
    // Design & Productivity
    "Framer": "framer",
    "Figma": "figma",
    "Arc": "arc",
    "Github": "github",
    "Stripe": "stripe",
    "Spotify": "spotify",
    // AI
    "ChatGPT": "openai",
    "Claude": "anthropic",
    "TensorFlow": "tensorflow",
    "PyTorch": "pytorch",
    "LangChain": "langchain",
    // Blockchain
    "Ethereum": "ethereum",
    "Solana": "solana",
    "Web3.js": "web3dotjs",
    // Backend
    "Python": "python",
    "Node.js": "nodedotjs",
    "Express": "express",
    "Django": "django",
    "FastAPI": "fastapi",
    "PostgreSQL": "postgresql",
    "MongoDB": "mongodb",
    "Redis": "redis",
    "Docker": "docker",
    "Kubernetes": "kubernetes",
    // Frontend
    "React": "react",
    "Next.js": "nextdotjs",
    "Vue.js": "vuedotjs",
    "TypeScript": "typescript",
    "Vite": "vite",
    "Tailwind CSS": "tailwindcss",
    // Development Tools
    "Cursor": "cursor",
  };
  
  const iconName = iconMap[name] || name.toLowerCase().replace(/\s+/g, "").replace(/\./g, "dot");
  return `https://cdn.simpleicons.org/${iconName}`;
};

export default function Tools() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch("/api/tools");
        const data = await response.json();
        setTools(data.tools || []);
      } catch (error) {
        console.error("Failed to fetch tools:", error);
        // Fallback to empty array on error
        setTools([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);
  if (loading) {
    return (
      <section className="space-y-4 sm:space-y-6">
        <h3 className="text-section-title">Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          <div className="p-4 border border-[#e8e8e8] border-dashed rounded-[10px] flex items-center justify-center aspect-square">
            <span className="text-[var(--color-secondary)] text-sm">Loading...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-4 sm:space-y-6">
      <h3 className="text-section-title">Tools</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
        {tools.map((tool, index) => (
          <motion.a
            key={index}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 border border-[var(--color-border)] border-dashed rounded-[10px] hover:border-[var(--color-primary)] transition-smooth cursor-pointer flex flex-col items-center justify-center aspect-square gap-1.5 sm:gap-2 hover:scale-105"
            aria-label={`Show ${tool.name} tool`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: (index % 10) * 0.03 }}
          >
            <div className="w-8 h-8 flex-shrink-0 relative flex items-center justify-center">
              {getInlineIcon(tool.name) ? (
                <div 
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ __html: getInlineIcon(tool.name)! }}
                />
              ) : (
                <Image
                  src={getIconUrl(tool.name)}
                  alt={tool.name}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                  unoptimized
                  onError={(e) => {
                    // Fallback: hide image on error
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
            </div>
            <span className="text-[var(--color-primary)] font-medium text-sm text-center leading-normal">{tool.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

