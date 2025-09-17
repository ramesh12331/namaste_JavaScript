# ⚡ Promises in JavaScript

## 📌 What is a Promise?
A **Promise** is an object in JavaScript used to handle asynchronous operations.  
It represents a value that may be available now, later, or never.

👉 Think of it as a **container for a future value**.

---

## 🚀 Why Promises?
Before Promises, we used **callbacks**.  
But callbacks caused two major issues:  

1. **Inversion of Control** → we pass our function and hope it gets called correctly.  
2. **Callback Hell (Pyramid of Doom)** → nested callbacks make code hard to read and maintain.  

Promises solve both problems.

---

## 🖥️ Example 1 – Without Promise (Callback Way)
```js
// An array representing items added to the shopping cart
const cart = ["shoes", "pants", "kurta"];

// Using a callback function to handle async operation
createOrder(cart, function (orderId) {
  // Once the order is successfully created (async completed),
  // the callback function runs and receives "orderId" as an argument.
  
  // Then we pass that orderId into the next async function:
  proceedToPayment(orderId);
});

```

❌ Problem: We depend on `createOrder` to call our callback correctly (Inversion of Control).  

---

## 🖥️ Example 2 – With Promise
```js
const cart = ["shoes", "pants", "kurta"];

// createOrder returns a Promise
const promiseRef = createOrder(cart);

promiseRef.then(function (orderId) {
  proceedToPayment(orderId);
});
```

✔ With Promises, we **attach** a function instead of passing it.  
✔ Guarantees: callback will run **only once** when data is ready.  

---

## 🖥️ Example 3 – Real Promise (fetch API)
```js
const URL = "https://api.github.com/users/octocat";

const user = fetch(URL); // fetch returns a Promise
console.log(user); // Promise { <pending> }

user.then(function (data) {
  console.log(data); // fulfilled response
});
```

### States of a Promise
1. **pending** → initial state  
2. **fulfilled** → success (data available)  
3. **rejected** → failed  

💡 Promise objects are **immutable** → once resolved/rejected, they can’t change.

---

## 🖥️ Example 4 – Callback Hell ❌
```js
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function (balance) {
      updateWalletBalance(balance);
    });
  });
});
```

❌ Hard to read, ugly structure → "Pyramid of Doom".

---

## 🖥️ Example 5 – Promise Chaining ✔
```js
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (balance) {
    return updateWalletBalance(balance);
  });
```

✔ Clean  
✔ Readable  
✔ Each `.then()` returns data for the next one  

---

## ✅ Common Pitfall
```js
// Wrong ❌ (forgot to return)
createOrder(cart)
  .then(function (orderId) {
    proceedToPayment(orderId); // missing return
  })
  .then(function (paymentInfo) {
    showOrderSummary(paymentInfo);
  });

// Correct ✔
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((balance) => updateWalletBalance(balance));
```

---

## 📌 Summary
- Promise = **placeholder for future value**.  
- Fixes **Inversion of Control** & **Callback Hell**.  
- States: `pending`, `fulfilled`, `rejected`.  
- Methods: `.then()`, `.catch()`, `.finally()`.  
- Promises are **immutable** and execute callbacks **once only**.  

---

## 🎯 Interview Q&A

**Q1. What is a Promise?**  
👉 An object that represents the eventual completion or failure of an async operation. A container for a future value.  

**Q2. Why do we need Promises?**  
👉 To avoid Callback Hell and Inversion of Control.  

**Q3. What are the states of a Promise?**  
👉 `pending`, `fulfilled`, `rejected`.  

**Q4. Difference between callbacks and promises?**  
👉 Callbacks are passed into functions (less control).  
👉 Promises let us attach callbacks (`.then`) giving us more control & readability.  

**Q5. What is Promise chaining?**  
👉 Technique to execute async operations sequentially by returning promises in `.then()`.  

**Q6. Are Promises mutable?**  
👉 No, once resolved/rejected, they cannot change.  

**Q7. What is Callback Hell?**  
👉 Nested callbacks leading to unreadable "Pyramid of Doom" structure.  

**Q8. How do Promises solve Callback Hell?**  
👉 By chaining `.then()` methods instead of nesting functions.  

---

✨ Next step → Learn **Async/Await** (syntactic sugar over Promises).
