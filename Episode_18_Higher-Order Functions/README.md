# ⚡ Higher-Order Functions in JavaScript (HOF)

## 📌 What is a Higher-Order Function?

A **Higher-Order Function (HOF)** is: - A function that takes another
function as input (**callback**)\
**OR**\
- A function that returns another function

👉 In short: Functions that work with functions.

------------------------------------------------------------------------

## 🖼️ Visual Diagram

            ┌───────────────┐
            │ Higher Order  │
            │   Function    │
            └───────┬───────┘
                    │
                    │ (takes function as argument)
                    ▼
            ┌───────────────┐
            │   Callback    │
            │   Function    │
            └───────────────┘

------------------------------------------------------------------------

## ✅ Example 1 -- Simple HOF

``` js
function sayHi() {
  console.log("Hi");
}

function greet(fn) {
  fn(); // calling another function
}

greet(sayHi); 
// Output: Hi
```

-   `greet` → Higher Order Function (takes another function).\
-   `sayHi` → Callback Function (passed into greet).

------------------------------------------------------------------------

## ✅ Example 2 -- Without HOF (Problem)

``` js
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

// Circumference
function calculateCircumference(radius) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
}

console.log(calculateCircumference(radius)); 
// [6.28, 12.56, 18.85]
```

❌ **Problem:** Same loop repeated (**not DRY**).

------------------------------------------------------------------------

## ✅ Example 3 -- With HOF (Better Way)

``` js
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

------------------------------------------------------------------------

## 🖼️ Flowchart of Example 3

       radius = [1,2,3]

            ┌───────────────┐
            │   calculate   │  (HOF)
            └───────┬───────┘
                    │ passes function
                    ▼
          ┌─────────────────────┐
          │ area / circumference│ (Callback)
          └─────────────────────┘
                    │
                    ▼
         Final Result: [output array]

------------------------------------------------------------------------

## ✅ Example 4 -- Polyfill of map()

👉 Making our own `map()` using HOF.

``` js
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

------------------------------------------------------------------------

## 📌 Summary

-   **HOF** = Function that takes/returns another function.\
-   Examples: **map(), filter(), reduce()**.\
-   Helps write **reusable and clean code**.\
-   Removes duplication (**DRY principle**).

------------------------------------------------------------------------

## 🎯 Interview Questions & Answers

**Q1. What is a Higher-Order Function?**\
👉 A function that takes another function as an argument or returns a
function.

**Q2. Give some built-in HOF examples in JavaScript.**\
👉 `map()`, `filter()`, `reduce()`, `forEach()`.

**Q3. What is the difference between HOF and Callback?**\
👉 HOF receives a callback function as an input. The callback is
executed inside the HOF.

**Q4. Why are Higher-Order Functions useful?**\
👉 They make code reusable, cleaner, and support functional programming.

**Q5. Write a polyfill for map().**\
👉

``` js
Array.prototype.myMap = function(cb) { 
  let res = []; 
  for(let i = 0; i < this.length; i++) { 
    res.push(cb(this[i])); 
  } 
  return res; 
}
```

✨ With Higher-Order Functions → you write less code, avoid repetition,
and make your code more powerful.
