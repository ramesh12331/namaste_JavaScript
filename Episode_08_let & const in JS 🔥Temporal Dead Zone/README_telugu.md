# JavaScript లో let & const | Temporal Dead Zone (TDZ)

## 📌 Hoisting అంటే ఏమిటి?
- JavaScript లో **var, let, const** అన్నీ **hoisted** అవుతాయి.
- కానీ వీటి **initialization (value assign చేయడం)** వేర్వేరుగా జరుగుతుంది.

👉  
- **var** → hoisting సమయంలోనే **undefined** గా initialize అవుతుంది.  
- **let / const** → memory లోకి వెళ్తాయి కానీ **value assign అయ్యే వరకు access చేయలేము**. (అదే TDZ)

---

## 📌 ఉదాహరణ: var vs let
```js
console.log(a); // ❌ ReferenceError (TDZ)
console.log(b); // ✅ undefined (var)

let a = 10;
var b = 15;

console.log(a); // ✅ 10
console.log(b); // ✅ 15

console.log(window.a); // undefined (global కి attach అవ్వదు)
console.log(window.b); // 15 (global కి attach అవుతుంది)
```

---

## 📌 Temporal Dead Zone (TDZ)
- **TDZ** = variable **declare అయ్యింది కానీ value assign కాకపోయే** సమయం.  
- ఈ సమయంలో variable ను access చేస్తే **ReferenceError** వస్తుంది.

```js
console.log(x); // ❌ ReferenceError
let x = 5;      // TDZ ముగిసింది
console.log(x); // ✅ 5
```

---

## 📌 let vs const

### ✅ let
```js
let a;
a = 10;   // Allowed
console.log(a); // 10
```

### ❌ const (compulsoryగా initialize చేయాలి)
```js
const b; // SyntaxError: Missing initializer
```

### ❌ const (reassign చేయలేం)
```js
const c = 100;
c = 200; // TypeError: Assignment to constant variable
```

### ✅ const తో objects/arrays లో values మార్చవచ్చు
```js
const obj = { name: "JS" };
obj.name = "JavaScript"; // Allowed
console.log(obj.name);   // "JavaScript"

const arr = [1, 2, 3];
arr.push(4);   // Allowed
console.log(arr); // [1, 2, 3, 4]
```

---

## 📌 Errors రకాలూ

### 1. ReferenceError
```js
console.log(y); // ❌ Cannot access 'y' before initialization
let y = 20;

console.log(z); // ❌ z is not defined (declare కూడా కాలేదు)
```

### 2. SyntaxError
```js
let a = 10;
let a = 20; // ❌ Identifier 'a' has already been declared

const b;    // ❌ Missing initializer in const declaration
```

### 3. TypeError
```js
const c = 30;
c = 40; // ❌ Assignment to constant variable
```

---

## ✅ మంచి Practices
- ఎక్కువగా **const** వాడాలి → immutability కోసం.  
- **let** ను మాత్రమే వాడాలి → value మార్చాల్సినప్పుడు.  
- **var** ను ఎప్పటికీ వాడకూడదు → hoisting వల్ల bugs వస్తాయి.  
- Variables ను ఎప్పుడూ **scope మొదట్లోనే declare చేయాలి**.

---

## 🎯 Interview Q&A (తెలుగులో)

### Q1: let, const hoisted అవుతాయా?
👉 అవును. కానీ value assign అయ్యే వరకు **TDZ లో ఉంటాయి**.

---

### Q2: Temporal Dead Zone అంటే ఏమిటి?
👉 Variable **declare అయింది కానీ value assign కాకపోయే సమయంలో** దానిని access చేస్తే **ReferenceError** వస్తుంది.

---

### Q3: var, let, const మధ్య తేడా?
- **var** → function/global scope, hoisting లో undefined అవుతుంది.  
- **let** → block scope, hoisted కానీ TDZ లో ఉంటుంది.  
- **const** → block scope, compulsoryగా వెంటనే initialize చేయాలి, reassign చేయలేం.  

---

### Q4: Redeclaration చేయవచ్చా?
- **var** → ✅ అవును (dangerous).  
- **let** → ❌ కుదరదు.  
- **const** → ❌ కుదరదు.  

---

### Q5: ఎందుకు window.a = undefined కానీ window.b = 15 అవుతుంది?
👉 ఎందుకంటే `var` → **global object కి attach అవుతుంది**, కానీ `let`/`const` → **script scope లోనే ఉంటాయి**.  

---

### Q6: typeof తో TDZ లో variable access చేస్తే ఏమవుతుంది?
👉 సాధారణ undeclared variable అయితే `"undefined"` వస్తుంది.  
👉 కానీ TDZ లో ఉంటే **ReferenceError** వస్తుంది.

```js
console.log(typeof undeclaredVar); // "undefined"
console.log(typeof myVar); // ❌ ReferenceError
let myVar = 10;
```
