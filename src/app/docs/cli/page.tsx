import { MonacoPreview } from "@/components/ui/MonacoPreview";

export default function CliDoc() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">CLI Reference</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        The `aura` CLI is your all-in-one entry point. It bundles the compiler, REPL, package manager, and language server into a single 24MB binary.
      </p>

      <div className="glass-card p-6 rounded-xl border border-white/10 mb-8">
        <h3 className="text-lg font-mono text-primary mb-2">aura run</h3>
        <p className="text-zinc-400 text-sm mb-4">Compiles and runs an AURA source file.</p>
        <pre className="bg-black/50 p-3 rounded-md text-sm text-zinc-300 font-mono">
          $ aura run main.ar<br/>
          $ aura run main.ar --explain   # Run with visual AST trace<br/>
          $ aura run main.ar --release   # Compile with O3 optimizations
        </pre>
      </div>

      <div className="glass-card p-6 rounded-xl border border-white/10 mb-8">
        <h3 className="text-lg font-mono text-primary mb-2">aura build</h3>
        <p className="text-zinc-400 text-sm mb-4">Compiles an AURA project into a standalone executable.</p>
        <pre className="bg-black/50 p-3 rounded-md text-sm text-zinc-300 font-mono">
          $ aura build<br/>
          $ aura build --target x86_64-linux-gnu
        </pre>
      </div>

      <div className="glass-card p-6 rounded-xl border border-white/10 mb-8">
        <h3 className="text-lg font-mono text-primary mb-2">aura pkg</h3>
        <p className="text-zinc-400 text-sm mb-4">Manages dependencies via the offline-first global cache.</p>
        <pre className="bg-black/50 p-3 rounded-md text-sm text-zinc-300 font-mono">
          $ aura pkg add serde<br/>
          $ aura pkg update
        </pre>
      </div>
    </div>
  );
}
