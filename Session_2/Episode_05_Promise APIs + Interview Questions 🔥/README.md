# ⚡ Promise APIs in JavaScript

JavaScript provides multiple Promise APIs to handle asynchronous tasks more effectively.  
The 4 most commonly used are:

- `Promise.all()`
- `Promise.allSettled()`
- `Promise.race()`
- `Promise.any()`

---

## 📌 1. Promise.all()
- Runs multiple promises in parallel.
- Returns results only when all succeed.
- If any promise rejects → entire result fails.

### ✅ Example:
```js
const p1 = new Promise(res => setTimeout(() => res("P1 ✅"), 3000));
const p2 = new Promise(res => setTimeout(() => res("P2 ✅"), 1000));
const p3 = new Promise(res => setTimeout(() => res("P3 ✅"), 2000));

Promise.all([p1, p2, p3])
  .then(results => console.log(results)) // ["P1 ✅","P2 ✅","P3 ✅"]
  .catch(err => console.error(err));
```

### ❌ If one fails:
```js
Promise.all([p1, Promise.reject("P2 ❌"), p3])
  .then(console.log)
  .catch(console.error); // "P2 ❌"
```
👉 **Use case:** Parallel API calls where all results are required.

---

## 📌 2. Promise.allSettled()
- Waits for all promises to settle (fulfilled or rejected).
- Returns array with each promise’s status + value/reason.

### ✅ Example:
```js
const p1 = Promise.resolve("P1 ✅");
const p2 = Promise.reject("P2 ❌");
const p3 = Promise.resolve("P3 ✅");

Promise.allSettled([p1, p2, p3]).then(console.log);
```

👉 Output:
```js
[
  { status: "fulfilled", value: "P1 ✅" },
  { status: "rejected", reason: "P2 ❌" },
  { status: "fulfilled", value: "P3 ✅" }
]
```
👉 **Use case:** Collect results even if some fail.

---

## 📌 3. Promise.race()
- Returns the result of the first promise to settle (success or failure).
- Other results are ignored.

### ✅ Example:
```js
const p1 = new Promise(res => setTimeout(() => res("P1 ✅"), 3000));
const p2 = new Promise(res => setTimeout(() => res("P2 ✅"), 1000));
const p3 = new Promise((_, rej) => setTimeout(() => rej("P3 ❌"), 2000));

Promise.race([p1, p2, p3])
  .then(console.log)   // "P2 ✅"
  .catch(console.error);
```
👉 **Use case:** Fetch fastest server response.

---

## 📌 4. Promise.any()
- Returns the first successful promise.
- Ignores rejections until all fail.
- If all fail → returns `AggregateError`.

### ✅ Example:
```js
const p1 = new Promise((_, rej) => setTimeout(() => rej("P1 ❌"), 1000));
const p2 = new Promise(res => setTimeout(() => res("P2 ✅"), 2000));
const p3 = new Promise((_, rej) => setTimeout(() => rej("P3 ❌"), 3000));

Promise.any([p1, p2, p3])
  .then(console.log)   // "P2 ✅"
  .catch(err => console.error(err.errors));
```
👉 **Use case:** First success is enough (e.g., retry logic).

---

## 📊 Summary Table
| API                | Waits for all? | Returns first? | Error Handling   | Use Case                     |
|---------------------|----------------|----------------|------------------|------------------------------|
| **Promise.all()**   | ✅ Yes         | ❌ No          | ❌ Fail Fast     | All must succeed             |
| **Promise.allSettled()** | ✅ Yes   | ❌ No          | ✅ Collect All   | Collect success + failures   |
| **Promise.race()**  | ❌ No          | ✅ First settle| ❌ Error/Success | Fastest result               |
| **Promise.any()**   | ❌ No          | ✅ First success | ✅ Ignores fails | At least one success needed |

---

## 🎯 Interview Questions & Answers

**Q1: Difference between Promise.all() and Promise.allSettled()?**  
👉 Promise.all() fails fast on rejection, while Promise.allSettled() waits for all and gives results with status.

**Q2: When to use Promise.race()?**  
👉 When you only care about the fastest result (like fastest server).

**Q3: What happens if all promises fail in Promise.any()?**  
👉 Returns AggregateError containing all rejection reasons.

**Q4: Which API is safest to use if you want all results?**  
👉 Promise.allSettled() ✅

**Q5: Which is most common in practice?**  
👉 Promise.all() (for parallel API calls).

---

✅ With this, you now understand the 4 major Promise APIs in JavaScript with clear examples, use cases, and interview prep 🔥
