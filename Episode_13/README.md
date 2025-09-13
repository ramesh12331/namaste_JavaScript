# JavaScript Function Concepts

## 📌 1. Function Statement (a.k.a Function Declaration)
A function defined with the `function` keyword at the top level.

```js
function greet() {
  console.log("Hello!");
}
greet(); // Hello!
```
✅ Hoisted (can be called before definition).

---

## 📌 2. Function Expression
A function assigned to a variable.

```js
const greet = function() {
  console.log("Hello!");
};
greet(); // Hello!
```
❌ Not hoisted (must be defined before calling).

---

## 📌 3. Anonymous Function
A function **without a name**, often used as a value.

```js
setTimeout(function() {
  console.log("I am anonymous!");
}, 1000);
```

---

## 📌 4. Named Function Expression
A function expression with a **name** (useful for recursion or debugging).

```js
const greet = function hello() {
  console.log("Hello with name!");
};
greet(); // Hello with name
// hello(); ❌ ReferenceError (only available inside function)
```

---

## 📌 5. First-Class Functions
Functions are treated like **values** in JavaScript:
- Can be stored in variables  
- Passed as arguments  
- Returned from functions  

```js
function sayHello() {
  return "Hello";
}

function greet(fn) {
  console.log(fn());
}

greet(sayHello); // Hello
```

---

## 📌 6. Parameters vs Arguments

- **Parameters:** Variables defined in the function definition (placeholders).  
- **Arguments:** Actual values passed when the function is called.  

```js
function add(x, y) {   // x, y → parameters
  return x + y;
}
console.log(add(5, 3)); // 5, 3 → arguments
```

---

## 📌 Summary Table

| Concept                   | Example Code Snippet | Hoisting |
|----------------------------|----------------------|----------|
| Function Statement         | `function f() {}`    | ✅ Yes   |
| Function Expression        | `const f = function(){}` | ❌ No |
| Anonymous Function         | `setTimeout(function(){}, 1000)` | ❌ No |
| Named Function Expression  | `const f = function hello(){}` | ❌ No |
| First-Class Function       | Pass/return/store functions | ✅ Supported |
| Parameters vs Arguments    | `function add(x,y){}` vs `add(5,3)` | N/A |

---

## 🎯 Interview Q&A

### Q1: What is the difference between Function Declaration and Function Expression?
**A:**  
- **Declaration (Statement):** Hoisted, can be called before definition.  
- **Expression:** Not hoisted, must be defined before use.

---

### Q2: What is an Anonymous Function? Where is it used?
**A:** A function without a name. Commonly used in callbacks (`setTimeout`, event handlers, array methods like `map`, `filter`).

---

### Q3: What is a Named Function Expression? Why use it?
**A:** A function expression with a name. Useful for recursion and debugging stack traces.

---

### Q4: What are First-Class Functions?
**A:** Functions that can be treated like values: stored in variables, passed as arguments, or returned from other functions.

---

### Q5: Difference between Parameters and Arguments?
**A:**  
- **Parameters:** Local variables in the function definition.  
- **Arguments:** Real values supplied when calling the function.

---

### Q6: Example of First-Class Function in real life?
**A:**  
- Event handling (`btn.addEventListener('click', handler)`)  
- Array methods (`map`, `filter`, `reduce`)  
- Middleware in Express.js  

---

✅ This README provides **short + detailed explanation, summary, and interview prep** for all important function concepts.
