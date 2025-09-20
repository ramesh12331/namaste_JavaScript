# 🚀 Throttling in JavaScript

Throttling is a **performance optimization technique** in JavaScript.  
It ensures that a function executes **at most once in a specified time interval**, even if it is triggered multiple times.  

---

## 📌 What is Throttling?

- When events like `scroll`, `resize`, or `mousemove` fire continuously, they can **slow down performance**.  
- **Throttling** makes sure the function runs **only once in a given interval (e.g., every 300ms)**.  
- Prevents performance issues in **large-scale applications**.

---

## 📌 Syntax (Throttle Function)

```js
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
```

---

## 📌 Example: Throttling Scroll Event

```js
let count = 0;

const expensiveFunction = () => {
  console.log("API Call...", count++);
};

// Apply throttle
const betterFunction = throttle(expensiveFunction, 1000);

// Using on scroll event
window.addEventListener("scroll", betterFunction);
```

👉 In this example:  
- No matter how many times you scroll, `expensiveFunction` will run **once every 1 second (1000ms)**.  

---

## 📌 Polyfill for Throttle

```js
Function.prototype.myThrottle = function (delay) {
  let lastCall = 0;
  let func = this;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      return func.apply(this, args);
    }
  };
};

// Usage
const logMessage = function () {
  console.log("Throttled Function Executed");
};

const throttledFn = logMessage.myThrottle(2000);
window.addEventListener("resize", throttledFn);
```

---

## 📌 Step by Step Approach to Throttling

1. Keep track of the **last time function was executed** (`lastCall`).  
2. On every event trigger, check if enough time has passed (`now - lastCall >= delay`).  
3. If yes → execute the function.  
4. If no → ignore the call until delay time passes.  

---

## 📌 Debouncing vs Throttling

| Feature              | Debouncing | Throttling |
|-----------------------|------------|------------|
| Definition           | Executes function **after a delay** from the last event trigger | Executes function at **regular intervals** |
| Use Case             | Search box (reduce API calls) | Scroll/Resize events |
| Implementation Tool  | `setTimeout` + `clearTimeout` | Timestamp check |
| Example              | Auto-suggestions | Infinite scrolling |

---

## 📌 Real-Life Use Cases of Throttling

1. **Scroll Event** → Prevents multiple API calls while scrolling.  
2. **Window Resize** → Runs calculation only at intervals.  
3. **Mouse Move / Drag Events** → Improves performance in animations.  
4. **API Rate Limiting** → Controls request frequency.  

---

## 📊 Summary Table

| Concept   | Explanation |
|-----------|-------------|
| Throttling | Function runs at most once in a given interval |
| Purpose   | Improve performance by reducing function calls |
| Tools Used | `timestamp` or `setTimeout` |
| Best For  | Scroll, resize, mouse events, API calls |

---

## 🎯 Interview Questions & Answers

### Q1. What is Throttling in JavaScript?
👉 Throttling ensures a function executes only once in a given interval, no matter how many times it is triggered.

---

### Q2. Difference between Debouncing and Throttling?
👉 **Debouncing** → Executes after a delay from the last trigger.  
👉 **Throttling** → Executes at regular intervals during events.

---

### Q3. How do you implement Throttling?
👉 By storing the last execution time (`lastCall`) and comparing it with the current time.

---

### Q4. Can you write a Polyfill for throttle?
👉 Yes, using `timestamp` logic (see code above).

---

### Q5. Where have you used Throttling in real projects?
👉 Scroll handling, resize optimization, API rate-limiting, and animations.

---

✅ With this, you now have a **complete understanding of Throttling in JavaScript**, including syntax, polyfill, real-life use cases, and interview preparation 🚀
