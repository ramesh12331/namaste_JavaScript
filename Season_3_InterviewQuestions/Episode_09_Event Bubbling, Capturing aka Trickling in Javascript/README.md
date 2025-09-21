# ⚡ Event Bubbling & Capturing (Trickling) in JavaScript

When an event happens in the DOM, it doesn’t just affect the target element. It travels through the DOM tree in **phases**.  
Understanding these phases is key to handling events properly.  

---

## 📌 1. Event Propagation Phases

1. **Capturing Phase (Trickling)** → Event travels **top → down** (document → element).  
2. **Target Phase** → Event is handled at the target element.  
3. **Bubbling Phase** → Event travels **bottom → up** (element → document).  

---

## 📌 2. Event Bubbling

- Default behavior in JavaScript.  
- Event starts at the **target** and bubbles upward to its ancestors.  

---

## 📌 3. Event Capturing (Trickling)

- Optional phase (must be enabled).  
- Event starts from the **root** and travels downward to the target.  

Enable capturing with:
```js
element.addEventListener("event", handler, true);
```

---

## 📌 4. Order of Execution

| Phase         | Direction | Example Order |
|---------------|-----------|---------------|
| Capturing     | Top → Down | Document → Body → Grandparent → Parent → Child |
| Target        | At target | Child |
| Bubbling      | Bottom → Up | Child → Parent → Grandparent → Body → Document |

---

## 📌 5. Code Examples

### ✅ HTML Structure
```html
<div id="grandparent">
  <div id="parent">
    <div id="child"></div>
  </div>
</div>
```

---

### ✅ Example 1: Bubbling (Default or `false`)
```js
document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("Grandparent (Bubbling)");
}, false);

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent (Bubbling)");
}, false);

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child (Bubbling)");
}, false);
```

**Clicking `#child` logs**:
```
Child (Bubbling)
Parent (Bubbling)
Grandparent (Bubbling)
```

---

### ✅ Example 2: Capturing (`true`)
```js
document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("Grandparent (Capturing)");
}, true);

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent (Capturing)");
}, true);

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child (Capturing)");
}, true);
```

**Clicking `#child` logs**:
```
Grandparent (Capturing)
Parent (Capturing)
Child (Capturing)
```

---

### ✅ Example 3: Mixed (true vs false)
```js
document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("Grandparent (Capturing)");
}, true);

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent (Bubbling)");
}, false);

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child (Default Bubbling)");
}); // bubbling by default
```

**Clicking `#child` logs**:
```
Grandparent (Capturing)
Child (Default Bubbling)
Parent (Bubbling)
```

---

### ✅ Example 4: Stop Propagation
```js
document.querySelector("#child").addEventListener("click", (e) => {
  console.log("Child clicked only!");
  e.stopPropagation(); // stops bubbling/capturing
}, false);
```

---

### ✅ Example 5: stopImmediatePropagation
```js
const child = document.querySelector("#child");

child.addEventListener("click", (e) => {
  console.log("First handler runs");
  e.stopImmediatePropagation(); // prevents other child handlers
}, false);

child.addEventListener("click", () => {
  console.log("Second handler (won’t run)");
}, false);
```

---

### ✅ Example 6: Event Delegation
```js
document.querySelector("#parent").addEventListener("click", (e) => {
  if (e.target.id === "child") {
    console.log("Child clicked via delegation");
  }
});
```

---

## 📊 6. Diagram

```
Capturing (true):   Document → HTML → Body → Grandparent → Parent → Child
Target Phase:       Child
Bubbling (false):   Child → Parent → Grandparent → Body → HTML → Document
```

---

## 📌 7. Interview Questions & Answers

### Q1. What is Event Bubbling?
👉 Event starts from the target and propagates upward through ancestors.  

### Q2. What is Event Capturing?
👉 Event starts from the root and trickles down to the target.  

### Q3. What is the default phase in JavaScript?
👉 **Bubbling** is default.  

### Q4. How do you enable Capturing?
👉 By passing `true` as the third argument in `addEventListener`.  

### Q5. How do you stop Event Propagation?
👉 Use `e.stopPropagation()` to prevent further bubbling or capturing.  

### Q6. What is `stopImmediatePropagation`?
👉 It stops propagation **and** prevents other handlers on the same element from running.  

### Q7. What is Event Delegation?
👉 Attaching one listener to a parent to handle events from multiple children using bubbling.  

---

## 📊 8. Summary Table

| Concept                  | Direction  | Default | How to Enable | Example Use |
|---------------------------|------------|---------|---------------|-------------|
| Bubbling                 | Bottom → Up | ✅ Yes | `addEventListener("event", fn, false)` | Most events |
| Capturing (Trickling)    | Top → Down | ❌ No  | `addEventListener("event", fn, true)` | Rare cases |
| stopPropagation           | Stops bubbling/capturing | N/A | `e.stopPropagation()` | Prevent parent firing |
| stopImmediatePropagation  | Stops propagation & same-element handlers | N/A | `e.stopImmediatePropagation()` | Advanced control |

---

✅ With this, you now have a **complete deep-dive into Event Bubbling, Capturing & Propagation in JavaScript** with **examples, diagrams, summary, and interview prep** 🚀  
