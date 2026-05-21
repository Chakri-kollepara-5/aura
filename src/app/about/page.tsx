
export default function AboutDoc() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">About AURA</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        AURA was born out of frustration with complex, fragmented build tools and slow compilation times. 
      </p>

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Our Philosophy</h3>
      <ul className="space-y-4 text-zinc-400 list-disc list-inside">
        <li><strong>Offline-First:</strong> AURA is designed to work fully offline. The standard library and compiler are bundled together.</li>
        <li><strong>Zero Dependencies:</strong> We believe in a single binary toolchain. No external linkers or hidden dependencies required.</li>
        <li><strong>Developer Experience:</strong> Compilation errors should be helpful, not hostile. AURA's Explain Mode is built directly into the VM to teach, rather than just complain.</li>
      </ul>

      <h3 className="text-2xl font-bold mb-4 mt-12 text-white">The Core Team</h3>
      <p className="text-zinc-400 mb-6">
        AURA is maintained by an open-source collective of compiler engineers and language designers. The ecosystem and this website were actively developed by <strong>K. Chakravarthi Dev</strong>.
      </p>
      <p className="text-zinc-400">
        For support, collaborations, or general queries, feel free to reach out to us via email at{" "}
        <a href="mailto:vschakravarthi7@gmail.com" className="text-primary hover:underline font-semibold">
          vschakravarthi7@gmail.com
        </a>.
      </p>
    </div>
  );
}
