# Closures in JavaScript

## 📌 What is a Closure?

A **closure** is a function bundled together with its lexical environment (the scope in which it was created).  
This means that a closure gives you access to an outer function’s scope from an inner function.

---

## 📌 How Closures Work?

JavaScript uses **lexical scoping**.  
When a function is created, it remembers the scope (variables and functions) where it was defined, not where it is executed.

If a function needs to access a variable:
1. It first looks in its **local memory**.
2. If not found, it searches in its **lexical parent’s memory**.
3. This continues until the **global scope** is reached.

---

## 📌 Example 1: Simple Closure

```js
function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}

var z = x();
console.log(z);   // Prints the function y code
z();              // Prints 7
```

👉 Here, `y` forms a closure with `x`, so even after `x` has returned, `y` still remembers variable `a`.

---

## 📌 Example 2: Nested Closures

```js
function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();  // 7 900
```

👉 In this example, function `y` can access both `a` (from `x`) and `b` (from `z`) due to closures.

---

## 📌 Simple Definition

A **closure** is:
- A function
- That has access to its outer function scope
- Even after the outer function has returned.

---

## 📌 Advantages of Closures

1. **Data Privacy** – Variables inside closures are not accessible directly from outside.
2. **Stateful Functions** – Closures allow functions to “remember” state between executions.
3. **Callbacks & Async Functions** – Widely used in event listeners, timers, and asynchronous programming.
4. **Function Factories** – Functions that return customized functions.

---

## 📌 Interview Questions & Answers

### ❓ Q1: What is a closure?
**Answer:** A closure is a function that remembers its lexical scope even when executed outside that scope.

---

### ❓ Q2: Why are closures useful?
**Answer:** Closures are useful for data hiding, maintaining state, and implementing callbacks or function factories.

---

### ❓ Q3: Can you give a real-world example of closures?
**Answer:** Yes. Suppose we want a counter function:

```js
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
```

Here, the `count` variable is private and only accessible through the returned closure.

---

### ❓ Q4: Difference between scope and closure?
**Answer:**  
- **Scope**: Defines where variables are accessible.  
- **Closure**: When a function “remembers” its scope even after the outer function has finished executing.

---

### ❓ Q5: Can closures cause memory leaks?
**Answer:** Yes, if not handled properly. Since closures keep references to outer variables, unused closures can prevent garbage collection.

---

## ✅ Summary

- Closures = Function + Lexical Scope  
- They help with data hiding, state management, and async programming  
- Frequently asked in JavaScript interviews  
