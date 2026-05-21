import { MonacoPreview } from "@/components/ui/MonacoPreview";

export default function ControlFlowDoc() {
  const matchCode = [
    'let state = ConnectionState::Connecting(3);',
    '',
    'match state {',
    '    ConnectionState::Disconnected => print("Offline"),',
    '    ConnectionState::Connecting(retries) => print("Trying... (${retries}/5)"),',
    '    ConnectionState::Connected(id) => print("Online: ${id}"),',
    '}'
  ].join('\\n');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Control Flow</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        AURA 2.0 provides powerful pattern matching and expression-based control flow, eliminating the need for complex nested ternary operators.
      </p>

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">If Expressions</h3>
      <p className="text-zinc-400 mb-4">In AURA, `if` is an expression that returns a value.</p>
      <MonacoPreview language="rust" height="150px" code={`let status_code = 404;
let message = if status_code == 200 {
    "OK"
} else {
    "Error"
};`} />

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Pattern Matching (match)</h3>
      <p className="text-zinc-400 mb-4">The `match` keyword ensures exhaustive checking across all variants.</p>
      <MonacoPreview language="rust" height="250px" code={matchCode} />

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Loops</h3>
      <MonacoPreview language="rust" height="250px" code={`// Infinite loop
loop {
    if condition { break; }
}

// While loop
while active { /* ... */ }

// For-in loop
for item in vec![1, 2, 3] {
    print(item);
}`} />
    </div>
  );
}
