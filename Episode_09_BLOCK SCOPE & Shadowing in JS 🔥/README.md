# 🟢 Block, Shadowing & Illegal Shadowing in JavaScript

## 📌 What is a Block?
- A **Block** (also called a **compound statement**) is used to group multiple JavaScript statements together using `{ ... }`.
- It creates a **block scope** for variables declared with `let` and `const`.

```js
{
  var a = 10;
  let b = 20;
  const c = 30;
}
```

### Key Points:
- **`var`** → Hoisted to **global scope** (or function scope if inside a function).
- **`let` & `const`** → Hoisted to a **block scope**, but not accessible outside the block.

---

## 📌 Block Scope Example

```js
{
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // ✅ 10
console.log(b); // ❌ ReferenceError
console.log(c); // ❌ ReferenceError
```

👉 Reason:  
- `let` and `const` are stored in a **separate memory space** reserved for the block.  
- `var` is stored in **global scope**, hence accessible outside.

---

## 📌 What is Shadowing?

Shadowing happens when a variable in an **inner scope** has the **same name** as a variable in an **outer scope**.

### Example with `var`:
```js
var a = 100;
{
  var a = 10; // Shadows global "a"
  let b = 20;
  const c = 30;

  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}

console.log(a); // 10 (global "a" replaced)
```
👉 Here, `var a = 10;` **overwrites** the global `a`.

---

### Example with `let` & `const`:
```js
let b = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;

  console.log(b); // 20
}
console.log(b);   // 100
```
👉 Both `b` variables exist in **different scopes** → no overwrite.  
👉 Same applies to `const`.

---

## 📌 Shadowing in Functions

```js
const c = 100;

function x() {
  const c = 10;
  console.log(c); // 10
}

x();
console.log(c); // 100
```

👉 Function creates its own scope. Inner `c` shadows outer `c`, but only inside the function.

---

## 📌 Illegal Shadowing

Illegal Shadowing occurs when you try to shadow a `let` or `const` variable with `var`.

```js
let a = 20;
{
  var a = 30; // ❌ SyntaxError
}
```

✔ Valid cases:
- Shadowing `var` with `let`
- Shadowing `let` with `let`
- Shadowing `const` with `const`

❌ Invalid case:
- Shadowing `let` or `const` with `var`

---

## ✅ Quick Summary

- `var` → Global/Function scope (ignores block scope).  
- `let` & `const` → Block scope.  
- **Shadowing** → Inner variable hides outer variable.  
- **Illegal Shadowing** → `let`/`const` cannot be shadowed with `var`.

---

## 🎯 Interview Questions & Answers

### Q1: What is the difference between `var`, `let`, and `const` in block scope?
**Answer:**
- `var` → Not block scoped, accessible outside.  
- `let` & `const` → Block scoped, accessible only inside `{}`.  

---

### Q2: What is shadowing in JavaScript?
**Answer:**  
When a variable in a local/block scope **overrides** or **hides** a variable with the same name in an outer scope, it’s called **shadowing**.

---

### Q3: Can you shadow a `let` variable with a `var`?
**Answer:**  
No. That leads to **Illegal Shadowing** and throws a `SyntaxError`.

---

### Q4: Is shadowing allowed with `let` and `const`?
**Answer:**  
Yes, `let` and `const` can shadow variables of the same type (`let` with `let`, `const` with `const`) in a new block or function scope.

---

### Q5: Is shadowing the same as variable overriding?
**Answer:**  
Not exactly. Shadowing **hides** the outer variable but does not delete it. Once you exit the inner scope, the outer variable becomes accessible again. Overriding modifies the same variable.

---

### Q6: Does shadowing apply to functions?
**Answer:**  
Yes. A function can declare a variable or parameter with the same name as an outer variable, which shadows it inside the function scope.

---

🚀 With this knowledge, you can easily explain **Block Scope, Shadowing, and Illegal Shadowing** in interviews.
