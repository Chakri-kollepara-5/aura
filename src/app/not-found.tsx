import Link from "next/link";
import { TerminalSquare, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[80vh] items-center justify-center relative overflow-hidden px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="glass-card p-12 rounded-3xl border border-white/10 text-center max-w-lg w-full relative z-10 animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 mx-auto bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center mb-8">
          <TerminalSquare className="w-10 h-10 text-red-400" />
        </div>
        
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4 tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl font-bold text-white mb-4">Symbol Not Found</h2>
        <p className="text-zinc-400 mb-8 leading-relaxed">
          The requested module or page could not be resolved in the current environment. It might have been moved or deleted.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </Link>
          <Link 
            href="/docs" 
            className="w-full sm:w-auto px-6 py-3 rounded-xl glass hover:bg-white/10 transition-colors flex items-center justify-center text-white font-medium"
          >
            Browse Docs
          </Link>
        </div>
      </div>
    </div>
  );
}
