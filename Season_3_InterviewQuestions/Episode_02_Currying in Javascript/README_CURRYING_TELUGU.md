# 🔑 Currying in JavaScript (కర్రీయింగ్)

**Currying** అనేది ఒక ఫంక్షన్‌లో ఉండే multiple arguments (అనగా ఒకేసారి ఎక్కువ parameters తీసుకునే function) ను  
ప్రతి function ఒక్కో argument మాత్రమే తీసుకునేలా విడగొట్టే విధానం.

👉 దీని వల్ల reuse చేయగలిగే functions తయారవుతాయి.

---

## 📌 సింటాక్స్ (Syntax)

```js
// Normal function
function f(a, b, c) {
   return a + b + c;
}

// Curried function
function f(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
```

---

## 🔹 Example 1: bind() వాడటం

```js
let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);  
// Output: 6

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);  
// Output: 15
```

👉 ఇక్కడ bind వాడి x అనే argument ను fix చేసాం.  
దాని వల్ల ప్రత్యేక (specialized) functions తయారవుతాయి.

---

## 🔹 Example 2: Closure వాడటం

```js
let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo = multiply(2);
multiplyByTwo(3);  
// Output: 6

let multiplyByThree = multiply(3);
multiplyByThree(10);  
// Output: 30
```

👉 ఇక్కడ inner function, outer function లోని x value ను closure ద్వారా గుర్తుంచుకుంటుంది.

---

## 📊 Summary Table

| విధానం (Approach) | వివరణ (Description) | ఉదాహరణ (Example) |
|--------------------|----------------------|--------------------|
| bind()            | Arguments fix చేసి కొత్త function తయారు చేస్తుంది | multiply.bind(this, 2) |
| Closure           | Nested function outer variable ను గుర్తుంచుకుంటుంది | multiply(2)(3) |

---

## 🎯 Currying వాడటం వలన లాభాలు

✅ **Code reusability** → మళ్ళీ మళ్ళీ వాడుకోవచ్చు  
✅ **Function specialization** → ప్రత్యేక పనుల కోసం functions తయారు చేయవచ్చు  
✅ **Modularity** → కోడ్ neat & clean గా ఉంటుంది  
✅ **Functional programming** లో ఎక్కువగా వాడతారు  

---

## 🎤 Interview Questions (తెలుగులో)

**Q1. Currying అంటే ఏమిటి?**  
👉 ఒక function multiple arguments తీసుకునే విధానాన్ని, ప్రతి function ఒక్క argument మాత్రమే తీసుకునేలా మార్చటం.

**Q2. bind() currying మరియు closure currying తేడా ఏమిటి?**  
- bind() → ముందే కొన్ని arguments fix చేసి కొత్త function ఇస్తుంది.  
- Closure → inner function, outer function values గుర్తుంచుకుంటుంది.  

**Q3. Currying ఎందుకు వాడాలి?**  
👉 Reusable, modular, చిన్న చిన్న specialized functions తయారు చేయడానికి.

**Q4. Currying మరియు Partial Application ఒకటేనా?**  
👉 కాదు.  
- Currying → function ని ఎప్పుడూ nested unary (ఒక్కో argument) functions గా మార్చుతుంది.  
- Partial Application → arguments లో కొన్నింటిని fix చేస్తుంది కానీ అన్ని functions ఒక్కో argument ఉండాల్సిన అవసరం లేదు.  

**Q5. ఒక real-life ఉదాహరణ ఇవ్వండి.**  

```js
function log(type) {
  return function (message) {
    console.log(`[${type}] ${message}`);
  };
}

const errorLog = log("ERROR");
errorLog("Something went wrong");  
// Output: [ERROR] Something went wrong
```

---

## ✅ ముగింపు
Currying వలన code neat గా, re-usable గా, modular గా మారుతుంది.  
ప్రత్యేకమైన పనుల కోసం చిన్న చిన్న functions సులభంగా తయారు చేయవచ్చు.
