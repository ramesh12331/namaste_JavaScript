# ⚡ ES6 (ECMAScript 2015) — పూర్తి గైడ్

ఈ గైడ్ core ES6 ఫీచర్స్ ను డిఫినిషన్స్, సింపుల్ ఎగ్జాంపుల్స్, డయాగ్రామ్స్, ఎక్స్‌ప్లనేషన్స్, సారాంశాలతో కవర్ చేస్తుంది.

---

## 1) `let`, `const`, `var`

**వివరణ:** బ్లాక్ vs ఫంక్షన్ స్కోప్, హోయిస్టింగ్, TDZ.

**ఎగ్జాంపుల్:**

```javascript
var x = 1;
let y = 2;
const z = {name: 'Ramesh'};
z.name = 'Akash';
```

**సారాంశం:** సాధారణంగా `const` ఉపయోగించండి, అవసరమైతే `let`, `var` నివారించండి.

---

## 2) Arrow Functions `=>`

**వివరణ:** చిన్న సింటాక్స్, lexical `this`.

**ఎగ్జాంపుల్:**

```javascript
const add = (a,b) => a+b;
```

**సారాంశం:** clean, readable, callbacks కోసం ideal.

---

## 3) Template Literals

```javascript
let name = 'Ramesh';
console.log(`Hello, ${name}!`);
```

**సారాంశం:** dynamic, multi-line strings.

---

## 4) Default Parameters

```javascript
function greet(name='Guest'){ console.log(`Hello, ${name}`); }
greet();
```

**సారాంశం:** undefined arguments నివారిస్తుంది.

---

## 5) Rest & Spread

```javascript
function sum(...nums){ return nums.reduce((a,b)=>a+b,0); }
const arr2 = [...[1,2],3,4];
```

**సారాంశం:** values ను సులభంగా collect లేదా expand చేయవచ్చు.

---

## 6) Destructuring

```javascript
const [a,b] = [1,2];
const {name, age} = {name:'Ramesh', age:25};
```

**సారాంశం:** values ను సమర్థవంతంగా extract చేయడానికి.

---

## 7) Object Enhancements

```javascript
const x=1,y=2;
const obj={x,y,sum(){return x+y;},['key_'+x]:'val'};
```

**సారాంశం:** cleaner object syntax.

---

## 8) Classes

```javascript
class Animal{constructor(name){this.name=name;} speak(){return `${this.name} makes noise`;} }
class Dog extends Animal{ speak(){return `${this.name} barks`;} }
```

**సారాంశం:** OOP-like syntax, prototype-based.

---

## 9) Modules

```javascript
export function add(a,b){return a+b;}
import {add} from './util.js';
```

**సారాంశం:** modular, maintainable code.

---

## 10) Promises

```javascript
new Promise(res=>setTimeout(()=>res('Done'),1000)).then(console.log);
```

**సారాంశం:** async flow control, callback hell నివారిస్తుంది.

---

## 11) Generators

```javascript
function* gen(){ yield 1; yield 2; }
const it = gen(); it.next();
```

**సారాంశం:** execution pause/resume, lazy sequences.

---

## 12) Iterables & `for...of`

```javascript
for(const ch of 'abc') console.log(ch);
```

**సారాంశం:** iterable objects మీద loop చేయడానికి.

---

## 13) Map / Set / WeakMap / WeakSet

```javascript
const m=new Map(); m.set('a',1);
const s=new Set([1,2,2]);
```

**సారాంశం:** advanced collections, uniqueness, GC-friendly.

---

## 14) Symbols

```javascript
const id = Symbol('id');
const obj={[id]:123};
console.log(obj[id]);
```

**సారాంశం:** collisions నివారించే unique keys.

---

## 15) Array & String Enhancements

```javascript
Array.from('abc');
[1,2,3].includes(2);
'hello'.includes('ell');
```

**సారాంశం:** array & string operations సులభం.

---

## 16) Object Helpers

```javascript
Object.assign({}, {a:1}, {b:2});
Object.keys({a:1});
Object.values({a:1});
```

**సారాంశం:** copy, merge, extract properties clean.

---

## 17) Proxy & Reflect

```javascript
const proxy=new Proxy({a:1},{ get(obj,prop){ return Reflect.get(obj,prop); } });
console.log(proxy.a);
```

**సారాంశం:** meta-programming, logging, validation.

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

ES6 తో JavaScript:

* cleaner syntax, block scoping, constants
* modular code (import/export)
* promises & generators తో async flow
* advanced collections & meta-programming
* ఆధునిక వెబ్ డెవలప్‌మెంట్ మరియు interviews కోసం అవసరం
