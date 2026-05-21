import { DocsSidebar } from "@/components/layout/DocsSidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Sticky Sidebar */}
      <aside className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-24">
          <DocsSidebar />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 pb-20">
        <div className="prose prose-invert prose-pre:bg-[#0c0c0c] prose-pre:border prose-pre:border-white/10 max-w-4xl">
          {children}
        </div>
      </main>
    </div>
  );
}
