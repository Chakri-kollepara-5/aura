export default function Page() {
  return (
    <div className="container mx-auto px-4 py-24 flex-1 flex flex-col items-center justify-center text-center">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">Privacy Policy</h1>
        <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
          This page is currently being built. It will feature comprehensive information regarding Privacy Policy.
        </p>
        <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-primary to-accent">
          <div className="px-6 py-2 bg-black rounded-full text-sm font-medium">
            Work in Progress
          </div>
        </div>
      </div>
    </div>
  );
}