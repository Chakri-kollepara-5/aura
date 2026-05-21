import { MonacoPreview } from "@/components/ui/MonacoPreview";

export default function TroubleshootingDoc() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Troubleshooting</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        Common errors and how to resolve them when working with the Python-based AURA compiler.
      </p>

      <div className="space-y-12">
        <section>
          <h3 className="text-xl font-bold mb-3 text-white">Error: 'aura' is not recognized</h3>
          <MonacoPreview language="shell" height="60px" code={`aura : The term 'aura' is not recognized as the name of a cmdlet...`} />
          <p className="text-zinc-400 mt-3">
            <strong>Fix:</strong> This happens if Python's `Scripts` directory is not in your Windows PATH. Ensure you ran `pip install -e .` and verify that `C:\\Python3X\\Scripts` is added to your Environment Variables.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3 text-white">Compile Error: Expected Token</h3>
          <MonacoPreview language="shell" height="60px" code={`Compile Error: Expected TokenType.LBRACE, got TokenType.IDENTIFIER`} />
          <p className="text-zinc-400 mt-3">
            <strong>Fix:</strong> This is a syntax error detected by the Recursive Descent Parser. You likely forgot a brace or semicolon. Run `aura explain file.aura` to see the exact token stream before the crash.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3 text-white">Formatter Output is Blank</h3>
          <p className="text-zinc-400 mt-3">
            <strong>Fix:</strong> The Phase 16 formatter is token-driven. If there is an invalid token early in the file, formatting may abort. Check for unbalanced `{}` braces.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-3 text-white">Windows PowerShell Execution Policies</h3>
          <p className="text-zinc-400 mt-3">
            <strong>Fix:</strong> If you cannot execute Python module entrypoints, you may need to bypass the execution policy for your local session:
          </p>
          <MonacoPreview language="shell" height="60px" code={`Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`} />
        </section>
      </div>
    </div>
  );
}
