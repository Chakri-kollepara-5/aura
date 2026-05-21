"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
            <span>Search docs...</span>
            <kbd className="ml-2 px-1.5 py-0.5 text-xs bg-zinc-800 rounded border border-zinc-700">⌘K</kbd>
          </button>
          
          <Link href="/download" className="hidden sm:flex items-center px-4 py-2 text-sm font-medium bg-white text-black hover:bg-zinc-200 rounded-md transition-colors">
            Download SDK
          </Link>
          
          <Link href="https://github.com/Chakri-kollepara-5/aura.git" target="_blank" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-2 py-1">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
