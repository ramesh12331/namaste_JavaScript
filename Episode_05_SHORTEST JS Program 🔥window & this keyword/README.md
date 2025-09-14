cat << 'EOF' > README.md
# Shortest JS Program, Global Object & this Keyword

## 📌 Overview
Even an **empty JavaScript file** executes something behind the scenes.  
The JavaScript Engine automatically creates:  
- **Global Execution Context (GEC)** → Memory + Execution environment.  
- **Global Object** → `window` (browser), `global` (Node.js).  
- **this keyword** → At global level, points to the global object.  

---

## 📌 Key Points
- **Global Object** contains built-in functions & variables accessible anywhere.  
- **Global Variables (var)** declared in global scope are attached to the global object.  

### Example
```js
var x = 10;

console.log(x);         // 10
console.log(this.x);    // 10
console.log(window.x);  // 10  (in browser)
```

👉 At global level:  
```js
this === window   // true (in browser)
```

👉 In Node.js:  
- Global object is \`global\` instead of \`window\`.

---

## 📌 Summary

| Concept            | Explanation |
|--------------------|-------------|
| Shortest JS Program | An empty file (JS engine still creates GEC, global object, this). |
| Global Object      | Holds global variables & functions → \`window\` (browser), \`global\` (Node.js). |
| this keyword       | Refers to the global object in global scope. |
| Global Variables   | Declared with \`var\`, attached to global object. |
| let & const        | Do **not** attach to global object. |

---

## 🎯 Interview Q&A

**Q1: What is the shortest JS program?**  
👉 An empty file. JS engine still creates GEC, global object, and \`this\`.

**Q2: What is the global object in JavaScript?**  
👉 A built-in object holding global variables & functions. \`window\` in browsers, \`global\` in Node.js.

**Q3: What does \`this\` refer to at the global level?**  
👉 It points to the global object (\`window\` in browsers).

**Q4: Are global variables attached to the global object?**  
👉 Yes, if declared with \`var\`.

**Q5: Does \`let\` or \`const\` attach variables to the global object?**  
👉 No, only \`var\` attaches variables to the global object.

---
EOF

