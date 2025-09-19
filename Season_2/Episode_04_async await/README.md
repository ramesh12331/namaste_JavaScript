# ⚡ Async & Await in JavaScript

## 📌 Topics Covered

- What is `async`?
- What is `await`?
- How async/await works behind the scenes
- Example usage
- Error Handling
- Async/Await vs Promise `.then/.catch`
- Interview Q&A

---

## 🚀 What is `async`?

- `async` is a keyword used before a function to make it asynchronous.
- An `async` function **always returns a Promise**, even if you return
  a normal value.

### Example

```js
async function getData() {
  return "Hello JavaScript";
}

const dataPromise = getData();
console.log(dataPromise); // Promise {<fulfilled>: "Hello JavaScript"}

// Extract result
dataPromise.then((res) => console.log(res)); // Hello JavaScript
```

👉 If you return a normal value, it gets wrapped in a Promise
automatically.

---

## ⏳ What is `await`?

- `await` is used inside an async function.
- It pauses execution until a Promise is resolved/rejected.

### Example

```js
const p = new Promise((resolve) => {
  setTimeout(() => resolve("✅ Promise resolved"), 2000);
});

async function handlePromise() {
  console.log("Start");
  const result = await p; // waits here until resolved
  console.log(result);
  console.log("End");
}

handlePromise();
// Output:
// Start
// (after 2 sec) ✅ Promise resolved
// End
```

👉 Unlike .then(), code after await waits until the promise is resolved.

---

## ⚙️ How Async/Await Works Behind the Scenes

JavaScript is single-threaded and does not block execution.

When await is used:

- The function execution pauses.
- JS engine suspends the async function and continues with other
  tasks.
- Once the promise resolves, the function resumes from where it left
  off.

So JS is not actually waiting, it just defers execution of the async
function until the promise is ready.

---

## 📝 Real World Example

```js
async function fetchUser() {
  const response = await fetch("https://api.github.com/users/octocat");
  const data = await response.json();
  console.log(data);
}

fetchUser();
```

👉 First fetch() returns a Promise, then .json() also returns a
Promise.\
Both are handled easily with await.

---

## ⚠️ Error Handling with Async/Await

Use try...catch instead of .catch().

```js
async function fetchUser() {
  try {
    const response = await fetch("https://invalid-url");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("❌ Error:", err.message);
  }
}

fetchUser();
```

👉 Alternatively:

```js
fetchUser().catch((err) => console.log("❌ Error:", err.message));
```

---

## 🔄 Async/Await vs Promise .then/.catch

- async/await is syntactic sugar for Promises.
- Behind the scenes, it's just using Promises.

### ✅ Pros of async/await:

- More readable
- Avoids callback hell and long chaining

### ❌ Cons:

- Still needs try...catch for error handling
- Sequential await may cause performance delays (if tasks can run in
  parallel)

---

## 📌 Summary

- `async` → makes a function return a Promise.
- `await` → pauses function execution until Promise is
  resolved/rejected.
- Cleaner & more readable than .then/.catch.
- Best used for writing synchronous-looking async code.

---

## 🎯 Interview Questions & Answers

**Q1. What is async in JavaScript?**\
👉 async is a keyword that makes a function asynchronous. It always
returns a Promise.

**Q2. What is await in JavaScript?**\
👉 await is used inside async functions to pause execution until a
Promise is resolved.

**Q3. Difference between async function and normal function?**\
👉 Normal function returns value directly, async function always returns
a Promise.

**Q4. How async/await works internally?**\
👉 Behind the scenes, async/await is built on Promises. The function
execution is paused and resumed when the Promise resolves.

**Q5. How do you handle errors in async/await?**\
👉 By using try...catch block or .catch() on the async function call.

**Q6. Difference between async/await and .then/.catch?**\
👉 Both handle Promises. .then/.catch uses chaining, async/await makes
code look synchronous and is easier to read.

**Q7. Can you use await without async?**\
👉 ❌ No, await can only be used inside an async function.

---

✨ Async/Await makes asynchronous code simple, readable, and structured.
