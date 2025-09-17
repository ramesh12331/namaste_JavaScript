# ⚡ Creating a Promise, Chaining & Error Handling in JavaScript

## 📌 Topics Covered
- What is a Promise?
- Creating a Promise
- Promise Chaining
- Error Handling
- Real-world Example
- Interview Q&A

---

## 🚀 What is a Promise?
- A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.
- States of a Promise:
  - **Pending** → initial state
  - **Fulfilled** → operation completed successfully
  - **Rejected** → operation failed

---

## 🛠 Creating a Promise
```js
const cart = ["shoes", "pants", "kurta"];

function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!cart.length) {
      reject("❌ Cart is empty");
    }
    const orderId = "12345";
    resolve(orderId);
  });
}

createOrder(cart)
  .then((orderId) => console.log("Order ID:", orderId))
  .catch((err) => console.log("Error:", err));
```

---

## 🔗 Promise Chaining
- We can chain multiple `.then()` calls to perform dependent tasks.

```js
function proceedToPayment(orderId) {
  return new Promise((resolve) => {
    resolve("Payment successful for Order " + orderId);
  });
}

createOrder(cart)
  .then((orderId) => {
    console.log("Order Created:", orderId);
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
```

👉 Each `.then()` returns a **new Promise**, allowing chaining.

---

## ⚠️ Error Handling in Promises
- Errors can occur at any stage in the chain.
- Use `.catch()` at the end to handle them.

```js
createOrder([]) // empty cart
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => console.log(paymentInfo))
  .catch((err) => console.log("❌ Error:", err));
```

👉 Only one `.catch()` is needed at the end of the chain.

---

## 📝 Real World Example
```js
function validateCart(cart) {
  return new Promise((resolve, reject) => {
    if (cart.includes("fraud")) reject("Invalid cart items");
    else resolve("Cart validated");
  });
}

createOrder(cart)
  .then((orderId) => validateCart(cart))
  .then((res) => console.log(res))
  .then(() => proceedToPayment("12345"))
  .then((paymentInfo) => console.log(paymentInfo))
  .catch((err) => console.log("❌ Error:", err));
```

---

## 📌 Summary
- Promise = Placeholder for future value (async result).
- `.then()` → Handles success.
- `.catch()` → Handles errors.
- Promise Chaining → Allows sequencing async operations.
- Always attach `.catch()` at the end.

---

## 🎯 Interview Questions & Answers

**Q1. What is a Promise in JavaScript?**  
👉 A Promise is an object representing the result of an asynchronous operation, which may be pending, fulfilled, or rejected.

**Q2. What are the states of a Promise?**  
👉 Pending, Fulfilled, Rejected.

**Q3. How do you create a Promise?**  
👉 Using `new Promise((resolve, reject) => { ... })`.

**Q4. What is Promise chaining?**  
👉 Executing multiple asynchronous operations in sequence by returning a Promise in `.then()`.

**Q5. How do you handle errors in Promises?**  
👉 Using `.catch()` at the end of the chain.

**Q6. Difference between callback and Promise?**  
👉 Callbacks may lead to "callback hell". Promises provide a cleaner, structured way to handle async operations.

**Q7. Can we use multiple `.catch()` in a chain?**  
👉 Yes, but usually one `.catch()` at the end is enough to catch all errors.

---

✨ Promises make async code more **readable, maintainable, and less error-prone** compared to callbacks.
