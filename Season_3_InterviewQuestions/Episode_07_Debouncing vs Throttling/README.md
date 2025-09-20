
# ⚡ Debouncing vs Throttling in JavaScript

Debouncing and Throttling are **performance optimization techniques** used to control how often a function is executed during high-frequency events like `scroll`, `resize`, or `input`.

---

## 📌 What is Debouncing?

- Debouncing ensures that a function is executed **only after a specified delay** from the last time the event was triggered.
- Useful for **search boxes, input fields, and resize events**.

### ✅ Syntax (Debounce)
```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

---

## 📌 What is Throttling?

- Throttling ensures a function executes **at most once within a specified time interval**, even if events keep firing.
- Useful for **scroll, resize, mousemove, and API rate limiting**.

### ✅ Syntax (Throttle)
```js
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
```

---

## 📌 Difference Between Debounce and Throttle

| Feature               | Debouncing | Throttling |
|------------------------|------------|------------|
| Execution             | After delay from last event | At regular intervals |
| Use Cases             | Search input, resize stop   | Scroll, resize, drag |
| Implementation Tool   | `setTimeout` + `clearTimeout` | Timestamp or `setTimeout` |
| Example               | API search optimization | Infinite scroll loading |

---

## 📌 Real-Life Examples

### 🔎 Example 1: Search Bar in E-commerce
- **Debouncing** → Prevents API calls for each keystroke, only executes when user stops typing.  
- **Throttling** → Limits API calls if user types continuously.

### 🖥️ Example 2: Window Resize
- **Debouncing** → Executes once after user finishes resizing.  
- **Throttling** → Executes at intervals while resizing.

### 🎮 Example 3: Shooting Game
- **Debouncing** → Gun fires only after a pause in pressing the trigger.  
- **Throttling** → Gun fires at most once every 500ms, even if button is held.

---

## 📊 Diagram

Debouncing vs Throttling Timeline:

```
Events:   |****|****|****|****|
Debounce: |--------------X    |
Throttle: |----X----X----X---|
```

---

## 📊 Summary Table

| Concept      | Debouncing | Throttling |
|--------------|------------|------------|
| Definition   | Runs after a delay from last trigger | Runs once per interval |
| Best For     | Search, Resize | Scroll, Resize, Games |
| Advantage    | Reduces redundant calls | Maintains steady performance |

---

## 🎯 Interview Questions & Answers

### Q1. What is Debouncing in JavaScript?
👉 Debouncing is delaying the execution of a function until after the user stops triggering events.

### Q2. What is Throttling in JavaScript?
👉 Throttling ensures a function executes only once in a specified time interval.

### Q3. Difference between Debouncing and Throttling?
👉 Debounce → Executes after inactivity.  
👉 Throttle → Executes at regular intervals.

### Q4. Which is better: Debouncing or Throttling?
👉 Depends on the use case:  
- Use **Debounce** for input fields (search, resize).  
- Use **Throttle** for continuous events (scroll, mousemove, games).

### Q5. Have you implemented these in real projects?
👉 Yes, for search optimization, infinite scrolling, and window resize handling.

---

✅ With this, you have a **complete guide to Debouncing vs Throttling in JavaScript**, including syntax, examples, diagrams, and interview prep 🚀
