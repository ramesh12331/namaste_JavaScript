# 🎬 JavaScript Core & Advanced Concepts – Complete Guide

---

## ✅ Episode\_01: How JavaScript Works

**Definition:**
JavaScript is a **single-threaded, synchronous, interpreted language** executed by a JS engine (like V8).

**Detailed Example:**

```javascript
console.log("Start");
console.log("End");
```

**Explanation:**

* JS executes **line by line**.
* Output: `Start` → `End`.
* Demonstrates synchronous execution.

**Summary:**

* JS executes one task at a time.
* Understanding this helps explain async behavior and the event loop.

---

## ✅ Episode\_02: How JavaScript Code is Executed

**Definition:**
JS uses **Execution Contexts** – Global and Function – to track variables and execution.

**Detailed Example:**

```javascript
let a = 10; // global context
function greet() {
  let b = 20; // function context
  console.log(a + b);
}
greet(); // 30
```

**Explanation:**

* `a` exists in **global context**, `b` in function context.
* Function accesses outer/global variables → **scope chain**.

**Summary:**

* Execution contexts stack during function calls.
* Crucial for understanding hoisting, closures, and variable access.

---

## ✅ Episode\_03: Hoisting

**Definition:**
Variables and functions are **moved to the top of their scope** before execution.

* `var` → undefined
* `let`/`const` → TDZ (Temporal Dead Zone)

**Detailed Example:**

```javascript
console.log(x); // undefined
var x = 5;

console.log(y); // ReferenceError
let y = 10;
```

**Explanation:**

* JS allocates memory for `x` → undefined.
* `y` cannot be accessed before declaration → ReferenceError.

**Summary:**

* Hoisting allows referencing before declaration.
* TDZ prevents accessing `let/const` early.

---

## ✅ Episode\_04: How Functions Work & Variable Environment

**Definition:**
Each function call creates an **Execution Context** that contains:

* Variable Environment: stores variables
* Scope Chain: access outer variables
* this binding: depends on context

**Detailed Example:**

```javascript
function add(a, b) {
  let sum = a + b;
  return sum;
}
console.log(add(2,3)); // 5
```

**Explanation:**

* Each function call has its own context.
* `sum` is local to function.

**Summary:**

* Functions create isolated environments.
* Scope chain allows access to outer variables.

---

## ✅ Episode\_05: window & this

**Definition:**

* `window`: global object in browsers.
* `this`: context-dependent keyword.

**Detailed Example:**

```javascript
console.log(this); // window
const obj = {name: "Ramesh", greet() { console.log(this.name); }};
obj.greet(); // Ramesh
```

**Explanation:**

* Global: `this` = window.
* Object method: `this` points to object itself.

**Summary:**

* `this` depends on where function is called.
* Understanding `this` is key for object-oriented JS.

---

## ✅ Episode\_06: undefined vs not defined

**Definition:**

* `undefined`: variable declared but not initialized.
* `not defined`: variable never declared → ReferenceError.

**Example:**

```javascript
let a;
console.log(a); // undefined
console.log(b); // ReferenceError
```

**Explanation:**

* `a` exists but no value → undefined.
* `b` doesn’t exist → ReferenceError.

**Summary:**

* Helps distinguish memory allocation vs absence of variable.

---

## ✅ Episode\_07: Scope Chain & Lexical Environment

**Definition:**
JS looks for variables in **current scope → outer scope → global scope**.

**Example:**

```javascript
let x = 10;
function outer() {
  let y = 20;
  function inner() {
    console.log(x + y); // 30
  }
  inner();
}
outer();
```

**Explanation:**

* `inner` accesses `y` (outer function) and `x` (global) → scope chain.

**Summary:**

* Lexical scope determines variable accessibility.
* Understanding this is essential for closures.

---

## ✅ Episode\_08: let & const & Temporal Dead Zone

**Definition:**

* `let` & `const` are block-scoped.
* Accessing before declaration → TDZ error.

**Example:**

```javascript
console.log(a); // ReferenceError
let a = 5;
```

**Summary:**

* TDZ prevents accidental access before initialization.
* Helps write safer code.

---

## ✅ Episode\_09: Block Scope & Shadowing

**Definition:**

* Variables inside `{}` accessible only inside block.
* Inner variable can shadow outer variable.

**Example:**

```javascript
let x = 10;
{
  let x = 20;
  console.log(x); // 20
}
console.log(x); // 10
```

**Summary:**

* Prevents variable conflicts.
* Inner variables do not overwrite outer scope.

---

## ✅ Episode\_10: Closures

**Definition:**
Function remembers variables from its **outer scope**, even after outer function finishes.

**Example:**

```javascript
function outer() {
  let count = 0;
  return function() { count++; console.log(count); }
}
const counter = outer();
counter(); // 1
counter(); // 2
```

**Summary:**

* Useful for private data, maintaining state, and async operations.

---

## ✅ Episode\_11: setTimeout + Closures

**Definition:**
Closure captures variables inside async callbacks.

**Example:**

```javascript
for (let i=1; i<=3; i++) {
  setTimeout(() => console.log(i), 1000);
}
```

**Explanation:**

* `let i` is block-scoped → closure captures correct value.
* Output after 1 second: 1, 2, 3.

**Summary:**

* Shows interaction of closures with asynchronous code.
* Important for timers and event handling.

---

## ✅ Episode\_12: Crazy JS Interview – Closures

**Definition:**
Advanced closure patterns for private state and module patterns.

**Example:**

```javascript
function counter() {
  let count = 0;
  return { inc: () => ++count, dec: () => --count };
}
const c = counter();
console.log(c.inc()); // 1
```

**Explanation:**

* `count` is private inside closure.
* Can increment/decrement safely without exposing variable.

**Summary:**

* Useful for encapsulation and data privacy in JS.

---

## ✅ Episode\_13: First Class Functions

**Definition:**
Functions are objects; can be passed as arguments, returned, or stored.

**Example:**

```javascript
function greet(name) { return `Hi ${name}`; }
function welcome(fn) { console.log(fn("Ramesh")); }
welcome(greet); // Hi Ramesh
```

**Summary:**

* Enables functional programming patterns.
* Foundation for callbacks and higher-order functions.

---

## ✅ Episode\_14: Callback Functions & Event Listeners

**Definition:**
Functions passed as arguments to handle asynchronous events.

**Example:**

```javascript
button.addEventListener("click", () => console.log("Clicked!"));
```

**Summary:**

* Enables async behavior without blocking main thread.
* Core concept for DOM events.

---

## ✅ Episode\_15: Asynchronous JavaScript & Event Loop

**Definition:**
Asynchronous JS allows non-blocking code execution using callbacks, promises, or async/await. The **event loop** manages execution of synchronous and asynchronous tasks.

**Detailed Example:**

```javascript
console.log('Start');
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise'));
console.log('End');

// Output: Start, End, Promise, Timeout
```

**Explanation:**

* Synchronous code executes first (`Start`, `End`).
* Microtasks (Promise) run after current stack → `Promise`.
* Macrotasks (setTimeout) run after microtasks → `Timeout`.
* Event loop coordinates this execution order.

**Summary:**

* Event loop allows async behavior in JS.
* Understanding microtasks vs macrotasks is crucial for debugging async code.

---

## ✅ Episode\_16: JS Engine – Google V8

**Definition:**
Engine parses, compiles, and executes JS code efficiently.

**Components:**

* Parser → Ignition → TurboFan → Garbage Collector

**Summary:**

* Understanding engine helps optimize performance.
* Explains why certain JS features behave asynchronously.

---

## ✅ Episode\_17: setTimeout Quirks

**Definition:**
setTimeout schedules code in **task queue**, not immediately.

**Example:**

```javascript
setTimeout(() => console.log("Hi"), 0);
console.log("Bye");
// Output: Bye, Hi
```

**Summary:**

* Demonstrates **event loop** behavior.
* Important for async programming understanding.

---

## ✅ Episode\_18: Higher-Order Functions

**Definition:**
Functions that accept other functions or return them.

**Example:**

```javascript
function greet(fn) { fn(); }
greet(() => console.log("Hello")); // Hello
```

**Summary:**

* Core concept in functional programming.
* Enables callbacks, currying, and function composition.

---

## ✅ Episode\_19: map, filter & reduce

**Definition:**
Functional methods for arrays:

* `map` → transform each element
* `filter` → select elements based on condition
* `reduce` → accumulate values

**Example:**

```javascript
[1,2,3].map(n => n*2); // [2,4,6]
[1,2,3].filter(n => n>1); // [2,3]
[1,2,3].reduce((a,b)=>a+b,0); // 6
```

**Summary:**

* Use for concise and readable array operations.
* Avoids traditional loops, promotes functional style.

---

# 📌 Overall Summary

* **Execution & Scope:** Hoisting, lexical environment, scope chain
* **Closures & First-Class Functions:** Async code, modularity, private variables
* **Event Handling & Async JS:** Callbacks, setTimeout, promises, async/await, event loop behavior
* **Functional Programming:** map, filter, reduce, higher-order functions
* **JS Engine:** Understanding V8 helps optimize, debug, and write efficient code
