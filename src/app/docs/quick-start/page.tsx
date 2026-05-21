import { MonacoPreview } from "@/components/ui/MonacoPreview";
import { CodeBlock } from "@/components/ui/CodeBlock";

export default function QuickStartPage() {
  const helloWorldCode = `// main.ar
fn main() {
    print("Welcome to AURA 2.0");
    
    mut count = 0;
    while count < 3 {
        print("Count: {count}");
        count = count + 1;
    }
}`;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Quick Start</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        Let's write your first AURA program. AURA syntax is designed to be familiar yet strictly typed and predictable.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Hello World</h2>
        <p className="text-zinc-400 mb-4">Create a new file called <code>main.ar</code> and add the following code:</p>
        
        <MonacoPreview code={helloWorldCode} height="220px" />
        
        <p className="text-zinc-400 mt-6 mb-4">Run your program using the AURA CLI:</p>
        
        <CodeBlock 
          title="terminal"
          code={`$ aura run main.ar\nWelcome to AURA 2.0\nCount: 0\nCount: 1\nCount: 2`}
        />
      </section>

      <section className="glass p-6 rounded-xl border border-white/5 mb-12">
        <h3 className="text-lg font-bold mb-3 text-white">Next Steps</h3>
        <ul className="list-disc pl-5 space-y-2 text-zinc-400">
          <li>Learn about <a href="/docs/language/variables" className="text-primary hover:underline">Variables and Mutability</a></li>
          <li>Understand the <a href="/explain" className="text-primary hover:underline">Explainable Runtime</a></li>
          <li>Explore the <a href="/docs/stdlib" className="text-primary hover:underline">Standard Library</a></li>
        </ul>
      </section>
    </div>
  );
}
