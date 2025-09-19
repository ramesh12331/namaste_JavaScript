# 📘 Call, Apply, మరియు Bind in JavaScript

JavaScript లో **call, apply, bind** methods వాడి మనం `this` keyword ఎవరిని సూచించాలో (ఏ object ను సూచించాలో) స్పష్టంగా నిర్ణయించవచ్చు.

---

## 🔹 1. call() Method

**అర్థం**: ఫంక్షన్ ని వెంటనే execute చేస్తుంది. Arguments ను ఒక్కొక్కటిగా పంపాలి.

**Syntax**:
```js
func.call(thisArg, arg1, arg2, ...)
```

**ఉదాహరణ**:
```js
let obj = {
    firstName: "Akshay",
    lastName: "Saini",
};

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
};

// call వాడుతూ
printFullName.call(obj, "Dehradun", "Uttarakhand");
// Output: Akshay Saini from Dehradun, Uttarakhand
```

👉 ఇక్కడ `this` అనేది obj కి bind అవుతుంది.

---

## 🔹 2. apply() Method

**అర్థం**: ఫంక్షన్ ని వెంటనే execute చేస్తుంది. Arguments ను array రూపంలో పంపాలి.

**Syntax**:
```js
func.apply(thisArg, [argsArray])
```

**ఉదాహరణ**:
```js
let obj2 = {
    firstName: "Sachin",
    lastName: "Tendulkar",
};

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
};

// apply వాడుతూ
printFullName.apply(obj2, ["Mumbai", "Maharashtra"]);
// Output: Sachin Tendulkar from Mumbai, Maharashtra
```

👉 ఇక్కడ arguments ను array లో పెట్టి పంపాలి.

---

## 🔹 3. bind() Method

**అర్థం**: ఫంక్షన్ ని వెంటనే run చేయదు. కొత్త ఫంక్షన్‌ని return చేస్తుంది. ఆ ఫంక్షన్ ని తర్వాత ఎప్పుడైనా execute చేయవచ్చు.

**Syntax**:
```js
let boundFunc = func.bind(thisArg, arg1, arg2, ...)
```

**ఉదాహరణ**:
```js
let obj3 = {
    firstName: "Virat",
    lastName: "Kohli",
};

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
};

// bind వాడుతూ
let printName = printFullName.bind(obj3, "Delhi", "India");
console.log(printName); // Function
printName();
// Output: Virat Kohli from Delhi, India
```

👉 ఇక్కడ `bind()` కొత్త function ఇచ్చింది, దాన్ని తర్వాత call చేశాం.

---

## 📊 Summary Table

| Method   | Execution విధానం                  | Arguments పంపే విధానం                |
|----------|-----------------------------------|--------------------------------------|
| call()   | వెంటనే run అవుతుంది               | Individually `(arg1, arg2, …)`       |
| apply()  | వెంటనే run అవుతుంది               | Array రూపంలో `[arg1, arg2, …]`      |
| bind()   | కొత్త function return చేస్తుంది     | Individually (తర్వాత call చెయ్యాలి) |

---

## 🎯 ఇంటర్వ్యూ ప్రశ్నలు & జవాబులు

**Q1. call, apply, bind తేడా ఏమిటి?**  
👉 `call()` → వెంటనే run అవుతుంది, arguments ఒక్కొక్కటిగా ఇస్తాం.  
👉 `apply()` → వెంటనే run అవుతుంది, arguments array లో ఇస్తాం.  
👉 `bind()` → కొత్త function return చేస్తుంది, తర్వాత run చెయ్యాలి.  

**Q2. apply ని ఎప్పుడు వాడాలి?**  
👉 arguments array రూపంలో ఉన్నప్పుడు apply వాడాలి.  

**Q3. bind ఏమి return చేస్తుంది?**  
👉 bind ఒక కొత్త function ని return చేస్తుంది, అది `this` మరియు arguments fix అయ్యి ఉంటుంది.  

**Q4. function borrowing అంటే ఏమిటి?**  
👉 ఒక object లో ఉన్న method ని ఇంకో object లో వాడటం. దీనికి call/apply/bind methods వాడతారు.  

**Q5. callback functions లో ఏ method useful?**  
👉 `bind()`, ఎందుకంటే అది కొత్త function ఇస్తుంది fixed `this` తో, తర్వాత అవసరం ఉన్నప్పుడు call చేసుకోవచ్చు.  

---

## ✅ ముగింపు

- **call()** → వెంటనే execute అవుతుంది, arguments ఒక్కొక్కటిగా పంపాలి.  
- **apply()** → వెంటనే execute అవుతుంది, arguments array గా పంపాలి.  
- **bind()** → కొత్త function ఇస్తుంది, తర్వాత అవసరం ఉన్నప్పుడు వాడుకోవచ్చు.  
