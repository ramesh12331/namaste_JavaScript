# ⏳ Debouncing vs Throttling in JavaScript

Debouncing and Throttling are **performance optimization techniques** in JavaScript. They help control how often a function executes during high-frequency events (like scroll, resize, input, or mouse movement).

---

## 📌 What is Debouncing?

* Debouncing ensures that a function executes **only after a certain delay** from the last event trigger.
* Commonly used for **search bars, form validations, and resize events**.

### Syntax (Debounce)

```js
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}
```

---

## 📌 What is Throttling?

* Throttling ensures a function executes at **regular intervals**, regardless of how many times the event is triggered.
* Commonly used for **scroll events, mouse move, and API rate limiting**.

### Syntax (Throttle)

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

## 📊 Difference Between Debouncing and Throttling

| Feature    | Debouncing                                             | Throttling                       |
| ---------- | ------------------------------------------------------ | -------------------------------- |
| Definition | Executes after a delay from the **last event trigger** | Executes at **fixed intervals**  |
| Use Case   | Search bar, form validations                           | Scroll, resize, mouse events     |
| Tools Used | `setTimeout`, `clearTimeout`                           | Timestamp or `setTimeout`        |
| Example    | Waits for user to stop typing                          | Executes while user is scrolling |

---

## 📌 Real-Life Examples

### Example 1: Search Bar (E-commerce Site)

* **Debouncing** → API request is sent **only after user stops typing** for 300ms.
* **Throttling** → API request is sent **every 500ms** while user is typing.

---

### Example 2: Resizing Window

* **Debouncing** → Executes resize logic **after user finishes resizing**.
* **Throttling** → Executes resize logic at intervals (e.g., every 200ms) during resize.

---

### Example 3: Shooting Game

* **Debouncing** → Gun fires **once after delay** when button is pressed repeatedly.
* **Throttling** → Gun fires **at fixed intervals** (e.g., every 500ms) as long as button is pressed.

---

## 📊 Visualization

### Debouncing Diagram

```
Event:   |----|----|----|        |----|
Delay:                     [300ms]
Execute:                          ✅
```

👉 Executes **only once** after last event.

### Throttling Diagram

```
Event:   |----|----|----|----|----|----|
Execute: ✅         ✅         ✅
```

👉 Executes at **regular intervals**.

---

## ⚡ Web Performance Optimization

* **Debouncing** → Prevents unnecessary API calls (search bar, input validation).
* **Throttling** → Prevents heavy computations (scroll, resize, animations).

Both improve **user experience and application speed**.

---

## ❓ Interview Questions & Answers

### Q1. What is Debouncing?

👉 Debouncing ensures a function executes only after a delay from the last event trigger.

### Q2. What is Throttling?

👉 Throttling ensures a function executes at most once in a fixed interval.

### Q3. Difference between Debouncing and Throttling?

👉 Debouncing waits until the user stops triggering events. Throttling executes function at fixed intervals.

### Q4. Which is better, Debouncing or Throttling?

👉 It depends on use case:

* **Debouncing** → Best for reducing API calls (search box).
* **Throttling** → Best for continuous events (scroll, resize).

### Q5. Can you write Polyfills for Debounce and Throttle?

👉 Yes, see code in syntax sections above.

---

## ✅ Summary Table

| Concept  | Debouncing                   | Throttling                 |
| -------- | ---------------------------- | -------------------------- |
| Executes | After delay (last event)     | At fixed intervals         |
| Best Use | Search input, validation     | Scroll, resize, animations |
| Tool     | `setTimeout`, `clearTimeout` | Timestamp / `setTimeout`   |

---

🚀 With this, you now have a complete understanding of **Debouncing vs Throttling**, their syntax, examples, real-world use cases, diagrams, and interview Q\&A!
