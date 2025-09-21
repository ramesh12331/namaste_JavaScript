
# ⚡ ES6 పూర్తి గైడ్ – ఆధునిక JavaScript

ECMAScript 2015 (ES6) అనేది JavaScript కి పెద్ద మార్పు తీసుకువచ్చింది. ఇది కొత్త features తో కోడ్‌ను **clean, efficient, readable** చేస్తుంది.

---

## 📌 ముఖ్యమైన ES6 Concepts

### 1. let & const
* Block-scoped variables
* `let` → తిరిగి assign చేయవచ్చు
* `const` → constant, తిరిగి assign చేయలేం

```javascript
let x = 10;
const y = 20;
```

---

### 2. Arrow Functions
చిన్న syntax, `this` ను bind చేయదు.

```javascript
const add = (a, b) => a + b;
```

---

### 3. Template Literals
Backticks తో string interpolation.

```javascript
let name = "Ramesh";
console.log(`Hello, ${name}!`);
```

---

### 4. Default Parameters
ఫంక్షన్ కు default values ఇవ్వడం.

```javascript
function greet(msg = "Hello") {
  console.log(msg);
}
greet();
```

---

### 5. Destructuring
Array/Object లో values ని విడదీయడం.

```javascript
let [a, b] = [1, 2];
let {name, age} = {name: "Ramesh", age: 25};
```

---

### 6. Spread & Rest Operators
Spread (`...`) → values ని విస్తరించడం  
Rest (`...`) → values ని కలపడం  

```javascript
let arr = [1,2,3];
let newArr = [...arr, 4,5]; 

function sum(...nums) {
  return nums.reduce((a,b)=>a+b,0);
}
```

---

### 7. Classes
Object-oriented syntax.

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
Async operations handle చేయడానికి.

```javascript
let promise = new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("Done!"),1000);
});
promise.then(console.log);
```

---

### 9. Async/Await
Promises కు simple syntax.

```javascript
async function fetchData() {
  let data = await fetch("https://api.example.com");
  console.log(data);
}
```

---

### 10. Modules (import/export)
Code reuse కోసం.

```javascript
// file.js
export const pi = 3.14;

// app.js
import { pi } from './file.js';
```

---

### 11. Enhanced Object Literals
Short syntax properties & methods.

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
Iterables ని traverse చేయడానికి.

```javascript
for (let num of [1,2,3]) {
  console.log(num);
}
```

---

### 13. Map & Set
కొత్త collections.

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

## 📌 Interview Questions & Answers (తెలుగులో)

**Q1. var, let, const మధ్య తేడా ఏమిటి?**  
👉 `var` → function-scoped, `let` మరియు `const` → block-scoped. `const` తిరిగి assign చేయలేం.

**Q2. Arrow functions ఎందుకు ఉపయోగిస్తారు?**  
👉 Short syntax మరియు lexical `this` కోసం.

**Q3. Destructuring ఎందుకు అవసరం?**  
👉 Objects/Arrays నుండి values ను సులభంగా తీసుకోవడానికి.

**Q4. Spread vs Rest operators తేడా?**  
👉 Spread values ని విస్తరిస్తుంది, Rest values ని కలుపుతుంది.

**Q5. Promises ఎందుకు మంచివి?**  
👉 Callback hell ను తప్పించుకోవచ్చు, async code clean అవుతుంది.

**Q6. Modules ఎందుకు ఉపయోగిస్తారు?**  
👉 Code reuse మరియు maintainability కోసం.

**Q7. ES6 classes ఎందుకు prototypes కంటే బెటర్?**  
👉 OOP style code రాయడానికి సులభంగా ఉంటుంది.

**Q8. Map vs Object తేడా?**  
👉 Map లో ఏదైనా type keys గా వాడొచ్చు, insertion order ని maintain చేస్తుంది.

**Q9. Symbol ఉపయోగం ఏమిటి?**  
👉 Unique keys కోసం, name clashes తప్పించుకోవడానికి.

---

✅ **మొత్తం:** ES6 features వల్ల JavaScript code modern, readable మరియు interview-ready అవుతుంది 🚀
