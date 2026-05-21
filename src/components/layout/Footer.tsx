import Link from "next/link";
import { Terminal } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} stroke="none">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.814 1.102.814 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} stroke="none">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="font-bold text-xl tracking-tight text-white">AURA<span className="text-primary">.</span></span>
            </Link>
            <p className="text-sm text-zinc-400 mb-6 max-w-xs">
              The explainable, offline-first programming language for the next generation of safe, concurrent systems.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/Chakri-kollepara-5/aura.git" target="_blank" className="text-zinc-400 hover:text-white transition-colors">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/explain" className="hover:text-white transition-colors">Explain Mode</Link></li>
              <li><Link href="/examples" className="hover:text-white transition-colors">Examples Gallery</Link></li>
              <li><Link href="/docs/internals" className="hover:text-white transition-colors">Compiler Internals</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Ecosystem</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link href="/download" className="hover:text-white transition-colors">Download SDK</Link></li>
              <li><Link href="/download#vsix" className="hover:text-white transition-colors">VS Code Extension</Link></li>
              <li><Link href="/roadmap" className="hover:text-white transition-colors">Roadmap</Link></li>
              <li><Link href="/docs/branding" className="hover:text-white transition-colors">Branding &amp; Assets</Link></li>
              <li><Link href="https://github.com/Chakri-kollepara-5/aura.git" target="_blank" className="hover:text-white transition-colors">GitHub Repository</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Support &amp; Contact</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><a href="mailto:vschakravarthi7@gmail.com" className="hover:text-white transition-colors">Queries: vschakravarthi7@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} AURA Language. All rights reserved. | Developed by K.Chakravarthi Dev
          </p>
          <div className="flex gap-4 text-sm text-zinc-500">
            <Link href="/privacy" className="hover:text-zinc-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
