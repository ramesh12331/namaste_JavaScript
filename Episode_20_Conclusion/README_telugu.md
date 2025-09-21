# 🎬 జావాస్క్రిప్ట్ కోర్ & అడ్వాన్స్ కాన్సెప్ట్ – పూర్తి గైడ్

---

## ✅ Episode\_01: JavaScript ఎలా పనిచేస్తుంది

**నిర్వచనం:**
JavaScript అనేది **సింగిల్-థ్రెడెడ్, సింక్రోనస్, ఇంటర్ప్రెటెడ్ లాంగ్వేజ్**. ఇది JS ఇంజిన్ (V8) ద్వారా నడుస్తుంది.

**ఉదాహరణ:**

```javascript
console.log("Start");
console.log("End");
```

**వివరణ:**

* JS లైన్ బై లైన్ నడుస్తుంది.
* Output: `Start` → `End`
* సింక్రోనస్ execution ని చూపిస్తుంది.

**సారాంశం:**

* JS ఒక్కో టాస్క్ ను ఒకసారి చేస్తుంది.
* అసింక్రోనస్ కోడ్ & ఈవెంట్ లూప్ అర్థం చేసుకోవడానికి ఇది ముఖ్యం.

---

## ✅ Episode\_02: JavaScript కోడ్ ఎక్సిక్యూషన్

**నిర్వచనం:**
JS **Execution Contexts** ఉపయోగిస్తుంది – Global మరియు Function – వేరియబుల్స్ & execution track చేసుకోవడానికి.

**ఉదాహరణ:**

```javascript
let a = 10;
function greet() {
  let b = 20;
  console.log(a + b);
}
greet(); // 30
```

**వివరణ:**

* `a` global context లో ఉంది, `b` function context లో.
* Function outer/global variable access చేస్తుంది → **scope chain**

**సారాంశం:**

* Function calls లో execution contexts stack అవుతుంది.
* Hoisting, closures, variable access అర్థం చేసుకోవడానికి ముఖ్యం.

---

## ✅ Episode\_03: Hoisting

**నిర్వచనం:**
Variables & functions execution కంటే ముందే **scope top కి తీసుకెళ్ళబడతాయి**.

* `var` → undefined
* `let/const` → TDZ (Temporal Dead Zone)

**ఉదాహరణ:**

```javascript
console.log(x); // undefined
var x = 5;
console.log(y); // ReferenceError
let y = 10;
```

**వివరణ:**

* `x` memory allocate → undefined
* `y` declaration ముందు access చేయలేరు → ReferenceError

**సారాంశం:**

* Hoisting variable reference ముందు access చేయగలదు
* TDZ let/const ను declaration ముందు access చేయకుండా నిరోధిస్తుంది

---

## ✅ Episode\_04: Functions & Variable Environment

**నిర్వచనం:**
Function call마다 **Execution Context** ఏర్పడుతుంది:

* Variable Environment → variables store
* Scope Chain → outer variable access
* this binding → context ఆధారంగా

**ఉదాహరణ:**

```javascript
function add(a,b){
  let sum = a+b;
  return sum;
}
console.log(add(2,3)); // 5
```

**వివరణ:**

* ప్రతి function call కు private context
* `sum` function లో మాత్రమే access అవుతుంది

**సారాంశం:**

* Functions isolated environment లో operate చేస్తాయి
* Scope chain outer variables access చేయడానికి ఉపయోగపడుతుంది

---

## ✅ Episode\_05: window & this

**నిర్వచనం:**

* `window`: browsers లో global object
* `this`: context ఆధారంగా value

**ఉదాహరణ:**

```javascript
console.log(this); // window
const obj = {name:"Ramesh", greet(){console.log(this.name);}};
obj.greet(); // Ramesh
```

**వివరణ:**

* Global context: this = window
* Object method: this = object zelf

**సారాంశం:**

* Function call location ఆధారంగా this మారుతుంది
* Object oriented JS లో understanding చాలా ముఖ్యం

---

## ✅ Episode\_06: undefined vs not defined

**నిర్వచనం:**

* `undefined`: variable declare అయినది కానీ value లేదు
* `not defined`: variable declare కూడా చేయలేదు → ReferenceError

**ఉదాహరణ:**

```javascript
let a;
console.log(a); // undefined
console.log(b); // ReferenceError
```

**వివరణ:**

* `a` memory లో ఉంది, value లేదు → undefined
* `b` exist does not exist → ReferenceError

**సారాంశం:**

* Variable allocation vs inexistence గుర్తించడానికి ఉపయోగపడుతుంది

---

## ✅ Episode\_07: Scope Chain & Lexical Environment

**నిర్వచనం:**
JS variable search: **current scope → outer scope → global scope**

**ఉదాహరణ:**

```javascript
let x=10;
function outer(){
  let y=20;
  function inner(){
    console.log(x+y); //30
  }
  inner();
}
outer();
```

**వివరణ:**

* inner function accesses outer y & global x → scope chain

**సారాంశం:**

* Lexical scope variable accessibility define చేస్తుంది
* Closures కోసం ఈ concept important

---

## ✅ Episode\_08: let & const & Temporal Dead Zone

**నిర్వచనం:**

* `let` & `const` block scoped
* Declaration ముందే access → TDZ error

**ఉదాహరణ:**

```javascript
console.log(a); // ReferenceError
let a=5;
```

**సారాంశం:**

* TDZ accidental access prevent చేస్తుంది
* Safer code writing కి help చేస్తుంది

---

## ✅ Episode\_09: Block Scope & Shadowing

**నిర్వచనం:**

* `{}` లో declare variables only block లో access అవుతాయి
* Inner variable outer variable shadow చేయవచ్చు

**ఉదాహరణ:**

```javascript
let x=10;
{
  let x=20;
  console.log(x); //20
}
console.log(x); //10
```

**సారాంశం:**

* Variable conflicts prevent అవుతాయి
* Inner variables outer variables overwrite చేయవు

---

## ✅ Episode\_10: Closures

**నిర్వచనం:**
Function outer scope variables remember చేస్తుంది even after outer finishes

**ఉదాహరణ:**

```javascript
function outer(){
  let count=0;
  return function(){count++; console.log(count);}
}
const counter = outer();
counter(); //1
counter(); //2
```

**సారాంశం:**

* Private data, state maintain, async operations కోసం useful

---

## ✅ Episode\_11: setTimeout + Closures

**నిర్వచనం:**
Asynchronous callbacks లో closure variables capture చేస్తుంది

**ఉదాహరణ:**

```javascript
for(let i=1;i<=3;i++){
  setTimeout(()=>console.log(i),1000);
}
```

**వివరణ:**

* `let i` block scoped → correct value capture
* Output after 1 second: 1,2,3

**సారాంశం:**

* Timers, async code లో closures interaction చూపిస్తుంది

---

## ✅ Episode\_12: Crazy JS Interview – Closures

**నిర్వచనం:**
Private state & module patterns కోసం advanced closures

**ఉదాహరణ:**

```javascript
function counter(){
  let count=0;
  return {inc:()=>++count, dec:()=>--count};
}
const c=counter();
console.log(c.inc()); //1
```

**సారాంశం:**

* Variable private, safe increment/decrement

---

## ✅ Episode\_13: First Class Functions

**నిర్వచనం:**
Functions objects లా work చేస్తాయి; arguments గా ఇవ్వగలము, return చేయగలము, store చేయగలము

**ఉదాహరణ:**

```javascript
function greet(name){return `Hi ${name}`;}
function welcome(fn){console.log(fn("Ramesh"));}
welcome(greet); //Hi Ramesh
```

**సారాంశం:**

* Functional programming enable చేస్తుంది
* Callbacks, higher-order functions foundation

---

## ✅ Episode\_14: Callback Functions & Event Listeners

**నిర్వచనం:**
Async events handle చేయడానికి functions argument గా ఇచ్చే పద్ధతి

**ఉదాహరణ:**

```javascript
button.addEventListener("click", ()=>console.log("Clicked!"));
```

**సారాంశం:**

* Async behavior enable చేస్తుంది without blocking main thread
* DOM events core concept

---

## ✅ Episode\_15: Asynchronous JavaScript & Event Loop

**నిర్వచనం:**
Asynchronous JS non-blocking code execution తో callbacks, promises, async/await support చేస్తుంది. **Event Loop** synchronous & asynchronous tasks coordinate చేస్తుంది.

**ఉదాహరణ:**

```javascript
console.log('Start');
setTimeout(()=>console.log('Timeout'),0);
Promise.resolve().then(()=>console.log('Promise'));
console.log('End');
// Output: Start, End, Promise, Timeout
```

**వివరణ:**

* సింక్రోనస్ కోడ్ మొదట: Start, End
* Microtasks (Promise) current stack తరువాత → Promise
* Macrotasks (setTimeout) microtasks తరువాత → Timeout
* Event Loop ఈ execution order manage చేస్తుంది

**సారాంశం:**

* Event Loop వల్ల async behavior సాధ్యమే
* Microtasks vs Macrotasks తెలుసుకోవడం debugging కి ముఖ్యం

---

## ✅ Episode\_16: JS Engine – Google V8

**నిర్వచనం:**
Engine JS code parse, compile & efficiently execute చేస్తుంది

**Components:** Parser → Ignition → TurboFan → Garbage Collector

**సారాంశం:**

* Engine understanding performance optimization & debugging కు help

---

## ✅ Episode\_17: setTimeout Quirks

**నిర్వచనం:**
setTimeout code immediately run కాకుండా **task queue** లో schedule చేస్తుంది

**ఉదాహరణ:**

```javascript
setTimeout(()=>console.log("Hi"),0);
console.log("Bye");
// Output: Bye, Hi
```

**సారాంశం:**

* Event Loop behavior చూపిస్తుంది
* Async programming understanding కోసం important

---

## ✅ Episode\_18: Higher-Order Functions

**నిర్వచనం:**
Functions accept or return other functions

**ఉదాహరణ:**

```javascript
function greet(fn){fn();}
greet(()=>console.log("Hello")); //Hello
```

**సారాంశం:**

* Functional programming core concept
* Enables callbacks, currying, function composition

---

## ✅ Episode\_19: map, filter & reduce

**నిర్వచనం:**
Array కోసం functional methods

* map → transform each element
* filter → select elements
* reduce → accumulate values

**ఉదాహరణ:**

```javascript
[1,2,3].map(n=>n*2); //[2,4,6]
[1,2,3].filter(n=>n>1); //[2,3]
[1,2,3].reduce((a,b)=>a+b,0); //6
```

**సారాంశం:**

* Concise, readable array operations
* Traditional loops avoid చేస్తుంది, functional style promote

---

# 📌 Overall Summary

* **Execution & Scope:** Hoisting, lexical environment, scope chain
* **Closures & First-Class Functions:** Async code, modularity, private variables
* **Event Handling & Async JS:** Callbacks, setTimeout, promises, async/await, event loop behavior
* **Functional Programming:** map, filter, reduce, higher-order functions
* **JS Engine:** V8 understanding helps optimize, debug, write efficient code
