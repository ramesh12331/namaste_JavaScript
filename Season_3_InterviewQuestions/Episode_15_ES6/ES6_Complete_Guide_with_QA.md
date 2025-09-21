
# ⚡ ES6 Complete Guide – Modern JavaScript

ECMAScript 2015 (ES6) introduced powerful features that made JavaScript more modern, clean, and developer-friendly.

---

## 📌 Core ES6 Concepts

### 1. let & const
* Block-scoped variables
* `let` → reassignable
* `const` → constant, cannot be reassigned

```javascript
let x = 10;
const y = 20;
```

---

### 2. Arrow Functions
Short syntax for functions, no own `this`.

```javascript
const add = (a, b) => a + b;
```

---

### 3. Template Literals
String interpolation with backticks.

```javascript
let name = "Ramesh";
console.log(`Hello, ${name}!`);
```

---

### 4. Default Parameters
Functions with default values.

```javascript
function greet(msg = "Hello") {
  console.log(msg);
}
greet();
```

---

### 5. Destructuring
Extract values from arrays/objects.

```javascript
let [a, b] = [1, 2];
let {name, age} = {name: "Ramesh", age: 25};
```

---

### 6. Spread & Rest Operators
Spread expands, Rest collects.

```javascript
let arr = [1,2,3];
let newArr = [...arr, 4,5]; 

function sum(...nums) {
  return nums.reduce((a,b)=>a+b,0);
}
```

---

### 7. Classes
ES6 OOP syntax.

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}
```

---

### 8. Promises
Better async handling.

```javascript
let promise = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("Done!"),1000);
});
promise.then(console.log);
```

---

### 9. Async/Await
Syntactic sugar for promises.

```javascript
async function fetchData() {
  let data = await fetch("https://api.example.com");
  console.log(data);
}
```

---

### 10. Modules (import/export)
Code reusability with modules.

```javascript
// file.js
export const pi = 3.14;

// app.js
import { pi } from './file.js';
```

---

### 11. Enhanced Object Literals
Shorter syntax for methods & properties.

```javascript
let name = "Ramesh";
let user = {
  name,
  greet() {
    console.log("Hello");
  }
};
```

---

### 12. for...of Loop
Iterating arrays/iterables.

```javascript
for (let num of [1,2,3]) {
  console.log(num);
}
```

---

### 13. Map & Set
New collections.

```javascript
let map = new Map();
map.set("name","Ramesh");

let set = new Set([1,2,2,3]);
```

---

### 14. Symbol
Unique identifiers.

```javascript
let sym = Symbol("id");
```

---

## 📊 Diagram (ES6 Core Features)

```
ES6
 ├── Variables (let, const)
 ├── Functions (arrow, default params)
 ├── Strings (template literals)
 ├── Objects/Arrays (destructuring, spread/rest)
 ├── OOP (classes)
 ├── Async (promises, async/await)
 ├── Modules (import/export)
 ├── Collections (Map, Set)
 └── Symbol
```

---

## 📌 Summary

- **let & const** → Block scoping, immutability
- **Arrow functions** → Concise, lexical `this`
- **Template literals** → Easier string handling
- **Default parameters** → Safe defaults
- **Destructuring** → Cleaner assignments
- **Spread/Rest** → Flexible function & array ops
- **Classes** → OOP in JS
- **Promises & async/await** → Asynchronous programming
- **Modules** → Reusable, maintainable code
- **Map/Set** → Better data structures
- **Symbol** → Unique property keys

---

## 📌 Interview Questions & Answers

**Q1. Difference between var, let, const?**  
👉 `var` is function-scoped, `let` and `const` are block-scoped. `const` cannot be reassigned.

**Q2. Why arrow functions?**  
👉 Short syntax and lexical binding of `this`.

**Q3. What is destructuring and why useful?**  
👉 Extract values easily from objects/arrays, making code cleaner.

**Q4. Difference between spread and rest operators?**  
👉 Spread expands elements, rest collects multiple elements into an array.

**Q5. How do promises improve async code?**  
👉 They avoid callback hell and handle success/failure elegantly.

**Q6. Difference between local and imported modules?**  
👉 Local modules are defined in your code, imported modules are reused from other files/packages.

**Q7. Why ES6 classes over prototypes?**  
👉 Syntactic sugar over prototypes, more readable and OOP friendly.

**Q8. Use case of Map vs Object?**  
👉 Map allows keys of any type and maintains insertion order, unlike Objects.

**Q9. What is a Symbol and where to use it?**  
👉 Unique identifiers for object properties, used to avoid name clashes.

---

✅ **In short:** ES6 brings modern features that make JavaScript code cleaner, faster, and more interview-ready.
