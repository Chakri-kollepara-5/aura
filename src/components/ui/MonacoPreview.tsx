"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Copy, Check } from "lucide-react";

interface MonacoPreviewProps {
  code: string;
  language?: string;
  height?: string;
}

export function MonacoPreview({ code, language = "rust", height = "300px" }: MonacoPreviewProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-white/10 glass-card relative group my-6">
      <div className="absolute top-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button 
          onClick={copyToClipboard}
          className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-md text-white transition-colors"
          title="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-zinc-300" />}
        </button>
      </div>
      <Editor
        height={height}
        language={language}
        theme="vs-dark"
        value={code}
        options={{
          readOnly: true,
          minimap: { enabled: false },
          fontSize: 14,
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          scrollBeyondLastLine: false,
          padding: { top: 24, bottom: 24 },
          renderLineHighlight: "none",
          scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
          }
        }}
      />
    </div>
  );
}
