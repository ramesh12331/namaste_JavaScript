# let & const in JavaScript | Temporal Dead Zone (TDZ)

## 📌 Hoisting Recap
- `var`, `let`, and `const` are all **hoisted**.
- But their initialization is different:
  - **`var`** → initialized with `undefined` in Global scope.
  - **`let` / `const`** → hoisted into a "script scope" but remain **uninitialized** until execution reaches their line.

---

## 📌 Example: var vs let
```js
console.log(a); // ❌ ReferenceError (TDZ)
console.log(b); // ✅ undefined (var hoisting)

let a = 10;
var b = 15;

console.log(a); // ✅ 10
console.log(b); // ✅ 15

console.log(window.a); // undefined (not attached to global object)
console.log(window.b); // 15 (var attaches to global object)
```

---

## 📌 Temporal Dead Zone (TDZ)
- **TDZ** = the time between hoisting and actual initialization.  
- Accessing a variable in TDZ → **ReferenceError**.

```js
// TDZ starts here
console.log(x); // ❌ ReferenceError
let x = 5;      // TDZ ends here
console.log(x); // ✅ 5
```

---

## 📌 let vs const

### ✅ `let`
```js
let a;
a = 10;   // works
console.log(a); // 10
```

### ❌ `const` must be initialized immediately
```js
const b; // SyntaxError: Missing initializer
```

### ❌ `const` cannot be reassigned
```js
const c = 100;
c = 200; // TypeError: Assignment to constant variable
```

### ✅ But `const` with objects/arrays allows mutation of properties
```js
const obj = { name: "JS" };
obj.name = "JavaScript"; // ✅ allowed (property change)
console.log(obj.name);   // "JavaScript"

const arr = [1, 2, 3];
arr.push(4);   // ✅ allowed
console.log(arr); // [1, 2, 3, 4]
```

---

## 📌 Types of Errors with Examples

### 1. ReferenceError
```js
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;

console.log(z); // ReferenceError: z is not defined (never declared)
```

### 2. SyntaxError
```js
let a = 10;
let a = 20; // SyntaxError: Identifier 'a' has already been declared

const b;    // SyntaxError: Missing initializer in const declaration
```

### 3. TypeError
```js
const c = 30;
c = 40; // TypeError: Assignment to constant variable
```

---

## ✅ Best Practices
- Prefer **`const`** for variables that never change.
- Use **`let`** only when reassignment is required.
- Avoid **`var`** (can cause scope & hoisting issues).
- Always **declare variables at the top** of their scope.

---

## 🎯 Interview Questions & Answers with Examples

### Q1: Are `let` and `const` hoisted?
👉 Yes, but they remain **uninitialized** in TDZ until execution reaches their declaration.

```js
console.log(a); // ReferenceError
let a = 10;
```

---

### Q2: What is Temporal Dead Zone (TDZ)?
👉 The period between hoisting and initialization when a `let` or `const` variable cannot be accessed.

```js
{
  // TDZ starts
  console.log(b); // ReferenceError
  let b = 5;      // TDZ ends
  console.log(b); // 5
}
```

---

### Q3: Difference between `var`, `let`, and `const`?
```js
var x = 1;  // function/global scoped
let y = 2;  // block scoped
const z = 3; // block scoped, cannot be reassigned
```

- `var` → hoisted with `undefined`.
- `let` → block scoped, hoisted but stays in TDZ.
- `const` → block scoped, must be initialized immediately.

---

### Q4: Can you redeclare variables?
```js
var a = 1;
var a = 2; // ✅ allowed (but risky)

let b = 3;
let b = 4; // ❌ SyntaxError

const c = 5;
const c = 6; // ❌ SyntaxError
```

---

### Q5: Why is `window.a` undefined but `window.b` is 15?
👉 Because `var` declarations attach to the **global object**, while `let` and `const` stay in **separate script scope**.

```js
let a = 10;
var b = 15;

console.log(window.a); // undefined
console.log(window.b); // 15
```

---

### Q6: What happens with `typeof` in TDZ?
👉 Unlike undeclared variables, accessing `typeof` on TDZ variables still throws **ReferenceError**.

```js
console.log(typeof undeclaredVar); // "undefined"
console.log(typeof myVar); // ❌ ReferenceError
let myVar = 10;
```
