"use client";

import { useState } from "react";
import { Copy, Check, TerminalSquare } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = "aura", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-white/10 glass-card my-6 text-sm font-mono">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/40">
          <div className="flex items-center gap-2 text-zinc-400 text-xs">
            <TerminalSquare className="w-3.5 h-3.5" />
            {title}
          </div>
        </div>
      )}
      <div className="relative group bg-[#0a0a0a]">
        <button 
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-1.5 bg-white/5 hover:bg-white/10 rounded-md text-zinc-400 hover:text-white transition-all opacity-0 group-hover:opacity-100"
          title="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
        <div className="p-4 overflow-x-auto text-zinc-300">
          <pre><code>{code}</code></pre>
        </div>
      </div>
    </div>
  );
}
