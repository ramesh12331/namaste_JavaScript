# Callback Functions in JavaScript (ft. Event Listeners)

## 📌 What is a Callback Function?
A **callback function** is a function passed as an argument to another function, which is later executed (called back) inside the outer function.

👉 In JavaScript, functions are **first-class citizens** — meaning they can be passed around like variables, used as arguments, or returned from other functions.

---

## ✅ Example: Basic Callback
```javascript
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

// Passing sayBye as a callback
greet("Ramesh", sayBye);

// Output:
// Hello, Ramesh
// Goodbye!
```

---

## 📌 Callback Functions in **Event Listeners**
Event listeners in JavaScript commonly use callbacks.

```javascript
document.getElementById("btn").addEventListener("click", function () {
    console.log("Button was clicked!");
});
```

- `addEventListener` takes **two arguments**:
  1. Event type (e.g., `"click"`, `"mouseover"`).
  2. Callback function → executed when the event occurs.

---

## ✅ Example: Named Callback with Event Listener
```javascript
function handleClick() {
    console.log("Button clicked via named function!");
}

document.getElementById("btn").addEventListener("click", handleClick);
```

---

## 🔑 Key Points
- A callback **is not executed immediately**, it’s invoked **later** by the outer function.
- In **event listeners**, the callback is executed when the event happens.
- Prevents code duplication and makes programs more flexible.

---

## 📌 Summary
- **Callback** → Function passed as an argument.
- **Event Listeners** → Heavily rely on callbacks to respond to user actions.
- Used in **async operations** (timers, network calls, file reading, etc.).
- Helps in writing **reusable and modular code**.

---

## 🎯 Interview Questions & Answers

### 1. ❓ What is a callback function in JavaScript?
👉 A callback is a function passed as an argument to another function and executed later inside that function.

---

### 2. ❓ How are callbacks used in event listeners?
👉 Event listeners take a callback function that executes only when the specified event (like `click`) occurs.

---

### 3. ❓ Difference between synchronous and asynchronous callbacks?
- **Synchronous**: Executed immediately (e.g., `Array.map`, `Array.forEach`).
- **Asynchronous**: Executed later (e.g., `setTimeout`, `addEventListener`).

---

### 4. ❓ Can you pass parameters to a callback in event listeners?
👉 Yes, but you need to wrap it in an anonymous function:
```javascript
document.getElementById("btn").addEventListener("click", function() {
    greet("Ramesh", sayBye);
});
```

---

### 5. ❓ What are the drawbacks of callbacks?
👉 Callback Hell (nested callbacks, messy code) → solved by **Promises** and **async/await**.

---

⚡ **In short**:  
Callbacks are essential in JavaScript, especially in handling **events** and **asynchronous tasks**, making them a fundamental interview topic.
