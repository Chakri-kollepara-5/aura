import Image from "next/image";

export default function BrandingDoc() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">
        Branding &amp; Assets
      </h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        Official logos, visual assets, and style guidelines for the AURA programming language ecosystem.
      </p>

      {/* Main Brand Image Showcase */}
      <div className="glass-card p-6 rounded-2xl border border-white/10 mb-12 overflow-hidden bg-black/50">
        <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-white/5 bg-[#050505] flex items-center justify-center p-4">
          <Image
            src="/images/aura-hero.png"
            alt="AURA Language Logo"
            width={800}
            height={600}
            className="object-contain w-full h-full"
            priority
          />
        </div>
        <div className="mt-6 flex flex-wrap justify-between items-center gap-4 border-t border-white/5 pt-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">Brand Assets Sheet</h3>
            <p className="text-xs text-zinc-500">PNG Format • High Resolution • 669KB</p>
          </div>
          <div className="flex gap-2">
            <a
              href="/images/aura-brand.png"
              download="aura-branding-guidelines.png"
              className="flex items-center gap-2 px-4 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors text-sm"
            >
              Download Full Sheet
            </a>
          </div>
        </div>
      </div>

      {/* Branding Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="glass-card p-6 rounded-xl border border-white/5 flex flex-col justify-between">
          <div>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/5 bg-black/35 mb-4 flex items-center justify-center p-4">
              <Image
                src="/images/aura-app-icon.png"
                alt="AURA App Icon"
                width={160}
                height={160}
                className="object-contain max-h-full"
              />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">App Icon</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              The core monogram framed inside a rounded dark-mode container with a soft outer glow. Primarily used for application launchers, VS Code extension marketplaces, and desktop packaging icons.
            </p>
          </div>
        </div>

        <div className="glass-card p-6 rounded-xl border border-white/5 flex flex-col justify-between">
          <div>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/5 bg-black/35 mb-4 flex items-center justify-center p-4">
              <Image
                src="/images/aura-monogram.png"
                alt="AURA Monogram"
                width={160}
                height={160}
                className="object-contain max-h-full"
              />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Monogram (The Logo)</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              A stylized futuristic letter <strong>A</strong> intersected by a bright orbital light ring. Symbolizes the compiler's safety-first orbital runtime and transparent explanation loop.
            </p>
          </div>
        </div>

        <div className="glass-card p-6 rounded-xl border border-white/5 flex flex-col justify-between">
          <div>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/5 bg-black/35 mb-4 flex items-center justify-center p-4">
              <Image
                src="/images/aura-cli-mark.png"
                alt="AURA CLI Mark"
                width={160}
                height={160}
                className="object-contain max-h-full"
              />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">CLI Mark</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              A minimalist variation combining the core monogram with the terminal prompt symbol (<code>A &gt;</code>). Used for CLI terminals, command-line utilities, and developer logs.
            </p>
          </div>
        </div>

        <div className="glass-card p-6 rounded-xl border border-white/5 flex flex-col justify-between">
          <div>
            <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/5 bg-black/35 mb-4 flex items-center justify-center p-4">
              <Image
                src="/images/aura-horizontal.png"
                alt="AURA Horizontal Logotype"
                width={220}
                height={160}
                className="object-contain max-h-full"
              />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Horizontal Logotype</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              The complete brand lockup featuring the monogram alongside the custom, wide-spaced sans-serif <strong>AURA</strong> lettering. Designed for landing page headers, press releases, and headers.
            </p>
          </div>
        </div>
      </div>

      {/* Usage Policy */}
      <section className="glass-card p-6 rounded-xl border-l-4 border-l-primary/70">
        <h3 className="text-lg font-bold text-white mb-2">
          Usage Guidelines
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          The AURA logos are open for community use. When using them for tutorials, packages, or editor themes, please maintain the original aspect ratios and do not modify the colors or typography of the brand symbols.
        </p>
      </section>
    </div>
  );
}

