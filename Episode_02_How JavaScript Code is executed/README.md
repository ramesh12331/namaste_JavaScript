# JavaScript Execution Context & Call Stack

## 📌 What is Execution Context?

* When a JS program runs, a **Global Execution Context (GEC)** is created.
* It has **2 phases**:

  1. **Memory Creation Phase** → JS allocates memory for variables and functions.
  2. **Code Execution Phase** → JS executes code line by line.

---

## 📌 Example Code

```js
var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}

var square2 = square(n);
var square4 = square(4);
```

---

## 📌 Step 1: Memory Creation Phase (GEC)

* `var n` → memory allocated, stores `undefined`.
* `function square` → memory allocated, stores entire function code.
* `var square2` → memory allocated, stores `undefined`.
* `var square4` → memory allocated, stores `undefined`.

✅ At this stage, nothing is executed yet, only memory reserved.

---

## 📌 Step 2: Code Execution Phase (GEC)

* `n = 2` → assigns `2` to `n`.
* `square2 = square(n)` → calls `square(2)` → creates a **new Function Execution Context (FEC)**.

  * Inside FEC:

    * Memory Phase: `num=undefined`, `ans=undefined`.
    * Execution Phase: `num=2`, `ans=4`, `return 4` → sent back.
* `square4 = square(4)` → another FEC created, executes and returns `16`.

---

## 📌 Function Execution Context (FEC)

Every function call creates its own **Execution Context**:

1. **Memory Phase** → allocate variables inside function.
2. **Execution Phase** → run code, return result.
3. When function finishes → FEC is deleted.

---

## 📌 Call Stack

* JS uses **Call Stack** to manage execution contexts.
* Works on **LIFO (Last In, First Out)**.
* Steps:

  * GEC pushed first.
  * When `square()` called → new FEC pushed.
  * After execution → FEC popped (removed).
  * At the end → GEC popped.

✅ Call Stack ensures functions are executed in correct order.

👉 Call Stack is also known as:

* Program Stack
* Control Stack
* Runtime Stack
* Machine Stack
* Execution Context Stack

---

## 📖 Simple Summary

* **Execution Context** = Environment in which JS code runs.
* **Two Phases**:

  * Memory Creation → allocate variables/functions.
  * Code Execution → run code line by line.
* **Function Calls** → create new execution contexts.
* **Call Stack** → manages execution order (push & pop).
* After program ends → GEC removed from call stack.

---

## 🎯 Interview Questions & Answers

**Q1. What is an Execution Context in JavaScript?**
👉 It is the environment in which JavaScript code is executed. It has two phases: memory creation and code execution.

**Q2. What are the types of Execution Context?**
👉 Global Execution Context (default) and Function Execution Context (created when a function is called).

**Q3. What happens in the Memory Creation Phase?**
👉 Variables are initialized with `undefined`, and functions are stored with their definitions.

**Q4. What happens in the Code Execution Phase?**
👉 JS assigns actual values to variables and executes function calls.

**Q5. What is the Call Stack?**
👉 A stack data structure that manages the order of execution contexts using LIFO (Last In, First Out).

**Q6. What happens when a function finishes execution?**
👉 Its execution context is popped from the call stack.

**Q7. Is Call Stack the same as Program Stack?**
👉 Yes, Call Stack is also known as Program Stack, Control Stack, Runtime Stack, Machine Stack, or Execution Context Stack.
