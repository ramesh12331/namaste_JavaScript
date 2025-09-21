# ⚡ ES6 (ECMAScript 2015) — పూర్తి వివరాలు

ఈ గైడ్ ES6 ఫీచర్స్ ను తెలుగులో explain చేస్తుంది, ఉదాహరణలు మరియు practical usage తో.

---

## 1) let, const, var

**వివరణ:**

* var → function-scoped, hoisting తో ఉంటుంది (initialized as undefined).
* let → block-scoped, hoisted అయితే కూడా Temporal Dead Zone (TDZ) లో ఉంటుంది.
* const → block-scoped, immutable binding (reassign చేయలేం, కానీ object properties మార్చవచ్చు).

**Example:**

```javascript
var x = 1;
let y = 2;
const z = {name: 'Ramesh'};
z.name = 'Akash'; // allowed
```

**సారాంశం:**

* const ను default గా వాడండి
* reassignment కావాల్సిన variables కోసం let వాడండి
* var ను avoid చేయండి

---

## 2) Arrow Functions `=>`

**వివరణ:**

* Short syntax, `this` lexical గా bind అవుతుంది.

**Example:**

```javascript
const add = (a, b) => a + b;
```

**సారాంశం:**

* Clean, readable code కోసం వాడండి
* Callback లేదా method లో proper this context కోసం ideal

---

## 3) Template Literals

**వివరణ:**

* Backticks `` `...` `` లో strings
* \${expression} interpolation & multi-line strings support

**Example:**

```javascript
let name = 'Ramesh';
console.log(`Hello, ${name}!`);
```

**సారాంశం:**

* Dynamic strings, multi-line, readable code

---

## 4) Default Parameters

**వివరణ:**

* Function parameters కు default value assign చేస్తుంది

**Example:**

```javascript
function greet(name='Guest') {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
```

**సారాంశం:**

* Undefined arguments avoid చేయవచ్చు

---

## 5) Rest & Spread Operators

**వివరణ:**

* Rest → remaining arguments array లో collect చేస్తుంది
* Spread → array/string values expand చేస్తుంది

**Example:**

```javascript
function sum(...nums) {
  return nums.reduce((a,b) => a+b, 0);
}
const arr2 = [...[1,2], 3, 4]; // [1,2,3,4]
```

**సారాంశం:**

* Values collect లేదా expand చేయడానికి ఉపయోగించండి

---

## 6) Destructuring

**వివరణ:**

* Arrays / Objects నుండి values extract చేయడానికి

**Example:**

```javascript
const [a,b] = [1,2];
const {name, age} = {name:'Ramesh', age:25};
```

**సారాంశం:**

* Clean syntax ద్వారా values extract చేయవచ్చు

---

## 7) Object Enhancements

**వివరణ:**

* Shorthand properties, computed properties, concise methods

**Example:**

```javascript
const x=1, y=2;
const obj = {x, y, sum(){ return x + y; }, ['key_'+x]: 'val'};
```

**సారాంశం:**

* Object code clean & compact

---

## 8) Classes

**వివరణ:**

* Prototype-based OOP కి syntactic sugar
* Constructor, methods, inheritance (extends), super

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

**సారాంశం:**

* Prototype-based clear OOP syntax

---

## 9) Modules

**వివరణ:**

* Code split చేయడానికి export & import

**Example:**

```javascript
// util.js
export function add(a,b){ return a+b; }
// main.js
import {add} from './util.js';
```

**సారాంశం:**

* Modular, maintainable, reusable code

---

## 10) Promises

**వివరణ:**

* Async operations కోసం future value represent చేస్తుంది
* States: Pending → Fulfilled → Rejected

**Example:**

```javascript
new Promise(res => setTimeout(()=>res('Done'),1000))
  .then(console.log);
```

**సారాంశం:**

* Async tasks cleanly handle చేయవచ్చు
* Callback hell avoid అవుతుంది

---

## 11) Generators

**వివరణ:**

* function\* తో pause/resume execution (yield)
* Lazy evaluation, custom iteration

**Example:**

```javascript
function* gen() { yield 1; yield 2; }
const it = gen();
it.next(); // { value: 1, done: false }
```

**సారాంశం:**

* Execution control & iterators

---

## 12) Iterables & for...of

**వివరణ:**

* Arrays, Map, Set, String లో loop కోసం

**Example:**

```javascript
for(const ch of 'abc') console.log(ch);
```

**సారాంశం:**

* Iterable objects loop చేయడానికి సులభం

---

## 13) Map / Set / WeakMap / WeakSet

**వివరణ:**

* Map → key-value, keys ఏ datatype అయినా
* Set → unique values
* WeakMap/WeakSet → GC-friendly weak references

**Example:**

```javascript
const m = new Map(); m.set('a',1);
const s = new Set([1,2,2]);
```

**సారాంశం:**

* Advanced collections, uniqueness, memory-friendly

---

## 14) Symbols

**వివరణ:**

* Unique identifiers, object keys కోసం

**Example:**

```javascript
const id = Symbol('id');
const obj = {[id]:123};
console.log(obj[id]);
```

**సారాంశం:**

* Key collisions avoid చేయడానికి

---

## 15) Array & String Enhancements

**వివరణ:**

* Array: from, of, includes, find, fill, copyWithin
* String: includes, startsWith, endsWith

**Example:**

```javascript
Array.from('abc'); // ['a','b','c']
[1,2,3].includes(2); // true
'hello'.includes('ell'); // true
```

**సారాంశం:**

* Arrays / Strings manipulation సులభం

---

## 16) Object Helpers

**వివరణ:**

* Object.assign, Object.keys, Object.values

**Example:**

```javascript
Object.assign({}, {a:1}, {b:2});
Object.keys({a:1}); // ['a']
Object.values({a:1}); // [1]
```

**సారాంశం:**

* Copy, merge, extract efficiently

---

## 17) Proxy & Reflect

**వివరణ:**

* Proxy → object operations intercept చేయడానికి
* Reflect → default operations access

**Example:**

```javascript
const proxy = new Proxy({a:1}, {
  get(obj, prop){ return Reflect.get(obj, prop); }
});
console.log(proxy.a);
```

**సారాంశం:**

* Meta-programming, validation, logging

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

**Summary Diagram:**

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

## ✅ Overall Summary

* ES6 ద్వారా JavaScript modernized అయ్యింది
* Cleaner syntax, block scoping, constants
* Modules, Promises, Generators, advanced collections, meta-programming tools
* Modern web development & technical interviews కోసం చాలా ముఖ్యం
