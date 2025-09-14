# ⏳ Trust Issues with `setTimeout()` in JavaScript

## 📌 Why "Trust Issues"?
- `setTimeout()` **does not guarantee exact execution after the given delay**.  
- It only guarantees that the callback will be executed **after at least that delay**, when the **call stack is free**.  

JavaScript is **single-threaded**, meaning only one task can run at a time in the **call stack**.  
If the stack is busy, even if the timer has expired, the callback must wait in the **Callback Queue** until the **Event Loop** pushes it to the stack.

---

## ✅ Example 1: Normal `setTimeout`

```js
console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End");
```

### Output:
```
Start
End
Callback
```

✔ Here, the callback executes after ~5s (when stack is free).

---

## ⚠️ Example 2: Blocking Code + `setTimeout`

```js
console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;

// Busy wait for 10 seconds
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("while expires");
```

### Expected Timer: 5s  
### Actual Behavior:
```
Start
End
while expires
Callback
```

### 🔎 Explanation
1. `"Start"` → printed immediately.  
2. `setTimeout()` → callback registered in **Web API**, timer starts (5s).  
3. `"End"` → printed immediately.  
4. Busy **while loop blocks the main thread for 10s**.  
   - Even though timer expired at 5s, callback waits in **Callback Queue**.  
5. After 10s, GEC (Global Execution Context) is cleared → Event Loop pushes callback → `"Callback"` is printed.  

👉 So the callback runs **after 10s**, not 5s.

---

## ⚡ Key Points
- `setTimeout(fn, 0)` does not run immediately → it waits until the stack is clear.  
- **Minimum wait time is guaranteed, not exact execution time**.  
- JavaScript follows a **Concurrency Model** with:
  - Call Stack
  - Web APIs
  - Callback Queue
  - Event Loop

---

## 📌 Summary
- JavaScript is **synchronous and single-threaded**.
- `setTimeout()` ensures **at least the given delay**, not exact timing.
- If the **main thread is blocked**, timers are delayed.
- Rule #1 → **Never block the main thread** (avoid heavy sync tasks).

---

## 🎯 Interview Questions & Answers

**Q1. Why does `setTimeout(fn, 5000)` not always run after exactly 5s?**  
👉 Because the callback only runs when the **Call Stack is empty**. If the stack is busy, execution is delayed.

**Q2. What happens if `setTimeout(fn, 0)` is used?**  
👉 The callback waits until the stack is clear. It does not execute instantly.

**Q3. Why should we avoid blocking the main thread in JavaScript?**  
👉 Because JavaScript is single-threaded. Blocking prevents timers, events, and async operations from executing on time.

**Q4. What’s the role of the Event Loop in `setTimeout()`?**  
👉 Event Loop checks if the stack is empty and moves callbacks from **Callback Queue** to the **Call Stack**.

**Q5. How is `setTimeout` different from Promises in terms of execution priority?**  
👉 Promises go into the **Microtask Queue** (higher priority), while `setTimeout` goes into the **Callback Queue** (lower priority).
