import { MonacoPreview } from "@/components/ui/MonacoPreview";

export default function ConcurrencyDoc() {
  const spawnExample = `func fetch_data(url: str) {
    // Simulates async IO work
    print("Fetching: " + url);
}

spawn fetch_data("https://api.example.com/users");
spawn fetch_data("https://api.example.com/posts");

print("Both tasks spawned. Continuing...");`;

  const waitExample = `func compute(n: int) -> int {
    return n * n;
}

let task = spawn compute(42);
let result = wait task;
print(result);   // 1764`;

  const parallelExample = `parallel {
    spawn process_image("photo_a.png");
    spawn process_image("photo_b.png");
    spawn process_image("photo_c.png");
}

print("All images processed.");`;

  const seqExample = `seq {
    spawn validate_user(user_id);
    spawn fetch_profile(user_id);
    spawn render_dashboard(user_id);
}`;

  const pipelineExample = `let result = load_data("input.csv")
    |> clean()
    |> transform()
    |> save("output.csv");`;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Concurrency Runtime</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        AURA 2.0 provides structured concurrency via <code className="text-primary">spawn</code>, <code className="text-primary">wait</code>, <code className="text-primary">parallel</code>, and <code className="text-primary">seq</code> blocks. The runtime is backed by Python&apos;s threading module for the MVP, with an asyncio migration planned.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">spawn — Fire and Forget</h2>
          <p className="text-sm text-zinc-400 mb-4">
            <code className="text-primary">spawn</code> launches a function call on a background thread and immediately returns control to the caller.
          </p>
          <MonacoPreview language="rust" height="180px" code={spawnExample} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">wait — Synchronise on a Result</h2>
          <p className="text-sm text-zinc-400 mb-4">
            <code className="text-primary">wait</code> blocks the current thread until the spawned task completes and returns its value.
          </p>
          <MonacoPreview language="rust" height="150px" code={waitExample} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">parallel — Concurrent Block</h2>
          <p className="text-sm text-zinc-400 mb-4">
            All <code className="text-primary">spawn</code> statements inside a <code className="text-primary">parallel</code> block run concurrently. The block exits only after all spawned tasks complete.
          </p>
          <MonacoPreview language="rust" height="150px" code={parallelExample} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">seq — Sequential Block</h2>
          <p className="text-sm text-zinc-400 mb-4">
            A <code className="text-primary">seq</code> block enforces strict execution order — each statement waits for the previous to complete before starting. Useful when tasks depend on each other.
          </p>
          <MonacoPreview language="rust" height="130px" code={seqExample} />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-white">Pipeline Operator |&gt;</h2>
          <p className="text-sm text-zinc-400 mb-4">
            Chain function calls fluently using <code className="text-primary">|&gt;</code>. The left-hand value is passed as the first argument to the right-hand function.
          </p>
          <MonacoPreview language="rust" height="130px" code={pipelineExample} />
        </section>

        <section className="glass-card p-6 rounded-2xl border border-white/5">
          <h2 className="text-xl font-bold mb-3 text-white">Implementation Notes</h2>
          <ul className="space-y-2 text-zinc-400 text-sm list-disc list-inside">
            <li>The MVP runtime uses Python <code>threading.Thread</code> under the hood.</li>
            <li><code className="text-primary">parallel</code> blocks use <code>thread.join()</code> to synchronise all tasks before continuing.</li>
            <li>Full <code>async/await</code> support is planned for a future compiler phase.</li>
            <li>Shared mutable state between threads is the programmer&apos;s responsibility in MVP.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
