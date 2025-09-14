# Asynchronous JavaScript & Event Loop

## 📌 What is Asynchronous JavaScript?
JavaScript is **single-threaded** (one task at a time), but it can handle asynchronous operations using **Web APIs, Event Loop, Callback Queue, and Microtask Queue**.

👉 The **Call Stack** only executes one execution context at a time.  
👉 Browser provides extra features like `setTimeout`, `fetch`, DOM APIs, etc. These are **NOT part of JS**, they come from the browser.

---

## ✅ Example 1 – `setTimeout`
```javascript
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 2000);

console.log("End");
```

### 🔎 Execution Flow
1. `console.log("Start")` → Call Stack → Web API → logs immediately.  
2. `setTimeout` → Browser Timer → after 2s, callback goes to **Callback Queue**.  
3. `console.log("End")` → logged immediately.  
4. Event Loop checks → pushes callback to Call Stack → logs `"Callback"`.

**Output:**
```
Start  
End  
Callback  
```

---

## ✅ Example 2 – `setTimeout` + `fetch`
```javascript
console.log("Start");

setTimeout(() => console.log("CB Timeout"), 5000);

fetch("https://api.netflix.com").then(() => {
  console.log("CB Netflix");
});

console.log("End");
```

### 🔎 Execution Flow
- `Start` → logged.  
- `setTimeout` callback waits in **Callback Queue** (after 5s).  
- `fetch` callback waits in **Microtask Queue** (after ~2s).  
- `End` → logged.  
- Event Loop priority: **Microtask Queue > Callback Queue**.

**Output:**
```
Start  
End  
CB Netflix  
CB Timeout  
```

---

## 📌 Key Concepts

### Event Loop
- Keeps checking **Call Stack** and **Queues**.  
- Moves callbacks into Call Stack when it’s empty.

### Callback Queue (Task Queue)
- Holds `setTimeout`, DOM events, etc.

### Microtask Queue
- Holds Promises (`.then`, `.catch`) and MutationObserver callbacks.  
- **Higher priority** than Callback Queue.

### Starvation
- If Microtask Queue keeps adding tasks, Callback Queue tasks may starve (never run).

---

## 📌 Summary

- **JS Engine** → Call Stack executes code.  
- **Browser/Web APIs** → provide async features (`setTimeout`, `fetch`, DOM APIs).  
- **Event Loop** → moves callbacks to Call Stack.  
- **Queues**:  
  - Microtask Queue (Promises, MutationObserver) → High Priority.  
  - Callback Queue (setTimeout, DOM events) → Normal Priority.

---

## 🎯 Interview Questions

### 1. ❓ When does the Event Loop start?
👉 It’s always running, checking if the Call Stack is empty and if there are tasks in the queues.

---

### 2. ❓ What’s the difference between Callback Queue and Microtask Queue?
👉 Both hold async callbacks, but **Microtask Queue has higher priority**. Promises go to Microtask Queue, `setTimeout` goes to Callback Queue.

---

### 3. ❓ What happens if `setTimeout(fn, 0)` is used?
👉 It won’t run immediately. It waits until Call Stack is empty. Execution may be delayed if the stack is busy.

---

### 4. ❓ Why is `fetch` callback executed before `setTimeout`?
👉 Because `fetch` uses Promises → goes to **Microtask Queue** → executed before tasks in Callback Queue.

---

### 5. ❓ Why should we remove unused Event Listeners?
👉 They stay in Web API environment forever, preventing Garbage Collection and causing memory leaks.

---

⚡ **In Short**:  
- Event Loop makes async JavaScript possible.  
- Microtask Queue > Callback Queue.  
- `fetch` (Promises) executes before `setTimeout`.  
