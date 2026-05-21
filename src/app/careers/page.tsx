
export default function CareersDoc() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Join the AURA Team</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        We are building the next generation of developer tools. If you are passionate about compiler design, language servers, or developer experience, we'd love to talk.
      </p>

      <div className="glass-card p-12 rounded-3xl border border-white/10 text-center mt-12">
        <h3 className="text-2xl font-bold text-white mb-4">No open positions</h3>
        <p className="text-zinc-400 mb-0">
          We are currently fully staffed! However, we are always looking for open-source contributors. Check out our GitHub repository to get involved.
        </p>
      </div>
    </div>
  );
}
