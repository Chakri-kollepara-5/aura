
export default function RoadmapDoc() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">AURA Roadmap</h1>
      <p className="text-lg text-zinc-400 mb-12 leading-relaxed">
        Our vision for the next 12 months. We are committed to maintaining strict backwards compatibility for all 2.x releases.
      </p>

      <div className="space-y-8">
        <div className="glass-card p-8 rounded-2xl border-l-4 border-l-primary relative">
          <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full">Q3 2026</div>
          <h3 className="text-2xl font-bold text-white mb-2">Package Registry V1</h3>
          <p className="text-zinc-400">Launch of the official AURA Package Registry (APR). This will allow developers to publish and download modules globally using `aura pkg publish`.</p>
        </div>

        <div className="glass-card p-8 rounded-2xl border-l-4 border-l-yellow-500 relative">
          <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500/20 text-yellow-500 text-xs font-bold rounded-full">Q4 2026</div>
          <h3 className="text-2xl font-bold text-white mb-2">Wasm Target Support</h3>
          <p className="text-zinc-400">First-class support for compiling AURA to WebAssembly (`wasm32-unknown-unknown`), enabling AURA code to run natively inside web browsers.</p>
        </div>

        <div className="glass-card p-8 rounded-2xl border-l-4 border-l-blue-500 relative">
          <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 text-blue-500 text-xs font-bold rounded-full">Q1 2027</div>
          <h3 className="text-2xl font-bold text-white mb-2">Advanced Generics</h3>
          <p className="text-zinc-400">Expanding the type system to support higher-kinded types and const generics for high-performance mathematical libraries.</p>
        </div>
      </div>
    </div>
  );
}
