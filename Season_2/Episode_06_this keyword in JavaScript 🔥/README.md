# 🔑 this Keyword in JavaScript

In JavaScript, the `this` keyword refers to an **object**, but which object it refers to depends on how a function is called.

---

## 📌 1. this in Global Space
```js
console.log(this);
```
- In **browser** → refers to the `window` object.  
- In **Node.js** → refers to `{}` or the global object.

---

## 📌 2. this inside a Function
```js
function x() {
  console.log(this);
}
x();
```
- **Non-strict mode** → `this` refers to global object (`window`).  
- **Strict mode** → `this` is `undefined`.

Example:
```js
"use strict";

function x() {
  console.log(this); // undefined
}

x();
window.x(); // window object
```

---

## 📌 3. this inside an Object’s Method
```js
const obj = {
  a: 10,
  x: function () {
    console.log(this);   // obj
    console.log(this.a); // 10
  }
};
obj.x();
```
👉 Here, `this` refers to the current object (`obj`).

---

## 📌 4. this with call, apply, and bind
```js
const student = {
    name: "Akshay",
    printName: function (city, country) {
        console.log(this.name + " from " + city + ", " + country);
    }
};

const student2 = { name: "Saini" };

// CALL → invokes immediately, arguments one by one
student.printName.call(student2, "Delhi", "India");  
// Output: "Saini from Delhi, India"

// APPLY → invokes immediately, arguments as array
student.printName.apply(student2, ["New York", "USA"]);  
// Output: "Saini from New York, USA"

// BIND → returns a new function, can be called later
const boundFunc = student.printName.bind(student2, "London", "UK");
boundFunc();  
// Output: "Saini from London, UK"
```

✅ **Summary**:  
- **call** → Calls immediately, args individually.  
- **apply** → Calls immediately, args as array.  
- **bind** → Returns new function with bound `this`.

---

## 📌 5. this in Arrow Functions
Arrow functions **do not have their own `this`**.  
They inherit `this` from the **lexical scope** (enclosing function/context).

```js
const obj = {
  a: 10,
  x: () => {
    console.log(this); // window (not obj)
  }
};
obj.x();

const obj2 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this); // obj2
    };
    y();
  }
};
obj2.x();
```

---

## 📌 6. this inside DOM Elements
In the DOM, `this` refers to the **HTML element** that received the event.

```html
<button onclick="alert(this)">Click Me</button>
```
👉 Output → `[object HTMLButtonElement]`.

---

## 📊 Summary Table

| Context                | Value of `this` |
|-------------------------|------------------|
| Global space (browser) | `window` object |
| Function (non-strict)  | `window` object |
| Function (strict)      | `undefined` |
| Object method          | The object itself |
| Arrow function         | From enclosing lexical context |
| call/apply/bind        | Explicitly set by programmer |
| DOM element            | The HTML element that triggered the event |

---

## 🎯 Interview Questions & Answers

**Q1. What is `this` in JavaScript?**  
👉 `this` is a keyword that refers to an object depending on how a function is called.

**Q2. Difference between `this` in arrow function vs normal function?**  
👉 Normal function: `this` depends on how it’s called.  
👉 Arrow function: `this` is inherited from enclosing lexical scope.

**Q3. What is `this` in global scope?**  
👉 In **browser** → `window`, in **Node.js** → global object.

**Q4. What happens to `this` in strict mode inside a function?**  
👉 It becomes `undefined`.

**Q5. How do `call`, `apply`, and `bind` work with `this`?**  
👉 They allow explicit control over `this`.  
- `call(obj, arg1, arg2, ...)` → invokes immediately with arguments separately.  
- `apply(obj, [args])` → invokes immediately with arguments as array.  
- `bind(obj, arg1, arg2, ...)` → returns new function with bound `this`.

**Q6. What is `this` inside DOM event handler?**  
👉 Refers to the **HTML element** that triggered the event.

---

✅ With this guide, you now have a complete understanding of the `this` keyword in JavaScript, how it behaves in different contexts, and how to control it using **call, apply, and bind**.
