import { MonacoPreview } from "@/components/ui/MonacoPreview";

export default function IODoc() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">File I/O</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        AURA provides asynchronous, safe, and heavily optimized file system access via `std::io`. 
      </p>

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Reading Files</h3>
      <MonacoPreview language="rust" height="200px" code={`use std::io::fs;

// Synchronous read (blocks thread)
let content = fs::read_to_string("config.toml").unwrap();

// Asynchronous read (yields to scheduler)
let async_content = await fs::read_async("data.json");`} />

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Writing Files</h3>
      <MonacoPreview language="rust" height="200px" code={`use std::io::fs;

let data = "AURA is blazingly fast!";
fs::write("output.txt", data).expect("Failed to write to file");

// Appending
fs::append("log.txt", "[INFO] Application started\n").unwrap();`} />
    </div>
  );
}
