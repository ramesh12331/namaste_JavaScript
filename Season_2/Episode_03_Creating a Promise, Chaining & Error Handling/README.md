# ⚡ Creating a Promise, Chaining & Error Handling in JavaScript

## 📌 What is a Promise?
A **Promise** in JavaScript is an object that represents the eventual completion (✅ success) or failure (❌ error) of an asynchronous operation.

👉 Think of it like: *"I promise to give you the result in the future."*

---

## 🚀 Creating a Promise
JavaScript provides a `Promise` constructor.  
It takes a function with **resolve** and **reject** parameters:

- `resolve(value)` → marks the promise as fulfilled (success).
- `reject(error)` → marks the promise as rejected (failure).

### Example
```js
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      reject(new Error("Cart is not Valid"));
    }

    const orderId = "12345"; // Mock orderId from DB
    resolve(orderId);
  });
}

const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);

console.log(promise); // Promise {<pending>}

promise.then(function (orderId) {
  console.log("Order created with ID:", orderId);
});
```

👉 Initially, the promise is in `pending` state.  
When resolved, `.then()` callback executes.

---

## ⚠️ Error Handling with `.catch()`
If something goes wrong, we can catch errors using `.catch()`.

### Example
```js
const cart = [];

createOrder(cart)
  .then(function (orderId) {
    console.log("Order ID:", orderId);
    return proceedToPayment(orderId);
  })
  .catch(function (err) {
    console.log("Error:", err.message);
  });
```

---

## 🔗 Promise Chaining
We can run multiple async tasks in sequence.  
Whatever is **returned** from one `.then()` becomes input for the next `.then()`.

### Example
```js
createOrder(cart)
  .then(function (orderId) {
    console.log("Order ID:", orderId);
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("Payment Info:", paymentInfo);
  })
  .catch(function (err) {
    console.log("Error:", err.message);
  });

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful for Order: " + orderId);
  });
}
```

✅ Clean & readable.  
❌ If any promise fails, control goes directly to `.catch()`.

---

## 🎯 Multiple `.catch()` Handling
You can handle errors at different levels:

```js
createOrder(cart)
  .then(function (orderId) {
    console.log("Order ID:", orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log("Validation Failed:", err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log("Payment Failed:", err.message);
  });
```

---

## 📊 Promise States
1. **Pending** → Initial state.
2. **Fulfilled** → Success (`resolve` called).
3. **Rejected** → Failure (`reject` called).

---

## 📌 Summary
- `new Promise((resolve, reject) => {})` is used to create promises.
- `.then()` → handles success.
- `.catch()` → handles failure.
- **Promise Chaining** → execute multiple async operations in sequence.
- If any promise fails in chain → goes to `.catch()`.
- Promises help avoid **Callback Hell** and make async code more readable.

---

## 🎯 Interview Q&A

**Q1. What is a Promise?**  
👉 A JavaScript object representing the eventual completion (success) or failure of an async operation.  

**Q2. How do you create a Promise?**  
👉 By using `new Promise((resolve, reject) => { ... })`.  

**Q3. What are the states of a Promise?**  
👉 `pending`, `fulfilled`, `rejected`.  

**Q4. Difference between resolve and reject?**  
👉 `resolve(value)` → success; `reject(error)` → failure.  

**Q5. What is Promise Chaining?**  
👉 Technique where each `.then()` returns data/promise for the next `.then()`.  

**Q6. How to handle errors in promises?**  
👉 Using `.catch()` (for rejection) or multiple `.catch()` for fine-grained control.  

**Q7. What happens if you forget to `return` in chaining?**  
👉 Next `.then()` won’t receive expected data, breaking the chain.  

---

✨ Next Step → Learn **`async/await`**, which makes promise handling even cleaner.
