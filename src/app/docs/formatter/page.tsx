import { MonacoPreview } from "@/components/ui/MonacoPreview";

export default function FormatterDoc() {
  const beforeFmt = `func    greet(name:str)->str{
let   msg="Hello, "+name;
return msg;
}`;

  const afterFmt = `func greet(name: str) -> str {
    let msg = "Hello, " + name;
    return msg;
}`;

  const fmtCmd = `aura fmt hello.aura`;
  const fmtCheck = `aura fmt --check hello.aura`;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Formatter — aura fmt</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        The AURA 2.0 formatter is a token-stream driven code formatter built directly into the compiler toolchain. It enforces consistent style — indentation, spacing around operators, and brace alignment — automatically.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Running the Formatter</h2>
          <p className="text-sm text-zinc-400 mb-4">
            Format a file in-place. The original file is overwritten with the corrected output.
          </p>
          <MonacoPreview language="shell" height="60px" code={fmtCmd} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Check Mode (No Write)</h2>
          <p className="text-sm text-zinc-400 mb-4">
            Use <code>--check</code> to validate formatting without writing. Exits with a non-zero status if the file is not formatted. Useful in CI pipelines.
          </p>
          <MonacoPreview language="shell" height="60px" code={fmtCheck} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Before &amp; After</h2>
          <p className="text-sm text-zinc-400 mb-2 font-semibold">Before <code>aura fmt</code>:</p>
          <MonacoPreview language="rust" height="120px" code={beforeFmt} />
          <p className="text-sm text-zinc-400 mt-6 mb-2 font-semibold">After <code>aura fmt</code>:</p>
          <MonacoPreview language="rust" height="120px" code={afterFmt} />
        </section>

        <section className="glass-card p-6 rounded-2xl border border-white/5">
          <h2 className="text-xl font-bold mb-3 text-white">Formatting Rules</h2>
          <ul className="space-y-2 text-zinc-400 text-sm list-disc list-inside">
            <li>4-space indentation for all block bodies.</li>
            <li>Single space around binary operators (<code>+</code>, <code>-</code>, <code>*</code>, <code>=</code>, etc.).</li>
            <li>Single space after colons in parameter and field type annotations.</li>
            <li>Single space before and after <code>-&gt;</code> return type annotations.</li>
            <li>Opening brace <code>{"{"}</code> always on the same line as the declaration.</li>
            <li>No trailing whitespace on any line.</li>
            <li>Single blank line between top-level declarations.</li>
          </ul>
        </section>

        <section className="glass-card p-6 rounded-2xl border border-white/5">
          <h2 className="text-xl font-bold mb-3 text-white">Architecture</h2>
          <p className="text-sm text-zinc-400">
            The formatter operates on the raw <strong>token stream</strong> produced by the Lexer — not on the AST. This ensures it never alters program semantics even in the presence of partial syntax errors. It is safe to run on any file at any stage of editing.
          </p>
        </section>
      </div>
    </div>
  );
}
