"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Zap, Shield, FileCode2, Package, GitBranch, TerminalSquare } from "lucide-react";

const SPLASH_TEXTS = [
  "AURA 2.0!",
  "FEEL THE AURA!",
  "Explain Mode Active!",
  "100% Offline-First!",
  "Zero Dependencies!",
  "Visual AST Tracing!",
  "Runs at Light Speed!",
  "Built with Safety Orbit!",
  "Pratt Parsed!",
  "Type-Safe Concurrency!"
];

export default function LandingPage() {
  const [splashText, setSplashText] = useState("AURA 2.0!");

  useEffect(() => {
    const randomText = SPLASH_TEXTS[Math.floor(Math.random() * SPLASH_TEXTS.length)];
    setSplashText(randomText);
  }, []);

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Abstract Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-accent/20 blur-[150px] pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <motion.div 
          className="container mx-auto text-center max-w-5xl"
          variants={containerVars}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVars} className="mb-8 flex flex-col items-center justify-center relative">
            {/* Glowing background 'aura' behind the logo */}
            <div className="absolute w-40 h-40 rounded-full bg-primary/15 blur-[45px] aura-bg-glow pointer-events-none z-0" />
            
            <div className="relative flex items-center justify-center z-10">
              {/* Monogram Logo */}
              <div className="relative h-24 w-24 md:h-28 md:w-28">
                <Image
                  src="/images/aura-monogram.png"
                  alt="AURA Monogram Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_20px_rgba(0,229,153,0.3)]"
                  priority
                />
              </div>
              
              {/* Floating Bouncing Splash Text */}
              <div className="absolute -right-20 -top-3 md:-right-24 md:-top-4 z-20 pointer-events-none">
                <span className="splash-text-aura whitespace-nowrap px-2.5 py-1 bg-yellow-400 text-black text-[9px] md:text-xs font-black uppercase tracking-wider rounded-md shadow-[0_0_15px_rgba(250,204,21,0.6)] border border-yellow-300">
                  {splashText}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVars} className="mb-6 flex justify-center">
            <div className="glass px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 border border-primary/30 text-primary">
              <SparklesIcon className="w-4 h-4" />
              <span>AURA 2.0 is now available</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
          
          <motion.h1 variants={itemVars} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            The Explainable <br className="hidden md:block" />
            <span className="text-gradient">Offline-First</span> Language.
          </motion.h1>
          
          <motion.p variants={itemVars} className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            A production-grade programming language ecosystem engineered for deep comprehension, 
            safe concurrency, and absolute local control. Stop guessing how your code runs.
          </motion.p>
          
          <motion.div variants={itemVars} className="flex flex-wrap justify-center gap-4">
            <Link href="/docs/quick-start" className="px-6 py-3 rounded-lg bg-primary text-black font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(0,229,153,0.3)] hover:shadow-[0_0_40px_rgba(0,229,153,0.5)]">
              <Terminal className="w-5 h-5" />
              Get Started
            </Link>
            <Link href="/download" className="px-6 py-3 rounded-lg glass font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
              <Package className="w-5 h-5" />
              Download SDK
            </Link>
            <Link href="/docs" className="px-6 py-3 rounded-lg glass font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
              <FileCode2 className="w-5 h-5" />
              Documentation
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Terminal Animated Preview (Hero Visual) */}
      <section className="px-4 pb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto max-w-4xl"
        >
          <div className="glass-card rounded-2xl overflow-hidden border border-white/10">
            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-black/40">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto text-xs font-mono text-zinc-500 flex items-center gap-2">
                <TerminalSquare className="w-3.5 h-3.5" />
                aura run main.ar --explain
              </div>
            </div>
            <div className="p-6 font-mono text-sm md:text-base leading-relaxed bg-[#0c0c0c]">
              <div className="text-zinc-400">$&gt; aura run server.ar --explain</div>
              <div className="text-zinc-500 mt-2">// Lexical Analysis... <span className="text-green-400">Done (0.4ms)</span></div>
              <div className="text-zinc-500">// Parsing AST... <span className="text-green-400">Done (1.2ms)</span></div>
              <div className="text-zinc-500">// Semantic Check... <span className="text-green-400">Done (0.8ms)</span></div>
              <br />
              <div className="text-primary font-bold">▶ EXPLAIN MODE ACTIVE</div>
              <div className="text-zinc-300 mt-2">Executing &lt;main&gt; context:</div>
              <div className="pl-4 border-l-2 border-primary/30 mt-2">
                <div><span className="text-accent">spawn</span> thread_id=0x1a (HTTP Worker)</div>
                <div><span className="text-accent">spawn</span> thread_id=0x1b (DB Pool)</div>
                <div className="text-yellow-400 mt-2">→ Yielding execution to scheduler...</div>
                <div className="text-green-400 mt-2">✓ Server listening on localhost:8080</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-black/50 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Engineered for <span className="text-gradient">Control</span>.</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">AURA brings you closer to your code with deep tooling, an immutable AST, and a transparent runtime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<TerminalSquare className="w-6 h-6 text-primary" />}
              title="Explainable Runtime"
              description="Trace every variable mutation, function call, and scheduler yield. AURA's --explain flag demystifies execution."
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-accent" />}
              title="Offline-First Toolchain"
              description="No internet? No problem. The entire compiler, language server, and standard library operate 100% locally."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-yellow-400" />}
              title="Safe Concurrency"
              description="Built-in threading model with zero data races. Spawn lightweight processes natively with the `spawn` keyword."
            />
            <FeatureCard 
              icon={<Cpu className="w-6 h-6 text-rose-400" />}
              title="Hybrid Parser"
              description="A custom Recursive Descent + Pratt parser ensures blazing fast compilation and highly accurate diagnostics."
            />
            <FeatureCard 
              icon={<GitBranch className="w-6 h-6 text-emerald-400" />}
              title="Immutable AST"
              description="Write macro-like transformations safely. AURA's AST is strictly immutable, making semantic analysis deterministic."
            />
            <FeatureCard 
              icon={<FileCode2 className="w-6 h-6 text-blue-400" />}
              title="VS Code Native"
              description="First-class IDE support out of the box with intelligent autocompletion, hover docs, and inline explain mode."
            />
          </div>
        </div>
      </section>

      {/* Roadmap Teaser */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">The Road Ahead</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            AURA 2.0 is just the beginning. We are actively developing the native formatter, linter, and decentralized registry.
          </p>
          <Link href="/roadmap" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group">
            View full roadmap <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-zinc-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
