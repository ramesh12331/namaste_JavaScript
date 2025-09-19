# 🔑 JavaScript లో this Keyword

JavaScript లో `this` keyword ఒక object ను సూచిస్తుంది. కానీ అది ఏ object ను సూచిస్తుందో → అది function ను ఎలా పిలిచామనే దానిపైన ఆధారపడి ఉంటుంది.

---

## 📌 1. this in Global Space
```js
console.log(this);
```
- Browser లో → **window object**
- Node.js లో → **{} లేదా global object**

---

## 📌 2. this inside a Function
```js
function x() {
  console.log(this);
}
x();
```
- **Non-strict mode** → global object (window)
- **Strict mode** → `undefined`

```js
"use strict";
function x() {
  console.log(this); // undefined
}
x();
window.x(); // window object
```

---

## 📌 3. this inside an Object’s Method
```js
const obj = {
  a: 10,
  x: function () {
    console.log(this);   // obj
    console.log(this.a); // 10
  }
};
obj.x();
```
👉 ఇక్కడ this → ఆ object (`obj`) ను సూచిస్తుంది.

---

## 📌 4. this with call, apply, and bind
```js
const student = {
    name: "Akshay",
    printName: function (city, country) {
        console.log(this.name + " from " + city + ", " + country);
    }
};

const student2 = { name: "Saini" };

// CALL
student.printName.call(student2, "Delhi", "India");  
// Output: "Saini from Delhi, India"

// APPLY
student.printName.apply(student2, ["New York", "USA"]);  
// Output: "Saini from New York, USA"

// BIND
const boundFunc = student.printName.bind(student2, "London", "UK");
boundFunc();  
// Output: "Saini from London, UK"
```

✅ **Summary**
- `call` → వెంటనే invoke అవుతుంది (arguments ఒక్కొక్కటిగా).
- `apply` → వెంటనే invoke అవుతుంది కానీ arguments array లో.
- `bind` → కొత్త function ను రిటర్న్ చేస్తుంది, దానిని తర్వాత call చేయాలి.

---

## 📌 5. this in Arrow Functions
Arrow functions కి తమ స్వంత `this` ఉండదు.  
అవి తమ **enclosing lexical scope** నుంచి `this` ను తీసుకుంటాయి.

```js
const obj = {
  a: 10,
  x: () => {
    console.log(this); // window (obj కాదు)
  }
};
obj.x();

const obj2 = {
  a: 20,
  x: function () {
    const y = () => {
      console.log(this); // obj2
    };
    y();
  }
};
obj2.x();
```

---

## 📌 6. this inside DOM Elements
```html
<button onclick="alert(this)">Click Me</button>
```
👉 ఇక్కడ `this` → ఆ HTML **button element** ను సూచిస్తుంది.

---

## 📊 Summary Table
| Context                | Value of `this` |
|-------------------------|-----------------|
| Global space (browser) | window object   |
| Function (non-strict)  | window object   |
| Function (strict)      | undefined       |
| Object method          | ఆ object        |
| Arrow function         | enclosing lexical scope |
| call/apply/bind        | మనం explicitly set చేసిన object |
| DOM element            | ఆ HTML element  |

---

## 🎯 Interview Questions & Answers

**Q1. JavaScript లో this అంటే ఏమిటి?**  
👉 Function ను ఎలా పిలిచామో దాని ఆధారంగా ఒక object ను సూచించే keyword.

**Q2. Arrow function లోని this vs normal function లోని this?**  
👉 Normal function → call చేసిన విధానం ఆధారపడి ఉంటుంది.  
👉 Arrow function → parent lexical scope నుంచి తీసుకుంటుంది.

**Q3. Global scope లో this ఏంటి?**  
👉 Browser → window, Node.js → global.

**Q4. Strict mode లో function లో this ఏంటి?**  
👉 అది `undefined`.

**Q5. call, apply, bind మధ్య తేడా?**  
👉  
- `call(obj, arg1, arg2, ...)` → వెంటనే invoke అవుతుంది.  
- `apply(obj, [args])` → వెంటనే invoke అవుతుంది కానీ array arguments తో.  
- `bind(obj, arg1, arg2, ...)` → కొత్త function ను రిటర్న్ చేస్తుంది.

**Q6. DOM event handler లో this ఏంటి?**  
👉 Event ను trigger చేసిన HTML element.
