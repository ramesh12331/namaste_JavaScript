# 🔑 Currying in JavaScript

**Currying** is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.  

It allows **reusability** and **function specialization**.

---

## 📌 Syntax

```js
// Normal function
function f(a, b, c) { ... }

// Curried version
function f(a) {
  return function (b) {
    return function (c) {
      // logic using a, b, c
    };
  };
}
```

---

## 🔹 Example 1: Using bind()

```js
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);  
// Output: 6

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);  
// Output: 15
```

👉 Here, `bind` is used to fix one argument (x), creating a specialized function.

---

## 🔹 Example 2: Using Closure

```js
let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo = multiply(2);
multiplyByTwo(3);  
// Output: 6

let multiplyByThree = multiply(3);
multiplyByThree(10);  
// Output: 30
```

👉 Here, the inner function remembers `x` from the outer function using closure.

---

## 📊 Summary Table

| Approach | Description                              | Example                   |
|----------|------------------------------------------|---------------------------|
| bind()   | Creates new function with fixed arguments | `multiply.bind(this, 2)`  |
| Closure  | Returns another function remembering variables | `multiply(2)(3)` |

---

## 🎯 Benefits of Currying

✅ Code Reusability  
✅ Function Specialization  
✅ Cleaner and modular code  
✅ Useful in functional programming  

---

## 🎤 Interview Questions & Answers

**Q1. What is currying in JavaScript?**  
👉 Currying is transforming a function with multiple arguments into nested functions, each taking one argument.

**Q2. Difference between bind() currying and closure currying?**  
👉 `bind()` → Creates a new function by fixing some arguments.  
👉 `Closure` → Returns a function that remembers variables from its outer scope.  

**Q3. Why do we use currying?**  
👉 To make reusable, specialized functions and to improve modularity.  

**Q4. Is currying same as partial application?**  
👉 Not exactly.  
- Currying transforms a function into multiple nested unary functions.  
- Partial Application fixes some arguments of a function but does not require unary functions.  

**Q5. Give a real-life example of currying.**  

```js
function log(type) {
  return function (message) {
    console.log(`[${type}] ${message}`);
  };
}

const errorLog = log("ERROR");
errorLog("Something went wrong");  
// Output: [ERROR] Something went wrong
```

---

## ✅ Conclusion

Currying helps in writing reusable, modular, and cleaner code by fixing arguments and creating specialized functions.
