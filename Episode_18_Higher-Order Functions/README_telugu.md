# ⚡ జావాస్క్రిప్ట్ లో Higher-Order Functions (HOF)

## 📌 Higher-Order Function అంటే ఏమిటి?

👉 Higher-Order Function (HOF) అంటే:

- మరో function ని **argument** గా తీసుకునే function  
- లేదా  
- మరో function ని **return** చేసే function  

👉 సింపుల్‌గా చెప్పాలంటే: **Functions తో పని చేసే functions**.

---

## 🖼️ డయాగ్రామ్

```
        ┌───────────────┐
        │ Higher Order  │
        │   Function    │
        └───────┬───────┘
                │
                │ (function ను argument గా తీసుకుంటుంది)
                ▼
        ┌───────────────┐
        │   Callback    │
        │   Function    │
        └───────────────┘
```

---

## ✅ Example 1 – Simple HOF

```js
function sayHi() {
  console.log("Hi");
}

function greet(fn) {
  fn(); // మరో function ని కాల్ చేస్తుంది
}

greet(sayHi); 
// Output: Hi
```

- `greet` → Higher Order Function (ఇంకో function ని తీసుకుంది)  
- `sayHi` → Callback Function (పాస్ చేసిన function)  

---

## ✅ Example 2 – Without HOF (Problem)

```js
const radius = [1, 2, 3];

// Area
function calculateArea(radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
}

console.log(calculateArea(radius)); 
// [3.14, 12.56, 28.27]
```

👉 సమస్య: ప్రతి calculation కోసం కొత్త loop రాయాలి → ఇది **DRY principle (Don’t Repeat Yourself)** కి విరుద్ధం.

---

## ✅ Example 3 – With HOF (Better Way)

```js
const radius = [1, 2, 3];

// Area logic
const area = r => Math.PI * r * r;

// Circumference logic
const circumference = r => 2 * Math.PI * r;

// Higher Order Function
function calculate(arr, operation) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(operation(arr[i]));
  }
  return output;
}

console.log(calculate(radius, area));         
// [3.14, 12.56, 28.27]

console.log(calculate(radius, circumference)); 
// [6.28, 12.56, 18.85]
```

👉 ఇక్కడ `calculate` ఒక **HOF**, ఎందుకంటే ఇది `operation` అనే function ని argument గా తీసుకుంది.

---

## ✅ Example 4 – Polyfill of map()

👉 మనమే `map()` లాగా పనిచేసే function రాయవచ్చు:

```js
Array.prototype.myMap = function(operation) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(operation(this[i]));
  }
  return output;
};

const numbers = [1, 2, 3, 4];
const square = n => n * n;

console.log(numbers.myMap(square));
// [1, 4, 9, 16]
```

---

## 📌 Summary

- **HOF** = function, ఇది మరొక function ని తీసుకుంటుంది లేదా return చేస్తుంది.  
- **Examples** → `map()`, `filter()`, `reduce()`, `forEach()`  
- **Callback** → HOF కి ఇచ్చే function.  
- **Usefulness** → కోడ్ reusable, clean, మరియు functional programming లో బాగా ఉపయోగపడుతుంది.  

---

## 🎯 ఇంటర్వ్యూ Questions & Answers

**Q1. Higher-Order Function అంటే ఏమిటి?**  
👉 ఇంకో function ని argument గా తీసుకునే లేదా return చేసే function.

**Q2. JavaScript లో built-in HOF examples చెప్పండి.**  
👉 `map()`, `filter()`, `reduce()`, `forEach()`.

**Q3. HOF మరియు Callback మధ్య తేడా?**  
👉 HOF ఇంకో function ని argument గా తీసుకుంటుంది.  
👉 Callback → ఆ function లోపల execute అవుతుంది.

**Q4. ఎందుకు HOF ఉపయోగిస్తారు?**  
👉 Reusable code, DRY principle, clean మరియు readable code కోసం.

**Q5. map() కి polyfill రాయండి.**  

```js
Array.prototype.myMap = function(cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
};
```

---

## ✨ Conclusion
HOF లతో కోడ్ **సింపుల్, శక్తివంతంగా మరియు maintainable** అవుతుంది.
