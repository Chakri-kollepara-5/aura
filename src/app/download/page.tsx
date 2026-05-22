import Link from "next/link";

export default function DownloadPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Download <span className="text-gradient">AURA 2.0</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          The complete offline-first toolchain. Includes the compiler, language server, REPL, and standard library in a single dependency-free binary.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {/* Windows Card */}
        <div className="glass-card p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
          <div className="text-xs font-mono font-bold text-blue-400 mb-6 uppercase tracking-wider">Windows OS</div>
          <h3 className="text-2xl font-bold text-white mb-2">Windows</h3>
          <p className="text-zinc-400 mb-6 h-12 text-sm">Requires Windows 10 or later. x64 and ARM64 natively supported.</p>
          <a href="/downloads/aura-v2.0.0-windows-x64.zip" download className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center mb-3">
            Download ZIP
          </a>
          <div className="text-center text-xs font-mono text-zinc-500">v2.0.0 • 24MB</div>
        </div>

        {/* macOS Card */}
        <div className="glass-card p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300 border-primary/20">
          <div className="absolute top-0 right-0 px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-bl-xl rounded-tr-xl">
            RECOMMENDED
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
          <div className="text-xs font-mono font-bold text-primary mb-6 uppercase tracking-wider">macOS / Apple</div>
          <h3 className="text-2xl font-bold text-white mb-2">macOS</h3>
          <p className="text-zinc-400 mb-6 h-12 text-sm">Universal binary for Apple Silicon (M1/M2/M3) and Intel Macs.</p>
          <a href="/downloads/aura-v2.0.0-macos-universal.zip" download className="w-full py-3 rounded-xl bg-primary text-black font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(0,229,153,0.2)]">
            Download ZIP
          </a>
          <div className="text-center text-xs font-mono text-zinc-500">v2.0.0 • 21MB</div>
        </div>

        {/* Linux Card */}
        <div className="glass-card p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
          <div className="text-xs font-mono font-bold text-yellow-400 mb-6 uppercase tracking-wider">Linux OS</div>
          <h3 className="text-2xl font-bold text-white mb-2">Linux</h3>
          <p className="text-zinc-400 mb-6 h-12 text-sm">Statically linked tarball. Works on Ubuntu, Arch, Fedora, and Alpine.</p>
          <a href="/downloads/aura-v2.0.0-linux-x64.tar.gz" download className="w-full py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 font-semibold transition-colors flex items-center justify-center mb-3">
            Download TAR.GZ
          </a>
          <div className="text-center text-xs font-mono text-zinc-500">v2.0.0 • 19MB</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* IDE Support Section */}
        <section id="vsix" className="scroll-mt-24 glass p-8 rounded-3xl border border-white/5">
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
            <span className="text-xs font-bold font-mono text-accent">VSIX</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">VS Code Extension</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Get the full AURA experience inside your editor. The extension bundles the AURA Language Server (ALS) providing blazing fast autocompletion, hover documentation, inline explain-mode traces, and automated refactoring.
          </p>
          
          <div className="space-y-4">
            <a href="/downloads/aura-vscode-extension.zip" download className="w-full p-4 rounded-xl bg-black/50 border border-white/10 hover:border-accent/50 transition-colors flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="text-left">
                  <div className="font-bold text-white group-hover:text-accent transition-colors">Download .vsix</div>
                  <div className="text-xs text-zinc-500">Manual Installation</div>
                </div>
              </div>
              <span className="text-xs font-mono text-zinc-500 group-hover:text-accent transition-colors">GET</span>
            </a>

            <div className="p-4 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between">
              <code className="text-sm font-mono text-primary">code --install-extension aura-lang.aura-vscode</code>
            </div>

            <div className="pt-2">
              <Link href="/docs/vscode-extension" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                View extension setup & commands guide →
              </Link>
            </div>
          </div>
        </section>

        {/* Release Notes */}
        <section className="glass p-8 rounded-3xl border border-white/5">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Release Notes</h2>
            <div className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-zinc-400 border border-white/10">
              Latest: 2.0.0
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative pl-6 border-l border-white/10">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(0,229,153,0.5)]"></div>
              <h3 className="text-lg font-bold text-white mb-2">AURA 2.0.0 (Stable)</h3>
              <p className="text-sm text-zinc-400 mb-4">Released on May 21, 2026</p>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2 select-none">•</span>
                  <span><strong>Explain Mode UI:</strong> Native integration of explain mode into terminal output with gorgeous ANSI tracing.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2 select-none">•</span>
                  <span><strong>Concurrency Model:</strong> Stabilized the `spawn` keyword and lightweight threading primitives.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2 select-none">•</span>
                  <span><strong>Compiler Speed:</strong> 40% reduction in parsing time using the new Hybrid Parser architecture.</span>
                </li>
              </ul>
            </div>

            <div className="relative pl-6 border-l border-white/10">
              <div className="absolute w-3 h-3 bg-zinc-600 rounded-full -left-[6.5px] top-1.5"></div>
              <h3 className="text-lg font-bold text-zinc-300 mb-2">AURA 1.9.5 (Beta)</h3>
              <p className="text-sm text-zinc-500 mb-4">Released on April 10, 2026</p>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li className="flex items-start"><span className="text-zinc-600 mr-2 select-none">•</span><span>Introduced immutable AST optimizations.</span></li>
                <li className="flex items-start"><span className="text-zinc-600 mr-2 select-none">•</span><span>Added standard library networking modules.</span></li>
                <li className="flex items-start"><span className="text-zinc-600 mr-2 select-none">•</span><span>Fixed memory leak in VS Code LSP extension.</span></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10">
            <Link href="/blog" className="text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1 group">
              View full changelog →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}