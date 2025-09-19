# 🔑 Polyfill for `bind()` in JavaScript

In JavaScript, the `bind()` method creates a new function that, when called, has its `this` value set to a provided object, with optional arguments pre-filled.  

Sometimes, we may need to create our own implementation → that’s called a **Polyfill**.  

---

## 📌 Syntax of `bind()`

```js
function.bind(thisArg, arg1, arg2, ...);
```

- **thisArg** → The object to use as `this`.
- **arg1, arg2, ...** → Optional arguments to pre-fill.

---

## 📌 Example: Normal `bind()`

```js
let obj = {
  firstName: "Akshay",
  lastName: "Saini"
};

let printName = function () {
  console.log(this.firstName + " " + this.lastName);
};

let printMyName = printName.bind(obj);
printMyName();  
// Output: Akshay Saini
```

---

## 📌 Example: `bind()` with arguments

```js
let obj = {
  firstName: "Akshay",
  lastName: "Saini"
};

let printName = function (hometown, state, country) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state + ", " + country);
};

let printMyName = printName.bind(obj, "Dehradun", "Uttarakhand");
printMyName("India");  
// Output: Akshay Saini from Dehradun, Uttarakhand, India
```

---

## 📌 Polyfill for `bind()`

We can write our own version of `bind()` like this:

```js
Function.prototype.mybind = function (...args) {
  let originalFn = this;          // Reference to the original function
  let context = args[0];          // The object to bind
  let params = args.slice(1);     // Pre-set arguments

  return function (...args2) {
    // Combine pre-set arguments with later arguments
    originalFn.apply(context, [...params, ...args2]);
  };
};
```

---

## 📌 Example: Using Polyfill

```js
let obj = {
  firstName: "Akshay",
  lastName: "Saini"
};

let printName = function (hometown, state, country) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state + ", " + country);
};

let printMyName2 = printName.mybind(obj, "Dehradun", "Uttarakhand");
printMyName2("India");  
// Output: Akshay Saini from Dehradun, Uttarakhand, India
```

---

## 📊 Summary Table

| Method  | Calls Immediately? | Arguments Passing | Returns        |
|---------|--------------------|-------------------|----------------|
| `call`  | ✅ Yes             | One by one        | Function result|
| `apply` | ✅ Yes             | As an array       | Function result|
| `bind`  | ❌ No              | Pre-set + later   | New function   |

---

## 🎯 Interview Questions & Answers

### Q1. What does `bind()` do in JavaScript?
👉 It creates a new function with `this` set to the provided object and allows pre-setting arguments.

---

### Q2. What is a Polyfill?
👉 A **Polyfill** is a custom implementation of a built-in function to mimic its behavior (for older browsers or learning purposes).

---

### Q3. Difference between `call`, `apply`, and `bind`?
- **call** → Calls immediately, arguments one by one.  
- **apply** → Calls immediately, arguments in array.  
- **bind** → Returns a new function, can be called later.  

---

### Q4. How does your Polyfill for `bind` work?
👉 It:  
1. Stores the original function (`this`).  
2. Takes the object to bind and pre-set arguments.  
3. Returns a new function that, when executed, uses `apply()` to pass context and all arguments.  

---

### Q5. Can arrow functions be used with `bind()`?
👉 No. Arrow functions don’t have their own `this`; they inherit it from the enclosing lexical scope. So `bind()` has no effect.

---

✅ With this, you now know how the real `bind()` works and how to build your own **Polyfill for bind** in JavaScript. 🚀
