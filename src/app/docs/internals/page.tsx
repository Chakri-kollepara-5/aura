import { MonacoPreview } from "@/components/ui/MonacoPreview";

export default function InternalsDoc() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-6">Compiler Internals</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        AURA 2.0 features a completely rewritten architecture. We abandoned standard Lex/Yacc generators in favor of a hand-rolled Hybrid Parser.
      </p>

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Hybrid Parsing (Recursive Descent + Pratt)</h3>
      <p className="text-zinc-400 mb-4">
        Statement blocks and structural declarations are parsed using top-down Recursive Descent for maximum error recovery. However, expressions (like mathematics and deeply nested method chaining) are delegated to a Pratt (Top-Down Operator Precedence) parser.
      </p>
      
      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Immutable AST</h3>
      <p className="text-zinc-400 mb-4">
        Unlike traditional compilers that mutate AST nodes during semantic analysis (type checking), AURA's AST is strictly immutable. The semantic analyzer produces a parallel `TypedAST` map. This design makes incremental compilation and Language Server Protocol (LSP) queries 100% thread-safe.
      </p>

      <div className="glass-card p-6 rounded-xl border-l-4 border-l-primary mt-8">
        <h3 className="text-lg font-bold text-white mb-2">Explain Mode Runtime</h3>
        <p className="text-zinc-400 text-sm">
          When passing `--explain`, the compiler does not strip metadata. Instead, the VM interpreter hooks into every opcode dispatch to stream real-time ANSI-colored JSON traces back to the terminal stdout.
        </p>
      </div>
    </div>
  );
}
