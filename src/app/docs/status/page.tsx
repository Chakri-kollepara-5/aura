export default function StatusDoc() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Real vs Planned Features</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        AURA is transparent about what works today and what is coming tomorrow. We do not use mock binaries.
      </p>

      <div className="space-y-8">
        <section className="glass-card p-6 rounded-2xl border-l-4 border-l-green-500">
          <h3 className="text-2xl font-bold mb-4 text-white">REAL (Implemented)</h3>
          <ul className="space-y-3 text-zinc-400 list-disc list-inside">
            <li><strong>Lexer & Parser:</strong> Robust recursive descent AST generation.</li>
            <li><strong>Interpreter:</strong> Core tree-walking runtime engine.</li>
            <li><strong>CLI Package:</strong> Executable \`aura run\` routing.</li>
            <li><strong>Formatter:</strong> Phase 16 AST-safe token formatting.</li>
            <li><strong>Explain Mode:</strong> Visual token-stream debugging.</li>
            <li><strong>Language Basics:</strong> Functions, Scope, let/mut, conditionals.</li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-2xl border-l-4 border-l-yellow-500">
          <h3 className="text-2xl font-bold mb-4 text-white">EXPERIMENTAL (Testing)</h3>
          <ul className="space-y-3 text-zinc-400 list-disc list-inside">
            <li><strong>Concurrency (\`spawn\`):</strong> Thread-pool integration.</li>
            <li><strong>File I/O:</strong> Standard library async filesystem access.</li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-2xl border-l-4 border-l-primary">
          <h3 className="text-2xl font-bold mb-4 text-white">PLANNED (Upcoming)</h3>
          <ul className="space-y-3 text-zinc-400 list-disc list-inside">
            <li><strong>Semantic Analyzer:</strong> Full static typing pass.</li>
            <li><strong>Linter:</strong> Strict code-quality checks.</li>
            <li><strong>LSP:</strong> Native Language Server Protocol integration for VS Code.</li>
            <li><strong>Package Registry (\`aura pkg\`):</strong> Global dependency management.</li>
            <li><strong>PyInstaller SDK:</strong> Standalone \`aura.exe\` downloads without Python requirement.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
