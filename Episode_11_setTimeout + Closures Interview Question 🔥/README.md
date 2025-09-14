# JavaScript: Closures, setTimeout, and Loop Behavior

This README explains how `setTimeout` works inside loops with `var` and `let`, how closures behave, and some common interview questions.

---

## 🔹 Simple Explanation

- `setTimeout` schedules code to run after a delay.
- `var` is **function-scoped**, so all callbacks in a loop share the same variable.
- `let` is **block-scoped**, so each loop iteration has its own variable.
- Closures allow inner functions to "remember" variables from their parent scope.

---

## 🔹 Detailed Explanation

### Example 1: Using `var`
```js
function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript");
}
x();
```

**Execution Flow:**
1. Loop runs from `i = 1` to `i = 5` very quickly.
2. Each iteration schedules a timer.
3. After loop ends → `i = 6`.
4. All callbacks reference the **same `i`**.
5. Output:
```
Namaste JavaScript
6
6
6
6
6
```

---

### Example 2: Using `let`
```js
function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript");
}
x();
```

**Execution Flow:**
1. Loop runs from `i = 1` to `i = 5`.
2. Each iteration creates a new block-scoped `i`.
3. Timers remember their own `i` values.
4. Output:
```
Namaste JavaScript
1
2
3
4
5
```

---

### Example 3: Fixing `var` using Closure (IIFE)
```js
function x() {
    for (var i = 1; i <= 5; i++) {
        (function (i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        })(i);
    }
    console.log("Namaste JavaScript");
}
x();
```

Here, the **IIFE (Immediately Invoked Function Expression)** creates a copy of `i` for each iteration.  
So the output becomes the same as with `let`.

---

## 🔹 Key Concepts

- **Closure** → Function + its lexical environment.  
- **Event Loop** → Manages async operations like `setTimeout`.  
- **var vs let** →  
  - `var`: function-scoped, one variable shared.  
  - `let`: block-scoped, new variable per iteration.  

---

## 🔹 Common Interview Questions & Answers

### Q1: Why does `var` inside `setTimeout` always print the same number?
**Answer:**  
Because `var` is function-scoped. By the time the callbacks run, the loop is finished and `i` has the final value.

---

### Q2: How can you fix the issue with `var`?
**Answer:**  
1. Use `let` instead of `var`.  
2. Or, use a closure (IIFE) to create a new scope for each iteration.

---

### Q3: What is a closure in JavaScript?
**Answer:**  
A closure is formed when an inner function remembers and can access variables from its outer function, even after the outer function has returned.

---

### Q4: Why does `"Namaste JavaScript"` print before numbers?
**Answer:**  
Because `console.log("Namaste JavaScript")` is synchronous, while `setTimeout` is asynchronous and executed later via the event loop.

---

### Q5: Can `setTimeout` guarantee exact timing?
**Answer:**  
No. `setTimeout` ensures the callback runs **after at least** the given delay, but actual execution depends on the event loop and call stack state.

---

## 🔹 Summary

- Use `let` inside loops with `setTimeout` for correct sequential logging.  
- Understand closures: they are key to mastering async JavaScript.  
- Always explain event loop behavior in interviews — it’s a favorite topic!  

---
