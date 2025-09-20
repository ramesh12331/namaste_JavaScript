# ⏳ Debouncing in JavaScript

Debouncing is a programming technique used to improve the **performance of web applications** by limiting how often a function gets executed.  

When an event keeps firing rapidly (like `scroll`, `resize`, `keypress`, `input`), debouncing ensures that the function runs **only after a certain delay** from the last event trigger.

---

## 📌 Why Debouncing?

- Prevents unnecessary function calls on frequent events.  
- Improves performance in **large-scale applications**.  
- Commonly asked in **JavaScript interviews** (e.g., Flipkart, Amazon).  

---

## 📌 Real-Life Scenarios

1. **Search Box Auto-Suggestions**  
   - Prevents sending API requests on every keystroke.  
   - API is called only after the user stops typing for a few ms.  

2. **Window Resize Event**  
   - Avoids continuous execution of expensive calculations.  

3. **Button Click**  
   - Prevents accidental multiple clicks (e.g., form submissions).  

---

## 📌 Syntax

```js
function debounce(func, delay) {
  return function (...args) {
    let timer;
    clearTimeout(timer); // Clear any previous timer
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
```

---

## 📌 Example Code

```js
let count = 0;

// Function to be debounced
const getData = () => {
  console.log("Fetching Data...", count++);
};

// Debounce implementation
const debounce = function (fn, d) {
  let timer;  // store timer outside so it persists
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, d);
  };
};

// Using debounce
const betterFunction = debounce(getData, 300);

// Suppose this is called on input event
document.getElementById("search").addEventListener("keyup", betterFunction);
```

---

## 📊 Summary Table

| Concept        | Meaning                                                                 |
|----------------|-------------------------------------------------------------------------|
| Debouncing     | Ensures function runs **after delay** from last event trigger           |
| Use Cases      | Search box, resize events, button clicks, API calls                    |
| Advantage      | Prevents unnecessary calls, saves resources, improves UX               |
| Key Idea       | Delay execution until user stops triggering the event                  |

---

## 🎯 Interview Questions & Answers

### Q1. What is Debouncing in JavaScript?  
👉 Debouncing is a technique to **limit how often a function executes** by adding a delay. It ensures the function runs only after a pause in events.  

---

### Q2. Difference between Throttling and Debouncing?  
- **Debouncing** → Executes after a delay from the **last event**.  
- **Throttling** → Executes function at **regular intervals**, no matter how many times events fire.  

---

### Q3. Can you write a Polyfill for `debounce()`?  
👉 Yes, here’s a simple version:  

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

### Q4. Where have you used Debouncing in real projects?  
👉 Commonly in:  
- Search input (reducing API calls).  
- Window resize handling.  
- Auto-save features in text editors.  

---

### Q5. Was Debouncing asked in an interview?  
👉 Yes, **Flipkart** asked to implement a debounce function during an interview.  

---

✅ With this, you now fully understand **Debouncing, its syntax, real-life uses, polyfill, and interview Q&A** 🚀
