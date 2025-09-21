# ⚡ ES6 (ECMAScript 2015) — Detailed Explanation

This guide explains core ES6 features with definitions, examples, and practical usage.

---

## 1) let, const, var

**Definition:**

* var → Function scoped, hoisted (initialized as undefined).
* let → Block scoped, hoisted but in Temporal Dead Zone (TDZ) until declaration.
* const → Block scoped, immutable binding (cannot reassign, but object properties can change).

**Example:**

```javascript
var x = 1;  // function scoped
let y = 2;  // block scoped
const z = {name: 'Ramesh'}; // const binding
z.name = 'Akash'; // allowed (object property)
```

**Explanation:**

* var is prone to bugs due to hoisting.
* let and const are safer; const should be default unless reassignment is needed.

**Summary:** Prefer const, use let for mutable variables, avoid var.

---

## 2) Arrow Functions =>

**Definition:** Concise function syntax. Lexically binds `this`.

**Example:**

```javascript
const add = (a, b) => a + b;
```

**Summary:** Shorter, readable, ideal for callbacks and methods where this should remain lexical.

---

## 3) Template Literals

**Definition:** Strings with backticks `supporting interpolation`\${expression}\` and multi-line strings.

**Example:**

```javascript
let name = 'Ramesh';
console.log(`Hello, ${name}!`);
```

**Summary:** Dynamic, multi-line, readable strings.

---

## 4) Default Parameters

**Definition:** Assign default values to function parameters.

**Example:**

```javascript
function greet(name='Guest') {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
```

**Summary:** Avoids undefined arguments and simplifies code.

---

## 5) Rest & Spread Operators ...

**Definition:** Rest collects remaining args into array; Spread expands arrays.

**Example:**

```javascript
function sum(...nums) {
  return nums.reduce((a,b)=>a+b, 0);
}
const arr2 = [...[1,2], 3, 4]; // [1,2,3,4]
```

**Summary:** Collect or expand values easily.

---

## 6) Destructuring

**Definition:** Extract values from arrays/objects into variables.

**Example:**

```javascript
const [a,b] = [1,2];
const {name, age} = {name:'Ramesh', age:25};
```

**Summary:** Cleaner syntax for extracting values.

---

## 7) Object Enhancements

**Definition:** Shorthand property names, computed properties, concise methods.

**Example:**

```javascript
const x=1, y=2;
const obj = {x, y, sum(){ return x + y; }, ['key_'+x]: 'val'};
```

**Summary:** More readable and compact object syntax.

---

## 8) Classes

**Definition:** Syntactic sugar for prototype-based OOP. Supports constructor, methods, inheritance.

**Example:**

```javascript
class Animal {
  constructor(name){ this.name=name; }
  speak(){ return `${this.name} makes noise`; }
}
class Dog extends Animal {
  speak(){ return `${this.name} barks`; }
}
```

**Summary:** Clear OOP-like syntax over prototypes.

---

## 9) Modules

**Definition:** Split code using export/import.

**Example:**

```javascript
// util.js
export function add(a,b){ return a+b; }
// main.js
import {add} from './util.js';
```

**Summary:** Modular, maintainable, reusable code.

---

## 10) Promises

**Definition:** Future value of async operations. States: Pending → Fulfilled → Rejected.

**Example:**

```javascript
new Promise(res => setTimeout(()=>res('Done'), 1000))
  .then(console.log);
```

**Summary:** Handles async tasks cleanly, avoids callback hell.

---

## 11) Generators

**Definition:** Functions that can pause/resume execution using yield. Useful for lazy evaluation.

**Example:**

```javascript
function* gen() { yield 1; yield 2; }
const it = gen();
it.next(); // { value: 1, done: false }
```

**Summary:** Control execution flow, produce iterators.

---

## 12) Iterables & for...of

**Definition:** Iterate over iterable objects (Array, Map, Set, String).

**Example:**

```javascript
for(const ch of 'abc') console.log(ch);
```

**Summary:** Simplifies looping through iterable values.

---

## 13) Map / Set / WeakMap / WeakSet

**Definition:**

* Map: key-value, keys can be any type.
* Set: unique values.
* WeakMap/WeakSet: weakly referenced, garbage-collected.

**Example:**

```javascript
const m=new Map(); m.set('a',1);
const s=new Set([1,2,2]);
```

**Summary:** Efficient collections for advanced use cases.

---

## 14) Symbols

**Definition:** Unique identifiers, often used as object keys.

**Example:**

```javascript
const id = Symbol('id');
const obj = {[id]:123};
console.log(obj[id]);
```

**Summary:** Prevents key collisions.

---

## 15) Array & String Enhancements

**Definition:** New methods: Array.from, Array.of, includes, find, fill, copyWithin. Strings: includes, startsWith, endsWith.

**Example:**

```javascript
Array.from('abc'); // ['a','b','c']
[1,2,3].includes(2); // true
'hello'.includes('ell'); // true
```

**Summary:** Easier array/string manipulation.

---

## 16) Object Helpers

**Definition:** Object.assign, Object.keys, Object.values.

**Example:**

```javascript
Object.assign({}, {a:1}, {b:2});
Object.keys({a:1}); // ['a']
Object.values({a:1}); // [1]
```

**Summary:** Copy, merge, and extract object properties efficiently.

---

## 17) Proxy & Reflect

**Definition:**

* Proxy: intercept object operations.
* Reflect: default object operations.

**Example:**

```javascript
const proxy = new Proxy({a:1}, {
  get(obj, prop){ return Reflect.get(obj, prop); }
});
console.log(proxy.a);
```

**Summary:** Useful for meta-programming, logging, validation.

---

## 18) Misc Built-ins

Number.isInteger, Math.trunc, String.repeat, Array.fill

---

## ✅ Diagrams

```
ES6 Features
 ├─ Variables & Scope
 ├─ Functions
 ├─ Strings
 ├─ Objects
 ├─ Modules
 ├─ Async (Promises, Generators)
 ├─ Collections
 └─ Meta-programming (Symbol, Proxy, Reflect)
```

```
       ES6
  ┌─────────────┐
  │ Syntax      │
  │ - let/const │
  │ - arrow fn  │
  │ - template  │
  └─────────────┘
  ┌─────────────┐
  │ Data Struct │
  │ - Map/Set   │
  │ - WeakMap   │
  └─────────────┘
  ┌─────────────┐
  │ Modules     │
  │ - import    │
  │ - export    │
  └─────────────┘
  ┌─────────────┐
  │ Async       │
  │ - Promises  │
  │ - Generators│
  └─────────────┘
  ┌─────────────┐
  │ Meta        │
  │ - Symbol    │
  │ - Proxy     │
  └─────────────┘
```

---

## ✅ Overall Summary

ES6 modernized JS with clean syntax, block scoping, constants, modules, Promises, Generators, advanced collections, and meta-programming tools. Essential for modern web development and technical interviews.
