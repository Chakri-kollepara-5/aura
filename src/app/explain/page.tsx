"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Activity, Code2, Cpu, ArrowRight } from "lucide-react";
import { MonacoPreview } from "@/components/ui/MonacoPreview";

export default function ExplainModePage() {
  const sampleCode = `// Fetch user data with Explain Mode tracing enabled
fn fetch_user(id: Int) -> User {
    // 1. Trace memory allocation
    mut user = User::new(id);
    
    // 2. Trace IO operations
    let data = fs::read("db.json");
    
    // 3. Trace concurrency spawn
    spawn process_analytics(user);
    
    return user;
}`;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 border border-accent/30">
          <Activity className="w-4 h-4" />
          Interactive Diagnostics Engine
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="text-gradient-purple">Explain Mode</span>
        </h1>
        <p className="text-xl text-zinc-400">
          AURA is the first offline-first language with a built-in visualizer for its entire runtime. 
          See the AST, memory allocations, and scheduler yields in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="glass-card p-6 rounded-2xl flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Code2 className="text-primary" /> 1. The Source Code
          </h2>
          <p className="text-zinc-400 mb-6">
            Write your code in AURA. When you run with the <code>--explain</code> flag, the runtime captures a trace of every internal state change without any performance overhead in production.
          </p>
          <MonacoPreview code={sampleCode} height="280px" />
        </div>

        <div className="flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-6 rounded-2xl border-l-4 border-l-purple-500"
          >
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-purple-400" /> Token Stream
            </h3>
            <div className="font-mono text-xs text-zinc-500 bg-black/50 p-4 rounded-lg break-all">
              [FN] [IDENT:fetch_user] [LPAREN] [IDENT:id] [COLON] [IDENT:Int] [RPAREN] [ARROW] [IDENT:User] [LBRACE] ...
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-2xl border-l-4 border-l-blue-500"
          >
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-400" /> Abstract Syntax Tree (Immutable)
            </h3>
            <pre className="font-mono text-xs text-zinc-400 bg-black/50 p-4 rounded-lg overflow-x-auto">
{`FunctionDecl {
  name: "fetch_user",
  params: [Param { name: "id", type: "Int" }],
  returnType: "User",
  body: BlockStmt { ... }
}`}
            </pre>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-6 rounded-2xl border-l-4 border-l-emerald-500"
          >
            <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-emerald-400" /> Execution Trace
            </h3>
            <div className="font-mono text-xs bg-black/50 p-4 rounded-lg">
              <div className="text-zinc-400">0.00ms: <span className="text-purple-400">CALL</span> fetch_user(id=1)</div>
              <div className="text-zinc-400">0.02ms: <span className="text-yellow-400">ALLOC</span> User (32 bytes) at 0x7ffd9a</div>
              <div className="text-zinc-400">0.05ms: <span className="text-blue-400">IO_WAIT</span> fs::read</div>
              <div className="text-zinc-400">2.10ms: <span className="text-emerald-400">SPAWN</span> thread_2 (process_analytics)</div>
              <div className="text-zinc-400">2.12ms: <span className="text-red-400">RET</span> User</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <p className="text-zinc-500 mb-6">Ready to see your code's hidden life?</p>
        <button className="px-8 py-3 rounded-xl bg-white text-black font-bold hover:bg-zinc-200 transition-colors inline-flex items-center gap-2">
          Download SDK <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
