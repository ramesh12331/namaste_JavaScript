
# ⚡ Async vs Defer in JavaScript

When loading external JavaScript files using the `<script>` tag, we can optimize performance using **`async`** and **`defer`** attributes. These attributes control **how and when scripts are executed**.

---

## 📌 1. What is `async`?

- **Definition**:  
  The script is downloaded **asynchronously** (in parallel with HTML parsing) and executed **immediately after download**, which may pause HTML parsing.

- **Syntax**:
  ```html
  <script src="script.js" async></script>
  ```

- **Use Cases**:  
  ✅ Analytics scripts, Ads, Social media SDKs (non-critical scripts that don’t depend on DOM or other scripts).

---

## 📌 2. What is `defer`?

- **Definition**:  
  The script is downloaded **asynchronously** but execution is **deferred until after HTML parsing is finished**. Scripts with `defer` maintain order of execution.

- **Syntax**:
  ```html
  <script src="script.js" defer></script>
  ```

- **Use Cases**:  
  ✅ DOM-dependent scripts, Libraries, Frameworks (React, Vue, Angular) that must load after DOM is ready.

---

## 📌 3. Difference Between `async` and `defer`

| Feature                | `async` ⚡              | `defer` ⏳              |
|-------------------------|------------------------|-------------------------|
| Downloading             | In parallel with HTML  | In parallel with HTML   |
| Execution Timing        | Immediately after load | After HTML parsing      |
| Execution Order         | Not guaranteed         | Guaranteed (in order)   |
| Blocks HTML Parsing?    | Yes (when executing)   | No                      |
| Best For                | Independent scripts    | DOM-dependent scripts   |

---

## 📌 4. When to Use `defer` over `async`?

- Use **`async`** when:
  - Script is independent of DOM.
  - Execution order with other scripts does not matter.
  - Example: Google Analytics, Ads.

- Use **`defer`** when:
  - Script depends on DOM being fully loaded.
  - Multiple scripts need to execute in order.
  - Example: Loading frameworks, initialization scripts.

---

## 📊 5. Diagram

```
HTML Parsing:  |----|----|----|----|----|

Normal <script>:  Parsing pauses -> Script loads -> Executes -> Parsing continues

<async>:          Parsing continues || Script loads -> Executes immediately (may interrupt parsing)

<defer>:          Parsing continues || Script loads -> Executes only after parsing completes
```

---

## 📌 6. Real-Life Examples

### 🔹 Example 1: Async Script
```html
<!-- Good for analytics -->
<script src="analytics.js" async></script>
```

### 🔹 Example 2: Defer Script
```html
<!-- Good for DOM-dependent code -->
<script src="app.js" defer></script>
```

### 🔹 Example 3: Multiple Scripts
```html
<!-- Async (order not guaranteed) -->
<script src="a.js" async></script>
<script src="b.js" async></script>

<!-- Defer (order guaranteed: a.js then b.js) -->
<script src="a.js" defer></script>
<script src="b.js" defer></script>
```

---

## 📌 7. Interview Questions & Answers

### Q1. What is the difference between `async` and `defer` in JavaScript?
👉 `async` executes as soon as the script is downloaded (not guaranteed order).  
👉 `defer` executes after the HTML parsing is complete (order guaranteed).

### Q2. Which attribute should you use for DOM-dependent scripts?
👉 Use **`defer`** because execution waits until parsing is done.

### Q3. If two scripts have `async`, will they maintain order?
👉 No, execution order depends on download completion.

### Q4. If two scripts have `defer`, will they maintain order?
👉 Yes, they execute in the order they appear in the HTML.

### Q5. Which improves page load speed more: `async` or `defer`?
👉 Both improve performance, but **`defer`** is safer for DOM-dependent scripts, while **`async`** is best for independent scripts.

---

## 📊 Summary Table

| Attribute | Download | Execution | Order | Use Case |
|-----------|----------|-----------|-------|----------|
| async     | Parallel | Immediate after download | Not guaranteed | Analytics, Ads |
| defer     | Parallel | After HTML parsing       | Guaranteed      | Libraries, DOM scripts |

---

✅ With this, you now have a **complete guide to `async` vs `defer` in JavaScript** with syntax, examples, diagrams, summary tables, and interview prep 🚀
