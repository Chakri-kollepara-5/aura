import { CodeBlock } from "@/components/ui/CodeBlock";

export default function InstallationPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Installation</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        Get AURA 2.0 up and running on your system in seconds. The compiler and toolchain are a single dependency-free binary.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Windows (PowerShell)</h2>
          <p className="text-zinc-400 mb-4">Run the following command in an elevated PowerShell prompt to download and install the SDK.</p>
          <CodeBlock 
            title="powershell"
            language="powershell"
            code={`iwr -useb http://localhost:3000/install.ps1 | iex`}
          />
          <p className="text-zinc-400 mt-4">The installer will automatically add AURA to your PATH. You may need to restart your terminal.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Verify Installation</h2>
          <p className="text-zinc-400 mb-4">Verify that the compiler and toolchain are installed correctly by checking the version.</p>
          <CodeBlock 
            title="terminal"
            language="bash"
            code={`$ aura --version\nAura 2.0.0 (offline-first runtime)`}
          />
        </section>

        <section className="glass-card p-6 rounded-xl border-l-4 border-l-primary">
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            VS Code Extension (Recommended)
          </h3>
          <p className="text-zinc-400 text-sm">
            For the best experience, including live explain mode and hover diagnostics, install the official AURA VS Code extension.
          </p>
          <div className="mt-4">
            <CodeBlock 
              title="terminal"
              language="bash"
              code={`code --install-extension aura-lang.aura-vscode`}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
