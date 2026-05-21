<div align="center">

# ⚡ AURA 2.0
### The Explainable Offline Programming Language

<p>
  <strong>Offline-first • Explainable • Compiler-focused • Educational • Tooling-rich</strong>
</p>

![Python](https://img.shields.io/badge/Built%20With-Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![CLI](https://img.shields.io/badge/CLI-Toolchain-success?style=for-the-badge)
![Docs](https://img.shields.io/badge/Docs-Developer%20Platform-orange?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-MVP-green?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-Offline%20First-blueviolet?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge)

</div>

---

# 🚀 Introduction

**AURA 2.0** is an **explainable, offline-first programming language** built as a **compiler + runtime + tooling ecosystem** to make code execution transparent, educational, and developer-friendly.

Unlike traditional scripting languages that often hide internal execution, AURA was designed to expose the full lifecycle of code execution — from **tokenization to runtime output**.

It combines:

- Compiler Engineering  
- Runtime Design  
- Tooling Ecosystem  
- Educational Transparency  
- Offline Local Execution  
- Developer Experience

---

# 🎯 Why AURA?

Modern languages often feel like **black boxes**.

AURA was created to solve:

- Hidden compiler internals
- Difficult debugging flow
- Lack of educational transparency
- Hard-to-understand parsing/runtime behavior
- Weak beginner visibility into AST + semantics

### AURA makes execution visible.

---

# ✨ Key Features

## 🔹 Explainable Compiler Flow
Visualize the entire execution pipeline:

```text
Source Code
   ↓
Lexer
   ↓
Token Stream
   ↓
Parser
   ↓
AST
   ↓
Semantic Analysis
   ↓
Interpreter
   ↓
Runtime
   ↓
Output
```

---

## 🔹 Offline-first Execution
- Local-only runtime
- No cloud dependency
- Deterministic behavior
- Safe execution

---

## 🔹 Hybrid Parsing Architecture
AURA combines:

### Recursive Descent Parser
Used for:
- functions
- loops
- blocks
- structs
- statements

### Pratt Parser
Used for:
- operator precedence
- nested expressions
- complex evaluation

---

## 🔹 Immutable AST Design
AST nodes preserve structural integrity.

Benefits:
- predictable compiler passes
- safe semantic analysis
- cleaner architecture

---

## 🔹 Semantic Analysis
Supports:
- symbol tables
- scoping
- mutability validation
- duplicate detection
- undefined variable checks
- return validation

---

## 🔹 Interpreter Runtime
Executes:
- expressions
- conditions
- loops
- arrays
- functions
- structs
- runtime values

---

## 🔹 Concurrency Runtime
Supports:
- `spawn`
- `parallel`
- `wait`
- `seq`

Built using:
- `ThreadPoolExecutor`
- isolated execution contexts

---

## 🔹 REPL
Interactive shell:

```bash
aura repl
```

Supports:
- multiline execution
- variable persistence
- function reuse
- error recovery

---

## 🔹 Formatter
AST-safe formatting:

```bash
aura fmt file.aura
```

Handles:
- indentation
- spacing
- braces
- normalization

---

## 🔹 File I/O
Built-in:
- read()
- write()
- append()
- delete()
- exists()

---

## 🔹 Object Methods
Examples:

```aura
arr.push(10)
"hello".upper()
```

---

## 🔹 Explain Mode
One of AURA’s strongest features:

```bash
aura explain hello.aura
```

Shows:
- token stream
- parsing
- AST
- semantic flow
- runtime trace

---

## 🔹 VS Code Extension
Includes:
- syntax highlighting
- snippets
- language support

---

# 🏗️ Architecture

```text
AURA/
├── lexer/
├── parser/
├── ast/
├── semantic/
├── interpreter/
├── runtime/
├── diagnostics/
├── repl/
├── tests/
├── aura.py
├── build.py
└── package.py
```

---

# ⚙️ Installation

## Clone Repo

```bash
git clone https://github.com/Chakri-kollepara-5/aura.git
cd aura
```

## Install locally

```bash
pip install -e .
```

---

# 🔍 Verify Installation

```bash
aura --help
aura --version
```

---

# 🚀 Quick Start

## Hello World

Create:

```bash
hello.aura
```

```aura
print("Hello AURA")
```

Run:

```bash
aura run hello.aura
```

---

# 🛠 CLI Commands

| Command | Description |
|---------|-------------|
| `aura run file.aura` | Run source file |
| `aura repl` | Interactive shell |
| `aura check file.aura` | Syntax + semantic checks |
| `aura tokens file.aura` | Token stream |
| `aura ast file.aura` | View AST |
| `aura semantic file.aura` | Semantic pass |
| `aura explain file.aura` | Full execution trace |
| `aura fmt file.aura` | Format source |
| `aura build` | Build executable |
| `aura pkg` | Package handling |
| `aura version` | Version info |

---

# 📚 Sample AURA Code

## Variables

```aura
let x = 10;
mut y = 20;
```

---

## Functions

```aura
func add(a, b) {
   return a + b;
}
```

---

## Arrays

```aura
let arr = [1,2,3];
arr.push(4);
```

---

## Structs

```aura
struct User {
   name,
   age
}
```

---

## File I/O

```aura
write("demo.txt", "Hello");
print(read("demo.txt"));
```

---

## Concurrency

```aura
let task = spawn work();
wait(task);
```

---

# 🧠 Why AURA is Unique

Compared to traditional student compiler projects:

✅ Explain Mode  
✅ Full CLI Toolchain  
✅ REPL  
✅ Formatter  
✅ Concurrency Runtime  
✅ File I/O  
✅ VS Code Extension  
✅ Offline-first Ecosystem  
✅ Educational Transparency  
✅ Compiler-focused Architecture

---

# 🧪 Testing

Run tests:

```bash
python -m unittest discover AURA.tests
```

---

# 🛣 Roadmap

Planned:
- Linter
- LSP Server
- Package Registry
- Bytecode Backend
- JIT Exploration
- Cross-platform Packaging

---

# 🤖 AI-Assisted Engineering Transparency

AURA was built with **AI-assisted acceleration**, but engineering ownership remained guided by the project author.

AI helped with:
- brainstorming
- documentation refinement
- edge-case exploration
- testing ideas
- iteration speed

Human-led work included:
- architecture direction
- design tradeoffs
- system planning
- debugging
- integration
- validation
- product vision

---

# 👨‍💻 Author

**Kollepara Venkata Sri Chakravarthi (Chakri)**  
Full Stack Developer • Compiler Enthusiast • Tooling Builder

GitHub: https://github.com/Chakri-kollepara-5

---

# ⭐ Final Note

AURA is a **language-engineering + tooling-focused MVP**, built to explore and expose the full lifecycle of code execution.

It is not intended to replace mainstream languages — it is designed to make **compiler learning, runtime transparency, and developer tooling experimentation easier and clearer.**

---

<div align="center">

### ⚡ Build. Explain. Execute. Learn.  
## Welcome to AURA.

</div>
