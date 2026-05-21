import { MonacoPreview } from "@/components/ui/MonacoPreview";

export default function ExamplesDoc() {
  const httpCode = [
    'use std::net::http;',
    '',
    'fn main() {',
    '    let server = http::Server::new("127.0.0.1", 8080);',
    '    ',
    '    server.get("/", |req, res| {',
    '        res.status(200).send("Hello from AURA 2.0!");',
    '    });',
    '',
    '    print("Server running on port 8080");',
    '    server.listen();',
    '}'
  ].join('\\n');

  const concurrentCode = [
    'use aura::sync::channel;',
    '',
    'fn main() {',
    '    let (tx, rx) = channel();',
    '',
    '    for i in 1..=5 {',
    '        let tx_clone = tx.clone();',
    '        spawn {',
    '            let result = i * i;',
    '            tx_clone.send(result).unwrap();',
    '        }',
    '    }',
    '',
    '    for _ in 1..=5 {',
    '        let msg = rx.recv().unwrap();',
    '        print("Received: \\${msg}");',
    '    }',
    '}'
  ].join('\\n');

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Examples Gallery</h1>
      <p className="text-lg text-zinc-400 mb-12 leading-relaxed">
        Real-world AURA code snippets to help you understand the language syntax and idioms.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">HTTP Web Server</h3>
          <p className="text-sm text-zinc-400 mb-4">A simple asynchronous web server using the standard library.</p>
          <MonacoPreview language="rust" height="350px" code={httpCode} />
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Concurrent Data Processing</h3>
          <p className="text-sm text-zinc-400 mb-4">Using channels to safely share data between spawned tasks.</p>
          <MonacoPreview language="rust" height="350px" code={concurrentCode} />
        </div>
      </div>
    </div>
  );
}
