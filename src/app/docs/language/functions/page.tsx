import { MonacoPreview } from "@/components/ui/MonacoPreview";

export default function FunctionsDoc() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Functions</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        Functions in AURA 2.0 are first-class citizens. They support explicit typing, implicit returns, and generic parameters.
      </p>
      
      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Defining a Function</h3>
      <p className="text-zinc-400 mb-4">Use the `fn` keyword to define a function. Return types are specified with `{"->"}`.</p>
      <MonacoPreview language="rust" height="200px" code={`fn add(a: i32, b: i32) -> i32 {
    a + b // Implicit return
}

let result = add(10, 20);
print(result); // 30`} />

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Named Arguments & Default Values</h3>
      <p className="text-zinc-400 mb-4">AURA supports highly readable named arguments and default parameters.</p>
      <MonacoPreview language="rust" height="250px" code={`fn connect(host: String = "localhost", port: u16 = 8080) {
    print("Connecting to ${host}:${port}...");
}

// All of these are valid:
connect();
connect(port: 5432);
connect(host: "api.aura-lang.org", port: 443);`} />

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Closures</h3>
      <p className="text-zinc-400 mb-4">Closures capture their environment. Use the `||` syntax.</p>
      <MonacoPreview language="rust" height="150px" code={`let multiplier = 5;
let scale = |x| x * multiplier;

print(scale(10)); // 50`} />
    </div>
  );
}
