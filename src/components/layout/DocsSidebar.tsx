"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function DocsSidebar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-primary font-medium block"
      : "hover:text-white transition-colors block";
  };

  return (
    <nav className="w-64 shrink-0 hidden lg:block overflow-y-auto h-[calc(100vh-4rem)] sticky top-16 pr-6 pb-12 pt-8 border-r border-white/5">
      <div className="mb-8">
        <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Getting Started</h4>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li><Link href="/docs" className={getLinkClass('/docs')}>Introduction</Link></li>
          <li><Link href="/docs/installation" className={getLinkClass('/docs/installation')}>Installation</Link></li>
          <li><Link href="/docs/quick-start" className={getLinkClass('/docs/quick-start')}>Quick Start (8 Steps)</Link></li>
        </ul>
      </div>

      <div className="mb-8">
        <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Language Reference</h4>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li><Link href="/docs/language/functions" className={getLinkClass('/docs/language/functions')}>Functions & Scope</Link></li>
          <li><Link href="/docs/language/structs-enums" className={getLinkClass('/docs/language/structs-enums')}>Structs & Enums</Link></li>
          <li><Link href="/docs/language/control-flow" className={getLinkClass('/docs/language/control-flow')}>Control Flow</Link></li>
          <li><Link href="/docs/language/concurrency" className={getLinkClass('/docs/language/concurrency')}>Concurrency Runtime</Link></li>
        </ul>
      </div>

      <div className="mb-8">
        <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Toolchain & CLI</h4>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li><Link href="/docs/cli" className={getLinkClass('/docs/cli')}>CLI Reference</Link></li>
          <li><Link href="/docs/formatter" className={getLinkClass('/docs/formatter')}>Formatter (aura fmt)</Link></li>
          <li><Link href="/docs/troubleshooting" className={getLinkClass('/docs/troubleshooting')}>Troubleshooting</Link></li>
        </ul>
      </div>

      <div className="mb-8">
        <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Compiler Internals</h4>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li><Link href="/docs/internals" className={getLinkClass('/docs/internals')}>Architecture</Link></li>
          <li><Link href="/explain" className={getLinkClass('/explain')}>Explain Mode</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Ecosystem</h4>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li><Link href="/docs/status" className={getLinkClass('/docs/status')}>Real vs Planned</Link></li>
          <li><Link href="/docs/branding" className={getLinkClass('/docs/branding')}>Branding &amp; Assets</Link></li>
          <li><Link href="/examples" className={getLinkClass('/examples')}>Examples Gallery</Link></li>
          <li><Link href="/roadmap" className={getLinkClass('/roadmap')}>Roadmap</Link></li>
        </ul>
      </div>

      <div className="mt-auto pt-8 border-t border-white/5">
        <p className="text-xs text-zinc-600">Designed &amp; built by</p>
        <p className="text-xs font-semibold text-zinc-400 mt-0.5">k.chakravarthi</p>
      </div>
    </nav>
  );
}
