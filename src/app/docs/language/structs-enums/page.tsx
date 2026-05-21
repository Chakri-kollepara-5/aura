import { MonacoPreview } from "@/components/ui/MonacoPreview";

export default function StructsEnumsDoc() {
  const implCode = [
    'impl Server {',
    '    fn start(&mut self) {',
    '        self.active = true;',
    '        print("Server started on ${self.port}");',
    '    }',
    '}',
    '',
    'my_server.start();'
  ].join('\\n');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Structs & Enums</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        AURA models data using strictly typed `struct` definitions and powerful algebraic `enum` variants. Object methods can be attached using `impl` blocks.
      </p>
      
      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Defining Structs</h3>
      <MonacoPreview language="rust" height="250px" code={`struct Server {
    host: String,
    port: u16,
    active: bool,
}

let my_server = Server {
    host: "localhost",
    port: 8080,
    active: true,
};`} />

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Implementation Blocks</h3>
      <p className="text-zinc-400 mb-4">You can associate functions with structs to create methods. Use `self` for instance methods.</p>
      <MonacoPreview language="rust" height="200px" code={implCode} />

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Algebraic Enums</h3>
      <MonacoPreview language="rust" height="200px" code={`enum ConnectionState {
    Disconnected,
    Connecting(u8), // Retries
    Connected(String), // Session ID
}

let state = ConnectionState::Connected("session_123xyz");`} />
    </div>
  );
}
