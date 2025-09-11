# Hoisting in JavaScript

## 📌 What is Hoisting?

* **Hoisting** is JavaScript's default behavior of moving **variable and function declarations** to the top of the scope during the memory creation phase.
* In simple words: you can use variables and functions **before declaring them**.

---

## 📌 Example 1: Variable Hoisting

```js
console.log(x); // undefined
var x = 7;
```

👉 In memory creation phase: `x` is initialized as `undefined`. That’s why it does not throw an error but prints `undefined`.

---

## 📌 Example 2: Function Hoisting

```js
getName(); // Namaste JavaScript

function getName() {
  console.log("Namaste JavaScript");
}
```

👉 Entire function `getName` is stored in memory during memory creation phase. That’s why you can call it before its declaration.

---

## 📌 Example 3: Function Expression with `var`

```js
getName(); // ❌ Uncaught TypeError: getName is not a function

var getName = function() {
  console.log("Namaste JavaScript");
};
```

👉 Here, `getName` is treated as a **variable**. In memory phase, it is initialized with `undefined`. So when called before assignment, JS tries to execute `undefined` as a function → gives error.

---

## 📌 Key Points to Remember

1. **Variables (var)** → hoisted but initialized as `undefined`.
2. **Functions (function declaration)** → hoisted with the full function body.
3. **Function Expressions / Arrow Functions** → treated like variables. Hoisted as `undefined`.

---

## 📖 Simple Summary

* Hoisting = JS moves declarations to top during memory phase.
* `var` variables → hoisted as `undefined`.
* Function declarations → hoisted completely (can be called before definition).
* Function expressions → hoisted as `undefined` (cannot be called before definition).

---

## 🎯 Interview Questions & Answers

**Q1. What is hoisting in JavaScript?**
👉 Hoisting is the behavior where variable and function declarations are moved to the top of their scope during the memory creation phase.

**Q2. What is the difference between variable hoisting and function hoisting?**
👉 Variables declared with `var` are hoisted but initialized as `undefined`. Function declarations are hoisted with their full definition.

**Q3. What happens if you access a variable before declaration with `var`?**
👉 It will return `undefined` (not an error).

**Q4. What happens if you access a variable before declaration with `let` or `const`?**
👉 It will throw a **ReferenceError** because they are hoisted but kept in the **Temporal Dead Zone (TDZ)**.

**Q5. Why does calling a function expression before declaration give an error?**
👉 Because it is hoisted like a variable (set to `undefined`) and not with the function body.

**Q6. Is hoisting good or bad?**
👉 Hoisting can sometimes be confusing, so it’s best practice to always declare variables and functions at the top of their scope before using them.
