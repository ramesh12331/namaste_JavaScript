# 🔁 JavaScript Curried Sum Function – Core Fundamentals

Currying allows **chaining function calls** in a way that each call passes a parameter and returns a new function, until a final call returns the result.

Example: `sum(1)(2)(3)(4)()`

---

## 📌 1. Classic Function Syntax (if-else)

```javascript
let sum = function(a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}

console.log(sum(1)(2)(3)(4)()); // 10
```

**Explanation:**

* Each call adds the number to `a`.
* When no argument is passed (empty call `()`), it returns the accumulated sum.

---

## 📌 2. Using Ternary Operator

```javascript
let sum = function(a){
    return function(b){
       return b ? sum(a+b) : a;
    }
}
console.log(sum(1)(2)(3)(4)()); // 10
```

* Shorter version using ternary operator for the `if-else` condition.

---

## 📌 3. ES6 Syntax

```javascript
let sum = (a) => {
    return (b) => {
       return b ? sum(a+b) : a;
    }
}
console.log(sum(1)(2)(3)(4)()); // 10
```

* Arrow function syntax makes it cleaner.

### Shortest ES6 Version

```javascript
let sum = (a) => (b) => b ? sum(a+b) : a;
console.log(sum(1)(2)(3)(4)()); // 10
```

---

## 📌 4. Step-by-Step Execution

1. `sum(1)` → returns function expecting next number.
2. `sum(1)(2)` → returns function expecting next number.
3. `sum(1)(2)(3)` → keeps chaining.
4. `sum(1)(2)(3)(4)()` → returns final sum `10`.

Each function call **remembers previous sum** using closures.

---

## 📊 5. Diagram (Chaining Tree)

```
sum(1)
 └─ sum(1+2)
      └─ sum(3+3)
           └─ sum(6+4)
                └─ () → 10
```

---

## 📌 6. Summary Table

| Concept           | Explanation                                          |
| ----------------- | ---------------------------------------------------- |
| Currying          | Function returning another function until final call |
| Closure           | Keeps track of accumulated sum                       |
| Base Case         | Empty call `()` returns accumulated sum              |
| Recursive Case    | Number is passed → return new function               |
| Syntax Variations | Classic, Ternary, ES6 arrow function                 |

---

## 📌 7. Interview Questions & Answers

**Q1. What is currying in JavaScript?**
👉 Converting a function with multiple arguments into a chain of functions each taking a single argument.

**Q2. How does this sum function work?**
👉 Each function call adds to the accumulator and returns a new function until empty call returns final value.

**Q3. What JavaScript concept makes this possible?**
👉 Closures, they retain access to previous `a` value.

**Q4. Can ternary operator replace if-else here?**
👉 Yes, it makes the code concise.

**Q5. Real-world use cases of currying?**
👉 Partial application, event handling, composing functions, functional programming patterns.

---

✅ **Summary:**
Currying + Closures = Elegant way to chain function calls and accumulate results. Example: `sum(1)(2)(3)(4)()`.

This is a common interview pattern to test understanding of closures and function chaining in JavaScript.
