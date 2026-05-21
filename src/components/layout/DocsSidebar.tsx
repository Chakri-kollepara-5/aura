"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function DocsSidebar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path || pathname.startsWith(path + '/');
    return `block transition-colors ${isActive ? 'text-primary font-semibold' : 'hover:text-primary'}`;
  };

  return (
    <nav className="space-y-6">
      <div>
        <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Getting Started</h4>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li><Link href="/docs/installation" className={getLinkClass('/docs/installation')}>Installation</Link></li>
          <li><Link href="/docs/quick-start" className={getLinkClass('/docs/quick-start')}>Quick Start</Link></li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Language</h4>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li><Link href="/docs/language/variables" className={getLinkClass('/docs/language/variables')}>Variables & mut</Link></li>
          <li><Link href="/docs/language/functions" className={getLinkClass('/docs/language/functions')}>Functions</Link></li>
          <li><Link href="/docs/language/structs-enums" className={getLinkClass('/docs/language/structs-enums')}>Structs & Enums</Link></li>
          <li><Link href="/docs/language/control-flow" className={getLinkClass('/docs/language/control-flow')}>Control Flow</Link></li>
          <li><Link href="/docs/language/concurrency" className={getLinkClass('/docs/language/concurrency')}>Concurrency</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Standard Library</h4>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li><Link href="/docs/stdlib/math" className={getLinkClass('/docs/stdlib/math')}>Math</Link></li>
          <li><Link href="/docs/stdlib/string" className={getLinkClass('/docs/stdlib/string')}>String</Link></li>
          <li><Link href="/docs/stdlib/io" className={getLinkClass('/docs/stdlib/io')}>File I/O</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Toolchain</h4>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li><Link href="/docs/cli" className={getLinkClass('/docs/cli')}>CLI Reference</Link></li>
          <li><Link href="/docs/internals" className={getLinkClass('/docs/internals')}>Compiler Internals</Link></li>
        </ul>
      </div>
    </nav>
  );
}
