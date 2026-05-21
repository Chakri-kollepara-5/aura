"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Download } from "lucide-react";
import Image from "next/image";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} stroke="none">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.087 5.624-4.759 5.921c.43.372.814 1.102.814 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center group relative h-8 w-28">
            <Image
              src="/images/aura-horizontal.png"
              alt="AURA Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <Link 
              href="/docs" 
              className={`transition-colors ${pathname.startsWith('/docs') ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              Docs
            </Link>
            <Link 
              href="/explain" 
              className={`transition-colors ${pathname.startsWith('/explain') ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              Explain Mode
            </Link>
            <Link 
              href="/examples" 
              className={`transition-colors ${pathname.startsWith('/examples') ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              Examples
            </Link>
            <Link 
              href="/roadmap" 
              className={`transition-colors ${pathname.startsWith('/roadmap') ? 'text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              Roadmap
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-400 bg-zinc-900/50 border border-zinc-800 rounded-md hover:border-zinc-700 transition-colors">
            <Search className="h-4 w-4" />
            <span>Search docs...</span>
            <kbd className="ml-2 px-1.5 py-0.5 text-xs bg-zinc-800 rounded border border-zinc-700">⌘K</kbd>
          </button>
          
          <Link href="/download" className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white text-black hover:bg-zinc-200 rounded-md transition-colors">
            <Download className="h-4 w-4" />
            <span>Download SDK</span>
          </Link>
          
          <Link href="https://github.com/Chakri-kollepara-5/aura.git" target="_blank" className="p-2 text-zinc-400 hover:text-white transition-colors">
            <GithubIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
