# ⚡ ES6 (ECMAScript 2015) — Complete Guide

This guide covers core ES6 features with definitions, simple examples, diagrams, explanations, and summaries.

---

## 1) `let`, `const`, `var`

**Definition:** Block vs function scope, hoisting, TDZ.

**Example:**

```javascript
var x = 1;
let y = 2;
const z = {name: 'Ramesh'};
z.name = 'Akash';
```

**Summary:** Prefer `const`, use `let` for reassignment, avoid `var`.

---

## 2) Arrow Functions `=>`

**Definition:** Short syntax, lexical `this`.

**Example:**

```javascript
const add = (a,b) => a+b;
```

**Summary:** Clean, readable, ideal for callbacks.

---

## 3) Template Literals

```javascript
let name = 'Ramesh';
console.log(`Hello, ${name}!`);
```

**Summary:** Dynamic, multi-line strings.

---

## 4) Default Parameters

```javascript
function greet(name='Guest'){ console.log(`Hello, ${name}`); }
greet();
```

**Summary:** Avoids undefined args.

---

## 5) Rest & Spread

```javascript
function sum(...nums){ return nums.reduce((a,b)=>a+b,0); }
const arr2 = [...[1,2],3,4];
```

**Summary:** Collect or expand values easily.

---

## 6) Destructuring

```javascript
const [a,b] = [1,2];
const {name, age} = {name:'Ramesh', age:25};
```

**Summary:** Extract values efficiently.

---

## 7) Object Enhancements

```javascript
const x=1,y=2;
const obj={x,y,sum(){return x+y;},['key_'+x]:'val'};
```

**Summary:** Cleaner object syntax.

---

## 8) Classes

```javascript
class Animal{constructor(name){this.name=name;} speak(){return `${this.name} makes noise`;}}
class Dog extends Animal{ speak(){return `${this.name} barks`;}}
```

**Summary:** OOP-like syntax, prototype-based.

---

## 9) Modules

```javascript
export function add(a,b){return a+b;}
import {add} from './util.js';
```

**Summary:** Modular, maintainable code.

---

## 10) Promises

```javascript
new Promise(res=>setTimeout(()=>res('Done'),1000)).then(console.log);
```

**Summary:** Async flow control, avoids callback hell.

---

## 11) Generators

```javascript
function* gen(){ yield 1; yield 2; }
const it = gen(); it.next();
```

**Summary:** Pause/resume execution, lazy sequences.

---

## 12) Iterables & `for...of`

```javascript
for(const ch of 'abc') console.log(ch);
```

**Summary:** Loop over iterable objects.

---

## 13) Map / Set / WeakMap / WeakSet

```javascript
const m=new Map(); m.set('a',1);
const s=new Set([1,2,2]);
```

**Summary:** Advanced collections, uniqueness, GC-friendly.

---

## 14) Symbols

```javascript
const id = Symbol('id');
const obj={[id]:123};
console.log(obj[id]);
```

**Summary:** Unique keys to avoid collisions.

---

## 15) Array & String Enhancements

```javascript
Array.from('abc');
[1,2,3].includes(2);
'hello'.includes('ell');
```

**Summary:** Easier array and string manipulations.

---

## 16) Object Helpers

```javascript
Object.assign({}, {a:1}, {b:2});
Object.keys({a:1});
Object.values({a:1});
```

**Summary:** Copy, merge, extract properties.

---

## 17) Proxy & Reflect

```javascript
const proxy=new Proxy({a:1},{ get(obj,prop){ return Reflect.get(obj,prop); } });
console.log(proxy.a);
```

**Summary:** Meta-programming, logging, validation.

---

## 18) Misc Built-ins

`Number.isInteger`, `Math.trunc`, `String.repeat`, `Array.fill`

---

## 19) Diagrams

```
ES6 Features
 ├─ Variables & Scope (var, let, const, TDZ)
 ├─ Functions (arrow, default params, rest/spread)
 ├─ Strings (template literals)
 ├─ Objects (destructuring, shorthand, classes)
 ├─ Modules (import/export)
 ├─ Async (Promises, Generators)
 ├─ Collections (Map, Set, WeakMap, WeakSet)
 └─ Meta-programming (Symbol, Proxy, Reflect)
```

---

## ✅ Summary Diagram

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

ES6 modernized JavaScript:

* Cleaner syntax, block scoping, constants
* Modules for maintainability
* Promises & Generators for async
* Advanced collections & meta-programming
* Essential for modern web dev and interviews.
