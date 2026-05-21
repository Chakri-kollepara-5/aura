
import Link from "next/link";

export default function BlogDoc() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Engineering Blog</h1>
      <p className="text-lg text-zinc-400 mb-12 leading-relaxed">
        Deep dives into compiler optimization, language design, and ecosystem updates.
      </p>

      <div className="grid gap-8">
        <Link href="#" className="glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-transform border border-white/5 hover:border-primary/50 block">
          <div className="text-sm text-primary font-mono mb-2">May 21, 2026</div>
          <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">AURA 2.0: The Hybrid Parser Architecture</h2>
          <p className="text-zinc-400">Why we abandoned standard Lex/Yacc generators and built a custom recursive-descent + Pratt parser to achieve a 40% speedup in compilation times.</p>
        </Link>

        <Link href="#" className="glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-transform border border-white/5 hover:border-primary/50 block">
          <div className="text-sm text-primary font-mono mb-2">March 14, 2026</div>
          <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">Zero-Cost Concurrency with the Spawn Keyword</h2>
          <p className="text-zinc-400">A look into the MPSC channels and lightweight thread pooling that powers AURA's new concurrency model.</p>
        </Link>
      </div>
    </div>
  );
}
