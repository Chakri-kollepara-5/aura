import { CodeBlock } from "@/components/ui/CodeBlock";
import Image from "next/image";

export default function VSCodeExtensionSetup() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <h1 className="text-4xl font-extrabold mb-6">VS Code Extension Setup</h1>
      <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
        Official VS Code language support for AURA 2.0 provides a production-grade development experience, bringing local-only compilation tools directly into your editor.
      </p>

      {/* Feature Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-2">Extension Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass-card p-5 rounded-xl border border-white/5 bg-zinc-900/30">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary font-mono">01.</span> Syntax Highlighting
            </h3>
            <p className="text-sm text-zinc-400">
              Full syntax tokenization for keywords (<code className="text-zinc-300">func</code>, <code className="text-zinc-300">let</code>, <code className="text-zinc-300">mut</code>, <code className="text-zinc-300">spawn</code>), pipelines (<code className="text-zinc-300">|&gt;</code>), operators, and comments.
            </p>
          </div>
          <div className="glass-card p-5 rounded-xl border border-white/5 bg-zinc-900/30">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary font-mono">02.</span> Custom File Icons
            </h3>
            <p className="text-sm text-zinc-400">
              High-visibility custom glowing AURA file icons in your explorer tree, distinguishing your source files easily.
            </p>
          </div>
          <div className="glass-card p-5 rounded-xl border border-white/5 bg-zinc-900/30">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary font-mono">03.</span> Code Snippets & Shortcuts
            </h3>
            <p className="text-sm text-zinc-400">
              Useful boilerplate snippets for structures, functions, and concurrency control. Includes a run shortcut (🚀) in the editor actions.
            </p>
          </div>
          <div className="glass-card p-5 rounded-xl border border-white/5 bg-zinc-900/30">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className="text-primary font-mono">04.</span> Integrated CLI Workflow
            </h3>
            <p className="text-sm text-zinc-400">
              Quick commands mapping to verify, execute, explain, format, and package your code locally.
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Prerequisites</h2>
        <p className="text-zinc-400 mb-4">Before setting up the extension, make sure you have the following installed:</p>
        <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-sm">
          <li><strong>VS Code:</strong> Version 1.74.0 or newer.</li>
          <li><strong>Node.js + npm:</strong> Needed for compilation, setup automation, and package builders.</li>
          <li><strong>AURA Compiler:</strong> Installed locally on your system path so editor commands work correctly.</li>
        </ul>
      </section>

      {/* Installation Options */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-2">Installation</h2>

        <div className="mb-8 p-4 rounded-lg bg-zinc-900/50 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Extension Name</span>
            <span className="text-sm font-semibold text-white">AURA VS Code Extension</span>
          </div>
          <div>
            <span className="text-xs text-zinc-500 uppercase tracking-wider block mb-1">Extension Identifier</span>
            <code className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">aura-lang.aura-vscode</code>
          </div>
        </div>
        
        {/* Option 1 */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-3">Option 1 — Automated Install (Windows PowerShell)</h3>
          <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
            Run the packaged PowerShell automation script inside the repository directory. This script handles file copying, compilation, VSIX packaging, and installation in one step.
          </p>
          <CodeBlock 
            title="powershell" 
            code={`# Navigate to extension folder\ncd "C:\\aura\\vscode-extension"\n\n# Run setup script\n.\\setup_icons_and_rebuild.ps1`}
          />
          <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400/90 rounded-lg p-4 text-xs font-mono mb-4 leading-relaxed">
            <strong className="block text-yellow-400 mb-1">Execution Policy Fallback:</strong>
            If your system blocks scripts, override the restriction for the current user session:
            <pre className="mt-2 text-zinc-300 bg-black/40 p-2 rounded">Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned{"\n"}.\\setup_icons_and_rebuild.ps1</pre>
          </div>
          <p className="text-zinc-400 text-xs mt-2">
            <strong>What this script does:</strong> copies required icons to local assets, rebuilds extension modules, packages the compiler plugins into a <code className="text-zinc-300">.vsix</code> bundle, triggers VS Code CLI installation, and refreshes the setup workspace.
          </p>
        </div>

        {/* Option 2 */}
        <div className="mb-8 mt-10">
          <h3 className="text-xl font-semibold text-white mb-3">Option 2 — Manual Install (All OS / CLI)</h3>
          <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
            For macOS, Linux, or custom environments, follow these manual steps to build and install the VSIX bundle.
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-zinc-200 font-medium text-sm mb-2">Step 1: Setup Icons Folder</h4>
              <p className="text-zinc-400 text-xs mb-3">Ensure the icons are placed under your local directory structure:</p>
              <pre className="bg-black/50 p-3 rounded-lg text-xs font-mono text-zinc-300 border border-white/5">
{`icons/
 ├── aura-dark.png
 └── aura-light.png`}
              </pre>
            </div>

            <div>
              <h4 className="text-zinc-200 font-medium text-sm mb-2">Step 2: Package the Extension</h4>
              <p className="text-zinc-400 text-xs mb-3">Compile the project and bundle it into a package using the VS Code packaging tool:</p>
              <CodeBlock 
                title="terminal"
                code={`cd vscode-extension\nnpm install -g @vscode/vsce\nvsce package --no-yarn`}
              />
              <p className="text-zinc-400 text-xs mt-1">
                <strong>Expected output:</strong> A file named <code className="text-zinc-300">aura-vscode-0.0.1.vsix</code> will be generated in the root directory.
              </p>
            </div>

            <div>
              <h4 className="text-zinc-200 font-medium text-sm mb-2">Step 3: Install the Extension</h4>
              <p className="text-zinc-400 text-xs mb-3">Use the built-in VS Code command-line interface to install the custom bundle:</p>
              <CodeBlock 
                title="terminal"
                code={`code --uninstall-extension aura-lang.aura-vscode\ncode --install-extension ./aura-vscode-0.0.1.vsix`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activating Features */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Activating Features</h2>
        
        <div className="space-y-4">
          <div className="glass-card p-5 rounded-xl border border-white/5">
            <h4 className="text-white font-semibold text-sm mb-2">Step 1: Reload VS Code</h4>
            <p className="text-xs text-zinc-400 mb-3">Force the editor window to reload and discover the newly registered environment:</p>
            <ul className="list-disc pl-5 text-xs text-zinc-400 space-y-1">
              <li>Press <kbd className="bg-zinc-800 text-zinc-300 px-1 py-0.5 rounded text-[10px]">Ctrl + Shift + P</kbd> (or <kbd className="bg-zinc-800 text-zinc-300 px-1 py-0.5 rounded text-[10px]">Cmd + Shift + P</kbd> on macOS) to open the Command Palette.</li>
              <li>Search for: <code className="text-zinc-300">Developer: Reload Window</code> and press Enter.</li>
            </ul>
          </div>

          <div className="glass-card p-5 rounded-xl border border-white/5">
            <h4 className="text-white font-semibold text-sm mb-2">Step 2: Enable AURA File Icons</h4>
            <p className="text-xs text-zinc-400 mb-3">Select the dedicated icon package to visualize file markers:</p>
            <ul className="list-disc pl-5 text-xs text-zinc-400 space-y-1">
              <li>Open the Command Palette (<kbd className="bg-zinc-800 text-zinc-300 px-1 py-0.5 rounded text-[10px]">Ctrl + Shift + P</kbd>).</li>
              <li>Search and select: <code className="text-zinc-300">Preferences: File Icon Theme</code>.</li>
              <li>Select <code className="text-zinc-300">AURA File Icons</code> from the theme list.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Verify Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Verify Installation</h2>
        <p className="text-zinc-400 text-sm mb-4">
          Open or create any source file ending in <code className="text-zinc-300">.aura</code> and verify that:
        </p>
        <ul className="list-none space-y-2 text-sm text-zinc-400">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span> The bottom-right status bar shows <strong>AURA</strong> language mode.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span> Syntax highlighting is active for structure definitions, pipelines (<code className="text-zinc-300">|&gt;</code>), comments, and operators.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span> A custom glowing AURA file icon appears next to the filename in the file tree view.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">✓</span> A run shortcut button (🚀) appears in the upper right workspace action bar.
          </li>
        </ul>
      </section>

      {/* Visual Preview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Extension in Action</h2>
        <p className="text-zinc-400 text-sm mb-6">
          See how the AURA VS Code extension coordinates with the local compiler and semantic analyzer to run projects and flag errors directly in the integrated terminal:
        </p>

        <div className="rounded-xl overflow-hidden border border-white/10 glass-card bg-[#0a0a0a]">
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-black/40">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="text-zinc-500 text-xs font-mono select-none">
              VS Code Editor — AURA Workspace
            </div>
            <div className="w-12" />
          </div>
          <div className="relative w-full aspect-[4/3] bg-zinc-950 flex items-center justify-center">
            <Image 
              src="/images/vscode-preview.png"
              alt="AURA VS Code Extension Preview"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        </div>

        <div className="mt-4 p-4 bg-zinc-900/40 rounded-lg border border-white/5 space-y-2 text-xs text-zinc-400 leading-relaxed">
          <p>
            <strong className="text-zinc-200">Key Features Highlighted in this Preview:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong className="text-zinc-300">AURA Project Workspace:</strong> Explorer structure organizing multiple source files (<code className="text-zinc-300">hello.aura</code>, <code className="text-zinc-300">app.aura</code>, <code className="text-zinc-300">app1.aura</code>) under the <code className="text-zinc-300">AURA-PROJECTS</code> tree.
            </li>
            <li>
              <strong className="text-zinc-300">Action Button (🚀 / AURA: Run Current File):</strong> Dedicated editor action trigger visible in the top-right toolbar for fast compilation.
            </li>
            <li>
              <strong className="text-zinc-300">Integrated CLI Terminal:</strong> Run programs natively from the command line using <code className="text-zinc-300">aura run</code> to output values (e.g., executing the factorial of 5 to return <code className="text-zinc-300">120</code>).
            </li>
            <li>
              <strong className="text-zinc-300">Semantic &amp; Syntax Errors:</strong> The local syntax parser and resolver flags scoping errors directly in the console (e.g., throwing a <code className="text-zinc-300">Semantic Error: Cannot reassign immutable variable 'balance'</code>).
            </li>
          </ul>
        </div>
      </section>

      {/* Extension Commands */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Extension Commands & CLI Reference</h2>
        <p className="text-zinc-400 text-sm mb-6">
          Use the following reference commands to manage the extension installation and compile files:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-zinc-200">
                <th className="py-3 pr-4 font-semibold uppercase tracking-wider">#</th>
                <th className="py-3 px-4 font-semibold uppercase tracking-wider">Action</th>
                <th className="py-3 pl-4 font-semibold uppercase tracking-wider">Command / Sequence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-400 font-mono">
              <tr>
                <td className="py-3 pr-4">1</td>
                <td className="py-3 px-4 text-zinc-200">Install VSIX Bundle</td>
                <td className="py-3 pl-4 text-primary">code --install-extension ./aura-vscode-0.0.1.vsix</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">2</td>
                <td className="py-3 px-4 text-zinc-200">Remove Extension</td>
                <td className="py-3 pl-4 text-primary">code --uninstall-extension aura-lang.aura-vscode</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">3</td>
                <td className="py-3 px-4 text-zinc-200">Check Installed Extensions</td>
                <td className="py-3 pl-4 text-primary">code --list-extensions | Select-String aura</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">4</td>
                <td className="py-3 px-4 text-zinc-200">Open Directory in VS Code</td>
                <td className="py-3 pl-4 text-primary">code .</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">5</td>
                <td className="py-3 px-4 text-zinc-200">Reload VS Code Window</td>
                <td className="py-3 pl-4 text-zinc-300">Ctrl + Shift + P --&gt; Developer: Reload Window</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">6</td>
                <td className="py-3 px-4 text-zinc-200">Manual Language Override</td>
                <td className="py-3 pl-4 text-zinc-300">Ctrl + Shift + P --&gt; Change Language Mode --&gt; AURA</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">7</td>
                <td className="py-3 px-4 text-zinc-200">Verify local compiler</td>
                <td className="py-3 pl-4 text-primary">aura --version</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">8</td>
                <td className="py-3 px-4 text-zinc-200">Execute source file</td>
                <td className="py-3 pl-4 text-primary">aura run hello.aura</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">9</td>
                <td className="py-3 px-4 text-zinc-200">Run in Explain Mode</td>
                <td className="py-3 pl-4 text-primary">aura explain hello.aura</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">10</td>
                <td className="py-3 px-4 text-zinc-200">Format file contents</td>
                <td className="py-3 pl-4 text-primary">aura fmt hello.aura</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b border-white/10 pb-2">Troubleshooting</h2>
        
        <div className="space-y-6">
          <div className="glass-card p-5 rounded-xl border border-white/5 bg-zinc-900/30">
            <h4 className="text-white font-semibold text-sm mb-2">File Opens as Plain Text / AURA Mode Missing</h4>
            <p className="text-xs text-zinc-400 mb-3">
              If VS Code doesn't automatically associate files with the correct extension, verify that your local workspace contribution is correctly configured.
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              If associations are broken, manual registration can be restored. Ensure the <code className="text-zinc-300">package.json</code> file in your local extension contains the correct contribution block shown below.
            </p>
          </div>

          <div className="glass-card p-5 rounded-xl border border-white/5 bg-zinc-900/30">
            <h4 className="text-white font-semibold text-sm mb-2">VSIX Not Found / ENOENT Errors</h4>
            <p className="text-xs text-zinc-400">
              Ensure you have run <code className="text-zinc-300">npm install</code> inside the extension folder before attempting to package it. If the VSIX package output path is missing, verify node paths are set correctly in your system.
            </p>
          </div>

          <div className="glass-card p-5 rounded-xl border border-white/5 bg-zinc-900/30">
            <h4 className="text-white font-semibold text-sm mb-2">No Syntax Highlighting (Grammar Path / Stale Cache)</h4>
            <p className="text-xs text-zinc-400">
              If keywords remain white/uncolored after loading the extension, clear the cache by reloading the window (<code className="text-zinc-300">Developer: Reload Window</code>) or restarting VS Code. Verify that the TextMate grammar mapping under <code className="text-zinc-300">package.json</code> is correctly configured:
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-zinc-200 font-medium text-xs mb-3 uppercase tracking-wider">Required package.json block:</h4>
          <CodeBlock 
            title="package.json"
            code={`"contributes": {
  "languages": [
    {
      "id": "aura",
      "aliases": ["AURA", "aura"],
      "extensions": [".aura"]
    }
  ],
  "grammars": [
    {
      "language": "aura",
      "scopeName": "source.aura",
      "path": "./syntaxes/aura.tmLanguage.json"
    }
  ]
}`}
          />
        </div>
      </section>
    </div>
  );
}
