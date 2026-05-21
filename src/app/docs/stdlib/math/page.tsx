import { MonacoPreview } from "@/components/ui/MonacoPreview";

export default function MathDoc() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">Math</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        The `std::math` module provides high-performance mathematical functions, leveraging SIMD instructions when available on the host CPU.
      </p>

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Basic Operations</h3>
      <MonacoPreview language="rust" height="250px" code={`use std::math;

let root = math::sqrt(144.0);     // 12.0
let power = math::pow(2.0, 8.0);  // 256.0
let abs_val = math::abs(-50);     // 50

// Trigonometry
let sine = math::sin(math::PI / 2.0); // 1.0`} />

      <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Statistics & Vectors</h3>
      <MonacoPreview language="rust" height="200px" code={`use std::math::vec;

let v1 = vec![1.0, 2.0, 3.0];
let v2 = vec![4.0, 5.0, 6.0];

let dot_product = math::dot(v1, v2);
print(dot_product); // 32.0`} />
    </div>
  );
}
