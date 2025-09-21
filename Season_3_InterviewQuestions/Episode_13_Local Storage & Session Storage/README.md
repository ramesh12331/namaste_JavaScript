# 🗄️ Web Storage API – localStorage & sessionStorage

The **Web Storage API** provides mechanisms to store key-value pairs in a web browser.

* **localStorage** → Data persists even after closing the browser.
* **sessionStorage** → Data persists only until the browser tab is closed.

---

## 📌 1. What is localStorage?

* Stores data with **no expiration date**.
* Data is available across browser sessions.

Example:

```javascript
// Save data
localStorage.setItem("username", "Ramesh");

// Retrieve data
console.log(localStorage.getItem("username")); // "Ramesh"

// Remove data
localStorage.removeItem("username");

// Clear all
localStorage.clear();
```

---

## 📌 2. What is sessionStorage?

* Stores data **only for one session**.
* Cleared when the page or tab is closed.

Example:

```javascript
// Save data
sessionStorage.setItem("user", "Ramesh");

// Retrieve data
console.log(sessionStorage.getItem("user")); // "Ramesh"

// Remove data
sessionStorage.removeItem("user");

// Clear all
sessionStorage.clear();
```

---

## 📌 3. Can localStorage store objects?

👉 Yes, but you must use **JSON.stringify()** and **JSON.parse()**.

Example:

```javascript
let user = { name: "Ramesh", age: 25 };

// Store object
localStorage.setItem("user", JSON.stringify(user));

// Retrieve object
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Ramesh
```

---

## 📊 4. Companies Using Local Storage

* **Flipkart** → Stores cart items temporarily, so users don’t lose them after page reload.
* **Paytm** → Saves user preferences, theme, and temporary session data for faster loading.

---

## 📌 5. Why Important in Machine Coding Rounds?

In **Web/UI Developer Interviews**, you may be asked to:

* Build a cart system using localStorage.
* Persist form data even after refresh.
* Implement login/session flows.

This tests your ability to handle **state persistence**.

---

## 📌 6. Summary Table

| Feature       | localStorage                   | sessionStorage           |
| ------------- | ------------------------------ | ------------------------ |
| Lifespan      | Until explicitly cleared       | Until tab/browser closed |
| Capacity      | \~5–10 MB                      | \~5 MB                   |
| Shared Across | All tabs/windows (same origin) | Only within same tab     |

---

## 📌 7. Interview Questions & Answers

**Q1. Difference between localStorage & sessionStorage?**
👉 localStorage persists until cleared, sessionStorage ends with tab close.

**Q2. Can localStorage store objects?**
👉 Not directly, must use JSON.stringify() & JSON.parse().

**Q3. What is the storage limit of localStorage?**
👉 Around 5–10 MB depending on browser.

**Q4. Why use Web Storage over cookies?**
👉 Web Storage is larger, faster, and doesn’t get sent to the server with every request.

**Q5. Real-world use cases?**
👉 Shopping cart, theme preferences, form draft saving.

---

✅ **In short:** Web Storage API helps persist data in the browser, crucial for user experience and interview coding rounds.
