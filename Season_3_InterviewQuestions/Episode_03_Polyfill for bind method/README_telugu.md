# 🔑 JavaScript లో `bind()` మరియు Polyfill

JavaScript లో **`bind()`** method అనేది ఒక కొత్త function ని క్రియేట్ చేస్తుంది.  
ఆ కొత్త function call అవుతున్నప్పుడు, దాని **`this`** value మనం ఇచ్చిన object కి bind అవుతుంది.  
ఇంకా, మనం కావాలంటే ముందుగానే కొన్ని arguments ని కూడా **fix / pre-fill** చేసుకోవచ్చు.  

కొన్ని సార్లు మనమే `bind()`ని తయారు చేయాల్సి వస్తుంది. దాన్ని **Polyfill** అంటారు.  

---

## 📌 `bind()` Syntax  

```js
function.bind(thisArg, arg1, arg2, ...);
```

- **thisArg** → ఏ object తో bind చేయాలో.  
- **arg1, arg2, ...** → ముందే fix చేసుకోవాల్సిన optional arguments.  

---

## 📌 Example: Normal `bind()`  

```js
let obj = {
  firstName: "Akshay",
  lastName: "Saini"
};

let printName = function () {
  console.log(this.firstName + " " + this.lastName);
};

let printMyName = printName.bind(obj);
printMyName();  
// Output: Akshay Saini
```

👉 ఇక్కడ `this` → `obj` కి bind అయ్యింది.  

---

## 📌 Example: `bind()` with arguments  

```js
let obj = {
  firstName: "Akshay",
  lastName: "Saini"
};

let printName = function (hometown, state, country) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state + ", " + country);
};

let printMyName = printName.bind(obj, "Dehradun", "Uttarakhand");
printMyName("India");  
// Output: Akshay Saini from Dehradun, Uttarakhand, India
```

👉 ఇక్కడ ముందే రెండు arguments `"Dehradun"` మరియు `"Uttarakhand"` fix అయ్యాయి. తర్వాత `"India"` call సమయంలో ఇవ్వబడింది.  

---

## 📌 Polyfill for `bind()`  

మనమే `bind()` implementation ఇలా రాయవచ్చు 👇  

```js
Function.prototype.mybind = function (...args) {
  let originalFn = this;          // అసలు function
  let context = args[0];          // bind చేయాల్సిన object
  let params = args.slice(1);     // ముందే ఇచ్చిన arguments

  return function (...args2) {
    // ముందే ఉన్న arguments + తర్వాత ఇచ్చిన arguments కలపడం
    originalFn.apply(context, [...params, ...args2]);
  };
};
```

---

## 📌 Example: Using Polyfill  

```js
let obj = {
  firstName: "Akshay",
  lastName: "Saini"
};

let printName = function (hometown, state, country) {
  console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state + ", " + country);
};

let printMyName2 = printName.mybind(obj, "Dehradun", "Uttarakhand");
printMyName2("India");  
// Output: Akshay Saini from Dehradun, Uttarakhand, India
```

---

## 📊 Summary Table  

| Method  | వెంటనే call అవుతుందా? | Arguments ఎలా?     | Return Value   |
|---------|-------------------------|-------------------|----------------|
| `call`  | ✅ అవును               | ఒక్కొక్కటి         | Function result|
| `apply` | ✅ అవును               | Array లో          | Function result|
| `bind`  | ❌ కాదు (later)        | Fix చేసినవి + కొత్తవి | కొత్త function |

---

## 🎯 ఇంటర్వ్యూ Questions & Answers  

### Q1. JavaScript లో `bind()` ఏం చేస్తుంది?  
👉 కొత్త function ని తయారు చేస్తుంది, దాంట్లోని `this` మనం ఇచ్చిన object కి bind అవుతుంది.  

---

### Q2. Polyfill అంటే ఏమిటి?  
👉 Built-in function లను మనం చేతితో imitate చేయడం. Example: మనమే `bind()`ని తయారు చేయడం.  

---

### Q3. `call`, `apply`, `bind` మధ్య తేడా?  
- **call** → వెంటనే call అవుతుంది, arguments ఒక్కొక్కటిగా.  
- **apply** → వెంటనే call అవుతుంది, arguments array లో.  
- **bind** → కొత్త function ఇస్తుంది, తర్వాత call చేయొచ్చు.  

---

### Q4. Polyfill లోని steps ఏంటి?  
👉  
1. అసలు function ని save చేసుకోవాలి.  
2. ఏ object కి bind చేయాలో, మరియు ముందే ఇచ్చిన arguments తీసుకోవాలి.  
3. కొత్త function ని return చేసి, `apply()` తో object మరియు arguments కలిపి execute చేయాలి.  

---

### Q5. Arrow functions లో `bind()` పనిచేస్తుందా?  
👉 కాదు ❌. ఎందుకంటే arrow functions కి తమదైన `this` ఉండదు. అవి lexical scope నుండి `this` inherit చేసుకుంటాయి.  

---

✅ ఇప్పుడు నీకు **`bind()` method** ఎలా పనిచేస్తుందో, అలాగే **Polyfill** ఎలా రాయాలో స్పష్టంగా వచ్చింది. 🚀  
