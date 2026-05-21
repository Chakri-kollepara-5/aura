import { MonacoPreview } from "@/components/ui/MonacoPreview";

export default function VariablesPage() {
  const code1 = `// Variables are immutable by default
let name = "AURA";
let version = 2.0;

// This will cause a compiler error:
// name = "New Name";`;

  const code2 = `// Use 'mut' for mutable variables
mut count = 0;
count = count + 1;

print("Count is now {count}");`;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Variables & Mutability</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        In AURA, variables are immutable by default. This is a core design choice to ensure safety and predictability, especially in concurrent programs.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Immutable by Default</h2>
        <p className="text-zinc-400 mb-4">
          When you declare a variable with <code>let</code>, it cannot be reassigned. This prevents unintended side effects.
        </p>
        <MonacoPreview code={code1} height="150px" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Mutable Variables</h2>
        <p className="text-zinc-400 mb-4">
          If you need to change the value of a variable, use the <code>mut</code> keyword. This explicitly signals to the compiler and other developers that the variable's state will change.
        </p>
        <MonacoPreview code={code2} height="140px" />
      </section>
      
      <section className="glass-card p-6 rounded-xl border-l-4 border-l-accent">
        <h3 className="text-lg font-bold text-white mb-2">Memory Safety Guarantee</h3>
        <p className="text-zinc-400 text-sm">
          AURA's semantic analyzer tracks all mutable variables. If a mutable variable is shared across thread boundaries without proper synchronization primitives, the compiler will catch it at compile-time.
        </p>
      </section>
    </div>
  );
}
