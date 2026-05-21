"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function LandingPage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introShown = sessionStorage.getItem("aura_intro_shown");
    if (introShown) {
      setShowIntro(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem("aura_intro_shown", "true");
    }, 2500);
    return () => clearTimeout(timer);
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
      {/* Netflix-style Logo Splash Screen */}
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center pointer-events-auto"
          onClick={() => setShowIntro(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, filter: "blur(10px)" }}
            animate={{ 
              scale: [0.5, 1, 1.2, 4], 
              opacity: [0, 1, 1, 0],
              filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(20px)"]
            }}
            transition={{ 
              duration: 2.2, 
              times: [0, 0.2, 0.7, 1.0], 
              ease: [0.25, 1, 0.5, 1]
            }}
            className="relative w-48 h-48 md:w-64 md:h-64 flex flex-col items-center justify-center"
          >
            <Image
              src="/images/aura-monogram.png"
              alt="AURA Logo Intro"
              fill
              className="object-contain drop-shadow-[0_0_40px_rgba(0,229,153,0.8)]"
              priority
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30, letterSpacing: "0.2em" }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [30, 0, 0, -10],
              letterSpacing: ["0.2em", "0.6em", "0.7em", "1em"]
            }}
            transition={{ 
              duration: 2.2,
              times: [0, 0.3, 0.7, 1.0],
              ease: "easeOut"
            }}
            className="mt-8 text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary text-center tracking-widest drop-shadow-[0_0_20px_rgba(0,229,153,0.5)] uppercase"
          >
            AURA
          </motion.div>
          
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: ["0%", "80%", "100%", "0%"], opacity: [0, 1, 0.5, 0] }}
            transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }}
            className="absolute bottom-1/4 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </motion.div>
      )}

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
            </div>
          </motion.div>

          <motion.div variants={itemVars} className="mb-6 flex justify-center">
            <div className="glass px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 border border-primary/30 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>AURA 2.0 is now available</span>
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
            <Link href="/docs/quick-start" className="px-6 py-3 rounded-lg bg-primary text-black font-semibold hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(0,229,153,0.3)] hover:shadow-[0_0_40px_rgba(0,229,153,0.5)]">
              Get Started
            </Link>
            <Link href="/download" className="px-6 py-3 rounded-lg glass font-semibold hover:bg-white/10 transition-all">
              Download SDK
            </Link>
            <Link href="/docs" className="px-6 py-3 rounded-lg glass font-semibold hover:bg-white/10 transition-all">
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
              num="01"
              title="Explainable Runtime"
              description="Trace every variable mutation, function call, and scheduler yield. AURA's --explain flag demystifies execution."
            />
            <FeatureCard 
              num="02"
              title="Offline-First Toolchain"
              description="No internet? No problem. The entire compiler, language server, and standard library operate 100% locally."
            />
            <FeatureCard 
              num="03"
              title="Safe Concurrency"
              description="Built-in threading model with zero data races. Spawn lightweight processes natively with the `spawn` keyword."
            />
            <FeatureCard 
              num="04"
              title="Hybrid Parser"
              description="A custom Recursive Descent + Pratt parser ensures blazing fast compilation and highly accurate diagnostics."
            />
            <FeatureCard 
              num="05"
              title="Immutable AST"
              description="Write macro-like transformations safely. AURA's AST is strictly immutable, making semantic analysis deterministic."
            />
            <FeatureCard 
              num="06"
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
            View full roadmap
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ num, title, description }: { num: string, title: string, description: string }) {
  return (
    <div className="glass-card p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
        <span className="text-lg font-bold font-mono text-primary">{num}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-zinc-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
