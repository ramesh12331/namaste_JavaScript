# 🎬 JavaScript Series – Short Conclusion & Summary

## ✅ Episode\_01: call, apply, bind

* **call** – Immediately invokes a function with a specified `this` context.
* **apply** – Similar to call but arguments are passed as an array.
* **bind** – Returns a new function with bound `this`, can be called later.

**Example:**

```javascript
const person = {name: 'Ramesh'};
function greet(greeting){
  console.log(`${greeting}, ${this.name}`);
}

greet.call(person, 'Hello');  // Hello, Ramesh
greet.apply(person, ['Hi']);  // Hi, Ramesh
const greetRamesh = greet.bind(person, 'Hey');
greetRamesh();  // Hey, Ramesh
```

**Summary:**

* Useful for executing functions with the correct object context.

---

## ✅ Episode\_02: Currying

* Transform a function into a series of smaller functions taking one argument at a time.
* Improves reusability and modularity.

**Example:**

```javascript
const add = a => b => a + b;
console.log(add(2)(3)); // 5
```

**Summary:**

* Makes code more reusable and customizable.

---

## ✅ Episode\_03: Polyfill for bind

* Implement JavaScript's `bind()` manually.
* Common interview question.

**Example:**

```javascript
Function.prototype.myBind = function(obj, ...args){
  const fn = this;
  return function(...newArgs){
    return fn.apply(obj, [...args, ...newArgs]);
  }
};
```

---

## ✅ Episode\_04: Prototype & Prototypal Inheritance

* **Prototype:** Reference from one object to another.
* **Inheritance:** Objects inherit properties and methods from other objects.

**Example:**

```javascript
function Person(name){ this.name=name; }
Person.prototype.greet = function(){ console.log(`Hi, ${this.name}`); }
const ramesh = new Person('Ramesh');
ramesh.greet(); // Hi, Ramesh
```

**Summary:**

* Allows OOP-like behavior in JavaScript.

---

## ✅ Episode\_05: Debouncing

* Ensures a function is called only after a certain period of inactivity.

**Example:**

```javascript
function debounce(fn, delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=>fn.apply(this, args), delay);
  };
}
```

**Summary:**

* Optimizes input handling, scroll, and resize events.

---

## ✅ Episode\_06: Throttling

* Limits a function to run at most once in a given time interval.

**Example:**

```javascript
function throttle(fn, limit){
  let lastCall = 0;
  return function(...args){
    const now = Date.now();
    if(now - lastCall >= limit){
      fn.apply(this, args);
      lastCall = now;
    }
  }
}
```

**Summary:**

* Controls event frequency for performance optimization.

---

## ✅ Episode\_07: Debouncing vs Throttling

* **Debounce:** Executes after the last action.
* **Throttle:** Executes at a fixed interval.

**Summary:**

* Improves performance and event handling efficiency.

---

## ✅ Episode\_08: Async vs Defer

* **async:** Script loads in parallel and executes immediately when ready.
* **defer:** Script loads in parallel but executes after HTML parsing.

**Summary:**

* Optimizes page loading.

---

## ✅ Episode\_09: Event Bubbling & Capturing

* **Bubbling:** Event propagates from child to parent.
* **Capturing:** Event propagates from parent to child.

**Summary:**

* Understand event propagation in DOM.

---

## ✅ Episode\_10: Event Delegation

* Attach a listener to a parent element to handle events on child elements.

**Example:**

```javascript
document.getElementById('parent').addEventListener('click', function(e){
  if(e.target && e.target.matches('button.className')){
    console.log('Button clicked');
  }
});
```

**Summary:**

* Efficient, memory-friendly event handling.

---

## ✅ Episode\_11: sum(1)(2)(3)...(n)()

* Create an infinitely chainable sum function using currying.

---

## ✅ Episode\_12: Recursive Thinking

* A function calls itself.

**Example:**

```javascript
function factorial(n){
  if(n===0) return 1;
  return n*factorial(n-1);
}
```

**Summary:**

* Useful for factorials, Fibonacci series, and complex problem-solving.

---

## ✅ Episode\_13: Local Storage & Session Storage

* **localStorage:** Persistent data even after browser close.
* **sessionStorage:** Data is cleared when the tab is closed.

**Summary:**

* Useful for data persistence and session management.

---

# 📌 Overall Summary

* Function handling → call, apply, bind, currying, polyfills
* Memory optimization → debounce, throttle, delegation
* Browser behavior → async, defer, storage APIs
* Event system → bubbling, capturing, delegation
* Problem solving → recursion, sum chaining

**Conclusion:**

* These concepts are essential for frontend developer interviews, machine coding rounds, and real-world JavaScript applications.
