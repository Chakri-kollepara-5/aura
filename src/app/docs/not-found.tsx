import Link from "next/link";

export default function NotFound() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-extrabold text-white mb-4">404</h1>
      <h2 className="text-2xl font-bold text-zinc-300 mb-4">Page Not Found</h2>
      <p className="text-zinc-400 mb-8 max-w-md">
        This documentation page doesn&apos;t exist yet. Use the sidebar to navigate to an available section.
      </p>
      <Link
        href="/docs"
        className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
      >
        Back to Docs
      </Link>
    </div>
  );
}
