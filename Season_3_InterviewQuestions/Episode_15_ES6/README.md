# ⚡ ES6 (ECMAScript 2015) — Complete Guide

This guide covers the core ES6 features with detailed explanations, short examples, diagrams, and interview Q&A. It's meant as a single-file README you can keep as a reference.

---

## 🧭 Quick Cheat‑Sheet
- `let`, `const` — block scoped variables  
- Arrow functions `=>` — concise functions with lexical `this`  
- Template literals — backticks, interpolation, multi-line  
- Destructuring — arrays & objects extraction  
- Spread `...` & Rest `...` — expand / collect values  
- Default params — function parameter defaults  
- Classes — `class`, `extends`, `super` (syntactic sugar over prototypes)  
- Modules — `export` / `import` (ES6 modules)  
- Promises — `new Promise`, `.then`, `.catch`  
- Generators — `function*` and `yield`  
- Iterables & `for...of` — protocol using `Symbol.iterator`  
- Map / Set / WeakMap / WeakSet — collection types  
- Symbols — unique identifiers  
- Proxy & Reflect — meta-programming helpers  
- New built-ins: `Array.from`, `Array.of`, `Object.assign`, `String.includes`, `Number.isInteger`, etc.

---

## 1) `let`, `const`, `var` — scope, hoisting & TDZ

**Explanation**
- `var` is function-scoped and hoisted (initialized as `undefined` before execution).
- `let` and `const` are block-scoped and also hoisted but not initialized — they live in the *Temporal Dead Zone* (TDZ) until their declaration is evaluated.
- `const` creates a (shallow) constant binding: you can't reassign the binding, but if the value is an object, its properties can change.

**Examples**
```javascript
// var
console.log(x); // undefined (hoisted)
var x = 1;

// let
// console.log(y); // ReferenceError (TDZ)
let y = 2;

// const
const z = { name: 'Ramesh' };
z.name = 'Akash'; // allowed
// z = {}; // TypeError: Assignment to constant variable.
```

**Gotchas**
- Using `let`/`const` inside loops creates fresh bindings for each iteration (useful with closures).

---

## 2) Arrow Functions `=>`

**Explanation**
- Shorter syntax: `(args) => expression` or `(args) => { statements }`.
- Arrow functions **lexically bind `this`** (they inherit `this` from the enclosing scope).
- Arrow functions **cannot** be used as constructors (no `new`).
- No `arguments` object inside arrow functions (use rest `...args` if needed).

**Examples**
```javascript
const add = (a, b) => a + b;
const square = x => x * x;
const logger = (...args) => console.log(...args);

// `this` example:
function Counter() {
  this.count = 0;
  setInterval(() => {
    this.count++; // `this` is Counter instance
    console.log(this.count);
  }, 1000);
}
new Counter();
```

**Interview tip**
- Explain why arrow functions are preferred for callbacks in classes (they keep `this`).

---

## 3) Template Literals

**Explanation**
- Strings with backticks `` `...` ``.
- Support interpolation `${expr}` and multi-line strings.
- Tagged templates allow custom string processing.

**Examples**
```javascript
let name = 'Ramesh';
console.log(`Hello, ${name}!
Today is ${new Date().toDateString()}.`);

// Tagged template (simple example)
function tag(strings, ...values) {
  console.log(strings, values);
  return strings.join('---');
}
tag`a=${1}, b=${2}`;
```

---

## 4) Default Parameters

**Explanation**
- Functions can have default values for parameters.

**Example**
```javascript
function greet(name = 'Guest') {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
greet('Ramesh'); // Hello, Ramesh
```

---

## 5) Rest `...` and Spread `...`

**Explanation**
- Rest in function signatures collects remaining args into an array.
- Spread expands an iterable (array/string) where multiple values are expected.

**Examples**
```javascript
function sum(...nums) {
  return nums.reduce((s, n) => s + n, 0);
}
sum(1,2,3); // 6

const a = [1,2];
const b = [...a, 3, 4]; // [1,2,3,4]
const c = Array.from('abc'); // ['a','b','c']
```

**Use cases**
- Combine arrays, clone arrays, pass arguments to functions easily.

---

## 6) Destructuring (Arrays & Objects)

**Explanation**
- Pull values out of arrays/objects into variables.

**Examples**
```javascript
// Array
const [first, second, ...rest] = [10,20,30,40];
console.log(first, second, rest); // 10 20 [30,40]

// Object
const {name, age = 18, address: {city} = {}} = { name: 'Ramesh', address: { city: 'HYD' } };
console.log(name, age, city);

// Function params destructuring
function fullName({first, last}) {
  return `${first} ${last}`;
}
fullName({first: 'A', last: 'B'});
```

**Gotchas**
- Order matters for arrays, not for objects.
- Use defaults to avoid `undefined` when nested properties are missing.

---

## 7) Object Enhancements (Shorthand, Computed Properties)

**Explanation**
- Property shorthand `{x}` when key name equals variable.
- Method shorthand `obj = { foo() { } }`.
- Computed property names: `{ [expr]: value }`.

**Examples**
```javascript
const x = 10, y = 20;
const obj = { x, y, sum() { return x + y; }, ['key_' + x]: 'value' };
```

**Useful methods**
- `Object.assign(target, ...sources)` — shallow copy / merge.
- `Object.is(a, b)` — strict equality like `===` but treats `NaN` specially and `-0` differently.

---

## 8) Classes (Syntactic Sugar)

**Explanation**
- `class` provides clearer OOP-like syntax but uses prototype under the hood.
- `constructor`, instance methods, `static` methods, `extends`, `super`.

**Examples**
```javascript
class Animal {
  constructor(name) { this.name = name; }
  speak() { return `${this.name} makes a noise.`; }
  static classify() { return 'Animalia'; }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call parent constructor
    this.breed = breed;
  }
  speak() { return `${this.name} barks.`; }
}

const d = new Dog('Rex', 'Labrador');
d.speak(); // "Rex barks."
Dog.classify(); // 'Animalia'
```

**Gotchas**
- Methods defined in `class` are non-enumerable.
- Remember to call `super()` before using `this` in derived constructors.

---

## 9) Modules — `import` / `export`

**Explanation**
- ES6 modules are the standard way to split code.
- Modules are static (imports/exports are resolved at parse time), enabling tools to optimize.

**Examples**
```javascript
// util.js
export function add(a,b){ return a+b; }
export const PI = 3.14;
export default function multiply(a,b){ return a*b; }

// main.js
import multiply, { add, PI } from './util.js';
```

**Notes**
- Browsers require `type="module"` or bundlers (webpack, rollup).
- Named vs default exports; you can rename imports: `import { add as sum } from './util.js'`.

---

## 10) Promises (Async Flow Control)

**Explanation**
- `Promise` represents eventual completion/failure of an async operation.
- Methods: `.then`, `.catch`, `.finally`. Static helpers: `Promise.all`, `Promise.race`.

**Examples**
```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(() => resolve(ms), ms));
}

delay(1000).then(ms => {
  console.log(`Waited ${ms}ms`);
}).catch(console.error);

Promise.all([delay(100), delay(200)]).then(results => console.log(results));
```

**Interview tip**
- Explain microtask queue vs macrotask (promises use microtasks).

---

## 11) Generators (`function*`) & `yield`

**Explanation**
- Generators are iterators you can pause and resume. Use `function*` and `yield`.
- Useful for lazy sequences, coroutines, or controlling async flow (before `async/await`).

**Examples**
```javascript
function* gen() {
  yield 1;
  yield 2;
  return 3;
}
const it = gen();
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: true }
```

---

## 12) Iterables & `for...of`

**Explanation**
- Objects that implement `Symbol.iterator` are iterable.
- `for...of` loops over iterable values (arrays, maps, strings, etc.).

**Examples**
```javascript
for (const ch of 'abc') console.log(ch);
for (const [k, v] of new Map([['a',1],['b',2]])) console.log(k,v);
```

---

## 13) Map, Set, WeakMap, WeakSet

**Explanation**
- `Map` — key-value map, keys can be any value (object references included).
- `Set` — collection of unique values.
- `WeakMap`/`WeakSet` hold weak references — keys (in WeakMap) must be objects and are eligible for GC.

**Examples**
```javascript
const m = new Map();
m.set({}, 'objKey'); // object key
m.set('k', 'v');
for (const [k,v] of m) console.log(k, v);

const s = new Set([1,2,3,1]); // Set {1,2,3}
```

**Use cases**
- Use `WeakMap` for private data associated with objects without preventing GC.

---

## 14) Symbols

**Explanation**
- `Symbol()` creates unique identifiers, often used as object keys to avoid name collisions.
- Built-in well-known symbols like `Symbol.iterator`.

**Example**
```javascript
const id = Symbol('id');
const obj = { [id]: 123, name: 'Ramesh' };
console.log(obj[id]); // 123
```

---

## 15) Array & String Enhancements

**Array**
- `Array.from`, `Array.of`, `Array.prototype.find`, `findIndex`, `includes`, `entries`, `keys`, `values`, `fill`, `copyWithin`.

```javascript
Array.from('abc'); // ['a','b','c']
[1,2,3].find(x => x > 1); // 2
[1,2,3].includes(2); // true
```

**String**
- `includes`, `startsWith`, `endsWith`, template literals for multi-line strings.

```javascript
'hello'.includes('ell'); // true
```

---

## 16) Object static helpers

**Explanation & Examples**
```javascript
Object.assign({}, {a:1}, {b:2}); // {a:1,b:2}
Object.keys({a:1}); // ['a']
Object.values({a:1}); // ['a'] -- introduced in ES2017 but frequently used with ES6 examples
```

---

## 17) Proxy & Reflect (Meta-programming)

**Explanation**
- `Proxy` wraps an object and intercepts operations (`get`, `set`, `has`, `apply`, etc.).
- `Reflect` provides methods corresponding to internal object operations.

**Basic Example**
```javascript
const target = { a:1 };
const proxy = new Proxy(target, {
  get(obj, prop) {
    console.log('get', prop);
    return Reflect.get(obj, prop);
  },
  set(obj, prop, value) {
    console.log('set', prop, value);
    return Reflect.set(obj, prop, value);
  }
});
proxy.a; // logs 'get a'
proxy.b = 2; // logs 'set b 2'
```

**Use cases**
- Validation, reactive frameworks, logging, access control.

---

## 18) Misc: `new` Built-Ins & Small Helpers

- `Number.isInteger`, `Number.isNaN`, `Math.trunc`, `Math.sign` (some added in ES6 or shortly after).
- `String.repeat`, `Array.fill`, `Array.copyWithin`.

---

## 19) Diagrams

**Feature map**
```
ES6
 ├─ Syntax
 │   ├─ let / const
 │   ├─ arrow functions
 │   ├─ template literals
 │   └─ destructuring
 ├─ Data structures
 │   ├─ Map / Set
 │   └─ WeakMap / WeakSet
 ├─ Modules & Classes
 │   ├─ class / extends
 │   └─ import / export
 ├─ Async
 │   ├─ Promises
 │   └─ Generators (yield)
 └─ Meta / Iteration
     ├─ Symbol / Iterators
     ├─ Proxy / Reflect
     └─ for...of
```

---

## 20) Common Interview Questions & Answers

**Q1. Difference between `var`, `let`, and `const`?**  
A: `var` is function-scoped and hoisted (initialized as undefined). `let` and `const` are block-scoped and live in TDZ until declared. `const` creates an immutable binding.

**Q2. How do arrow functions treat `this` differently?**  
A: Arrow functions inherit `this` from the surrounding lexical scope, unlike regular functions which get `this` based on how they are called.

**Q3. What is destructuring and where is it useful?**  
A: Destructuring extracts values from arrays/objects into variables. Useful in function params, swapping, and extracting nested data.

**Q4. How do Promises work and how is error handling done?**  
A: Promises represent eventual outcomes. Chain `.then` for success, `.catch` for errors, and `.finally` for cleanup. Use `Promise.all` to wait for many promises.

**Q5. What are generators and why use them?**  
A: Generators (`function*`) produce iterators that can be paused and resumed with `yield`. Useful for lazy sequences and complex control flows.

**Q6. What's the difference between `for...in` and `for...of`?**  
A: `for...in` iterates enumerable property names (keys) of an object. `for...of` iterates values of an iterable (arrays, maps, strings).

**Q7. How do Modules differ from older module patterns (IIFE, CommonJS)?**  
A: ES6 modules are static, allow tree-shaking, and are part of the language spec. CommonJS (Node `require`) is runtime-based. In browsers use `<script type="module">` or bundlers.

**Q8. When to use Map vs Object?**  
A: Use `Map` when keys are not strings or you need guaranteed insertion order and size. `Object` is fine for plain data with string keys.

**Q9. What is a Symbol and when to use it?**  
A: `Symbol()` creates unique values; use them to define non-colliding property keys, or to implement custom behaviors with well-known symbols like `Symbol.iterator`.

---

## 21) Practical Tips & Best Practices

- Prefer `const` by default, use `let` when you need to reassign, avoid `var`.
- Use arrow functions for short callbacks and to retain `this`.
- Use destructuring in function signatures to make code expressive.
- Use `Map` when object keys are not strings or when you need a reliable `.size`.
- Avoid storing sensitive info in client-side storage; ES6 features don't change security boundaries.
- Use ESLint + Prettier and enable ES6+ rules in your build pipeline.

---

## 22) Appendix — Useful Code Snippets

**Clone array/object**
```javascript
const cloneArr = [...origArr];
const cloneObj = Object.assign({}, origObj);
```

**Partial application (simple)**
```javascript
const add = a => b => a + b;
const add5 = add(5);
add5(3); // 8
```

**Async example using Promise**
```javascript
fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## ✅ Summary

ES6 modernized JavaScript with clearer syntax, better scoping, modules, improved async tools, new data structures, and meta-programming primitives. Mastering ES6 is essential for modern web development and technical interviews.

---

*If you want, I can save this as a `README.md` file and provide a download link.*