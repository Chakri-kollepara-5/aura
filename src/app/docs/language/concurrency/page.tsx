import { MonacoPreview } from "@/components/ui/MonacoPreview";

export default function ConcurrencyDoc() {
  const spawnCode = [
    'use aura::sync::sleep;',
    '',
    'spawn {',
    '    print("Running in a background task!");',
    '    sleep(1.seconds());',
    '    print("Task completed.");',
    '}',
    '',
    'print("Main thread continues immediately.");'
  ].join('\\n');

  const channelCode = [
    'use aura::sync::channel;',
    '',
    'let (tx, rx) = channel();',
    '',
    'spawn {',
    '    tx.send("Hello from worker").unwrap();',
    '}',
    '',
    '// Blocks until a message is received',
    'let msg = rx.recv().unwrap();',
    'print("Received: ${msg}");'
  ].join('\\n');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Concurrency</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        AURA introduces a lightweight, zero-data-race concurrency model using the \`spawn\` keyword and MPSC (Multi-Producer, Single-Consumer) channels.
      </p>

      <div className="glass-card p-6 rounded-xl border-l-4 border-l-yellow-500 mb-8">
        <h3 className="text-lg font-bold text-white mb-2">Safe by Design</h3>
        <p className="text-zinc-400 text-sm">
          AURA strictly enforces ownership across threads. You cannot share mutable state between spawned tasks without an explicit \`Mutex\` or \`Channel\`.
        </p>
      </div>

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Spawning Tasks</h3>
      <MonacoPreview language="rust" height="200px" code={spawnCode} />

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Channels</h3>
      <MonacoPreview language="rust" height="300px" code={channelCode} />
    </div>
  );
}
