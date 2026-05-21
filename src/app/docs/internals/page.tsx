export default function InternalsDoc() {
  const pipeline = [
    { phase: "Phase 1 — Token System", file: "lexer/token_types.py", desc: "Defines the canonical TokenType enum and the immutable Token dataclass. Every lexeme the compiler can recognize maps to a unique, typed enum member." },
    { phase: "Phase 2 — Lexer", file: "lexer/lexer.py", desc: "Finite-state-machine character scanner. Consumes raw source text and emits a stable, ordered list of Token objects. Supports tolerant error recovery via ERROR tokens." },
    { phase: "Phase 3 — AST System", file: "ast/nodes.py", desc: "Pure structural data classes representing every syntactic construct. Uses dataclasses for typed, modular node hierarchies: Expression, Statement, Declaration, Program." },
    { phase: "Phase 4 — Parser", file: "parser/parser.py", desc: "Hybrid Recursive Descent + Pratt parser. Recursive descent handles declarations and statements. The Pratt sub-parser handles expression precedence and associativity using a centralized rule table." },
    { phase: "Phase 5 — Semantic Analysis", file: "semantic/analyzer.py", desc: "AST Visitor that walks the tree, builds symbol tables, resolves variable references, and performs basic type checking. Emits typed diagnostics without modifying the AST." },
    { phase: "Phase 6 — Interpreter", file: "interpreter/interpreter.py", desc: "Tree-walking runtime implemented as an AST Visitor. Evaluates the AST directly in Python. Manages environments (scopes), function calls, closures, and runtime values." },
    { phase: "Phase 7 — Concurrency", file: "runtime/concurrency.py", desc: "Implements spawn, wait, parallel, and seq using Python threading.Thread and thread.join(). Designed for asyncio migration in a future phase." },
    { phase: "Phase 8 — CLI & REPL", file: "aura.py + repl/repl.py", desc: "The aura command-line entrypoint and the interactive REPL. Routes commands (run, check, explain, fmt, repl) through the full compiler pipeline." },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Compiler Architecture</h1>
      <p className="text-lg text-zinc-400 mb-4 leading-relaxed">
        AURA 2.0 is a production-grade interpreted language implemented entirely in Python 3.12+. The compiler pipeline is a classic multi-pass architecture where each phase transforms the output of the previous one.
      </p>
      <p className="text-sm text-zinc-500 mb-10">
        Designed by <span className="text-white font-semibold">k.chakravarthi</span>
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Pipeline Overview</h2>
        <div className="flex flex-col gap-3">
          {stageFlow.map((stage, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="glass-card px-4 py-2 rounded-lg text-sm font-mono text-white border border-white/10 min-w-[220px]">
                {stage}
              </div>
              {i < 8 && <span className="text-zinc-600 text-lg">↓</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white mb-4">Phase Breakdown</h2>
        {pipeline.map((p, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl border border-white/5">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg font-bold text-white">{p.phase}</h3>
              <code className="text-xs text-primary bg-primary/10 px-2 py-1 rounded shrink-0">{p.file}</code>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 glass-card p-6 rounded-2xl border border-white/5">
        <h2 className="text-xl font-bold mb-4 text-white">Visitor Pattern</h2>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Every compiler pass after Phase 3 (AST) is implemented as an <strong className="text-white">ASTVisitor</strong>. Each AST node implements a single <code className="text-primary">accept(visitor)</code> method that calls back into the visitor&apos;s specific handler. This double-dispatch pattern allows the Semantic Analyzer, Interpreter, Formatter, and future passes (linter, code generator) to be developed and tested independently without modifying the AST structure.
        </p>
      </div>

      <div className="mt-6 glass-card p-6 rounded-2xl border border-white/5">
        <h2 className="text-xl font-bold mb-4 text-white">Engineering Principles</h2>
        <ul className="space-y-2 text-zinc-400 text-sm list-disc list-inside">
          <li><strong className="text-white">Immutable Tokens</strong> — Token objects are frozen dataclasses; no pass can mutate them.</li>
          <li><strong className="text-white">Tolerant Parsing</strong> — The lexer and parser emit ERROR tokens / diagnostics rather than crashing, allowing multi-error reporting.</li>
          <li><strong className="text-white">Strict Separation</strong> — Each phase has exactly one job. The parser never evaluates; the interpreter never parses.</li>
          <li><strong className="text-white">O(N) Scanning</strong> — The lexer is a deterministic FSM with no backtracking, guaranteeing linear-time tokenization.</li>
          <li><strong className="text-white">Modular Structure</strong> — Each compiler phase lives in its own Python package, importable independently for testing.</li>
        </ul>
      </div>
    </div>
  );
}

const stageFlow = [
  "Source Code (.aura)",
  "Lexer",
  "Token Stream",
  "Parser",
  "AST",
  "Semantic Analyzer",
  "Annotated AST",
  "Interpreter / Runtime",
  "Execution Output"
];
