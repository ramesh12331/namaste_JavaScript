# 🔄 Callbacks in JavaScript – Good & Bad Parts

## 📌 Introduction
👉 A **Callback** is a function passed into another function as an argument, which is then executed later.  
Callbacks are very powerful, especially for **asynchronous programming** in JavaScript.  

But callbacks also come with **problems** like **Callback Hell** and **Inversion of Control**, which we need to understand before moving on to **Promises**.

---

## ✅ Good Part of Callbacks

- JavaScript is **synchronous** and **single-threaded** → it can only execute **one thing at a time**.  
- Callbacks allow us to handle **asynchronous tasks** like:
  - `setTimeout`
  - API requests
  - File reading
  - Database queries

### Example 1 – Simple Callback with `setTimeout`
```js
console.log("Namaste");
console.log("JavaScript");

setTimeout(function () {
  console.log("Season 2");
}, 2000);

console.log("End");

/*
Output:
Namaste
JavaScript
End
Season 2   <-- delayed execution using callback
*/
```

👉 Here, the `setTimeout` callback delays execution and runs later, enabling **async behavior**.

---

## ❌ Bad Part of Callbacks

### 1. Callback Hell (Pyramid of Doom)
- When we nest multiple callbacks due to dependencies between async functions.  
- Code becomes **hard to read, debug, and maintain**.

---

### Example 2 – e-Commerce Scenario

#### Step 1: Place Order
```js
const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  api.proceedToPayment();
});
```

👉 Simple dependency → first create order, then payment.

---

#### Step 2: Add More Dependencies
```js
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
```

👉 This nested structure = **Callback Hell (Pyramid of Doom)**

📌 Problem:
- Difficult to read
- Hard to debug
- Error handling becomes messy

---

### 2. Inversion of Control
- When using callbacks, we **lose control** because we depend on another function to call our callback correctly.  
- If the parent function:
  - Fails to call it
  - Calls it multiple times
  - Or never calls it  

👉 Our program may break.

#### Example:
```js
api.createOrder(cart, function () {
  api.proceedToPayment();
});
```

💡 Here, we are blindly trusting `createOrder` to call `proceedToPayment`.  
If it doesn’t → our program fails.  
This is **Inversion of Control**.

---

## 📊 Summary

| Aspect               | Description |
|----------------------|-------------|
| **Good Part**        | Enables async programming (setTimeout, API calls) |
| **Callback Hell**    | Nested callbacks → hard to maintain |
| **Inversion of Control** | Losing control of program flow, depending on external code |
| **Next Step**        | Promises solve these issues |

---

## 🎯 Interview Questions & Answers

**Q1. What is a callback in JavaScript?**  
👉 A callback is a function passed as an argument to another function, to be executed later.

---

**Q2. Why are callbacks important?**  
👉 They allow asynchronous behavior in JS (timers, API calls, event handling).

---

**Q3. What is callback hell?**  
👉 A situation where callbacks are nested inside callbacks (due to dependencies), making code unreadable and unmaintainable. Also known as **Pyramid of Doom**.

---

**Q4. What is Inversion of Control in callbacks?**  
👉 When we pass a function as a callback, we lose control because we depend on the parent function to execute it correctly. If it doesn’t, our logic may break.

---

**Q5. How do we solve Callback Hell and Inversion of Control?**  
👉 By using **Promises** and later **async/await** for cleaner async code.

---

## 💡 Conclusion
- Callbacks are the **foundation of async programming** in JS.  
- But they introduce problems like **Callback Hell** and **Inversion of Control**.  
- To overcome these, we use **Promises** (next topic). 🚀
