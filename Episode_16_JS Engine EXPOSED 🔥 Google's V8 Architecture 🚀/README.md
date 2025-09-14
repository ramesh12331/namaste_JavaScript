# ⚡ JS Engine Exposed -- Google's V8 Architecture

## 📌 Introduction

JavaScript can run everywhere (browsers, servers, IoT, robots) because
of the **JavaScript Runtime Environment (JRE)**.\
The **JRE** is like a container that includes: - JavaScript Engine (❤️
of JRE) - Web APIs - Event Loop - Callback Queue - Microtask Queue, etc.

👉 Browsers can run JavaScript because they come with their own JRE.

------------------------------------------------------------------------

## 🏗️ JavaScript Engines

Different browsers have different engines: - **V8** → Chrome, Node.js -
**Chakra** → Microsoft Edge (Legacy) - **SpiderMonkey** → Firefox (first
ever engine) - **JavaScriptCore** → Safari

> JavaScript Engines are not machines. They're software written in
> **C++** or other low-level languages.\
> They take **high-level JavaScript code** and convert it into **machine
> code**.

------------------------------------------------------------------------

## 🔑 Steps of Code Execution

### 1. Parsing

-   Source code is **broken into tokens**.\
    Example:

    ``` js
    let a = 7;
    ```

    Tokens: let, a, =, 7

-   Syntax Parser → converts tokens into AST (Abstract Syntax Tree).\
    (You can explore this at [astexplorer.net](https://astexplorer.net))

------------------------------------------------------------------------

### 2. Compilation & Interpreter (JIT -- Just In Time)

**Interpreter:** - Converts AST → bytecode.\
- Runs the code immediately (**fast startup**).

**Compiler:** - Optimizes the bytecode into machine code (for **fast
repeated execution**).\
- Works alongside the interpreter.

✅ Modern JS engines like **V8** use **JIT Compilation** → combines
Interpreter + Compiler.

------------------------------------------------------------------------

### 3. Execution

Needs two main components: - **Memory Heap** → stores variables,
objects, functions\
- **Call Stack** → executes code step by step

Also includes: - **Garbage Collector** → removes unused memory (Mark &
Sweep algorithm).

------------------------------------------------------------------------

## ⚙️ Google V8 Engine Components

V8 has: - **Ignition** → Interpreter (JS → bytecode)\
- **TurboFan** → Compiler (bytecode → optimized machine code)\
- **Orinoco** → Garbage Collector

------------------------------------------------------------------------

## 📊 JRE Flow (Flowchart)

           ┌───────────────┐
           │ JavaScript    │
           │ Source Code   │
           └───────┬───────┘
                   │
              Parsing → Tokens → AST
                   │
                   ▼
         ┌─────────────────────┐
         │ JS Engine (V8)      │
         │ ┌───────────────┐   │
         │ │ Interpreter   │   │
         │ │ (Ignition)    │   │
         │ └───────────────┘   │
         │ ┌───────────────┐   │
         │ │ Compiler      │   │
         │ │ (TurboFan)    │   │
         │ └───────────────┘   │
         └───────┬─────────────┘
                 ▼
           Execution → Call Stack & Memory Heap
                 │
                 ▼
           Garbage Collector (Orinoco)

------------------------------------------------------------------------

## ✅ Example: Execution Flow

``` js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
```

**Behind the scenes:** 1. Parsing → tokens → AST\
2. Compilation → AST → bytecode → machine code\
3. Execution → Call Stack runs `add(2, 3)` → outputs `5`\
4. Garbage Collector → clears unused memory

------------------------------------------------------------------------

## 📌 Summary

-   JRE lets JavaScript run everywhere.\
-   **Parsing → Compilation → Execution** are main steps.\
-   Interpreter & Compiler (**JIT**) make JS fast.\
-   Memory Heap & Call Stack handle execution.\
-   Garbage Collector (**Mark & Sweep**) cleans memory.

**V8 Engine has:** - Ignition (Interpreter)\
- TurboFan (Compiler)\
- Orinoco (Garbage Collector)

------------------------------------------------------------------------

## 🎯 Interview Questions & Answers

**Q1. What is the JavaScript Runtime Environment (JRE)?**\
👉 A container that provides everything needed to run JS (Engine, APIs,
Event Loop, Queues).

**Q2. What are the three steps of JS code execution?**\
👉 Parsing → Compilation (JIT) → Execution.

**Q3. Does JavaScript compile?**\
👉 Yes! Modern JS uses JIT compilation (Interpreter + Compiler).

**Q4. What is the role of Garbage Collector?**\
👉 Removes unused objects from memory using the Mark & Sweep algorithm.

**Q5. What makes V8 Engine special?**\
👉 It uses Ignition (Interpreter) + TurboFan (Compiler) + Orinoco
(Garbage Collector) for very fast execution.

**Q6. What is the difference between Interpreter and Compiler in JS?**\
👉 Interpreter → converts JS to bytecode (fast startup).\
👉 Compiler → optimizes bytecode into machine code (fast execution).

**Q7. How does JIT improve performance?**\
👉 Code is interpreted first for immediate execution, then compiled for
optimization → best of both worlds.
