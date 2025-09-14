# JavaScript Closures & Related Concepts

## 📌 1. Closure
A closure is a function that **remembers variables** from its lexical scope, even after the outer function has finished.

```js
function outer() {
  let a = 10;
  return function inner() {
    console.log(a);
  }
}
outer()(); // 10
```

---

## 📌 2. Nested Closure
Closures inside closures — inner functions can access variables from multiple parent scopes.

```js
function outest() {
  let c = 20;
  function outer() {
    let a = 10;
    function inner() {
      console.log(a, c);
    }
    return inner;
  }
  return outer;
}
outest()()(); // 10 20
```

---

## 📌 3. Constructor with Closure
Closures inside constructors are used to create **private variables**.

```js
function Counter() {
  let count = 0; // private
  this.inc = function() { console.log(++count); }
  this.dec = function() { console.log(--count); }
}

let c1 = new Counter();
c1.inc(); // 1
c1.dec(); // 0
```

---

## 📌 4. Garbage Collector with Closure
Only variables referenced by closures are preserved.  
Unused ones are garbage collected.

```js
function a() {
  let x = 0;   // preserved
  let z = 10;  // garbage collected
  return function b() { console.log(x); }
}
a()(); // 0
```

---

## 📌 Summary Table

| Concept        | Short Explanation | Example Output |
|----------------|------------------|----------------|
| Closure        | Function + lexical scope | `outer()(); // 10` |
| Nested Closure | Closure inside closure | `outest()()(); // 10 20` |
| Constructor + Closure | Private variables in constructor | `c1.inc(); // 1` |
| Garbage Collector | Keeps only used variables in closure | `a()(); // 0` |

---

## 🎯 Interview Q&A

### Q1: What is a closure?
**A:** A closure is a function bundled with its lexical environment, allowing it to access variables outside its own scope.

---

### Q2: Why are closures useful?
**A:** They allow **data hiding, encapsulation, and stateful functions** (e.g., counters, private variables).

---

### Q3: What is a nested closure?
**A:** When multiple inner functions access variables from their parent and grandparent scopes.

---

### Q4: How do closures relate to garbage collection?
**A:** Closures keep only the variables they reference alive; unused variables in the parent scope can be garbage collected.

---

### Q5: Difference between closure and constructor with closure?
**A:** 
- **Closure:** Any inner function remembering outer variables.  
- **Constructor with Closure:** Uses closures to make private variables for objects.

---

✅ This README gives a **short, clear summary + examples + interview prep**.
