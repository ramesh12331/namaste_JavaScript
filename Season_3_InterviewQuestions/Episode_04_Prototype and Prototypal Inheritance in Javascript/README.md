# 🔑 Prototype and Prototypal Inheritance in JavaScript  

JavaScript uses **Prototypes** to enable inheritance between objects. Unlike class-based languages, JS is prototype-based.  

---

## 📌 What is Prototype?  

- Every JavaScript object has a hidden property called **`[[Prototype]]`** (accessible as `__proto__`).  
- This prototype is a reference to another object.  
- Objects inherit properties and methods from their prototype.  

```js
let obj = {
  name: "Ramesh"
};

console.log(obj.__proto__); // Shows prototype (Object)
```

---

## 📌 What is Prototypal Inheritance?  

- Prototypal inheritance means one object can inherit properties/methods from another object via prototype chain.  

```js
let person = {
  greet: function () {
    console.log("Hello!");
  }
};

let student = {
  name: "Akshay"
};

student.__proto__ = person;   // student inherits from person

student.greet(); // Output: Hello!
```

---

## 📌 What is Prototype Chain?  

- If a property/method is not found in the current object, JS looks up the prototype chain.  
- Chain continues until `null` is reached.  

```js
let obj = {};
console.log(obj.toString()); // found in Object.prototype
console.log(obj.__proto__.__proto__); // null (end of chain)
```

---

## 📌 Why do we call it `__proto__`?  

- `__proto__` is the reference to the object’s prototype.  
- It’s a pointer to another object.  
- Historically called “dunder proto” (double underscore proto).  

---

## 📌 What is Inheritance in JavaScript?  

- **Inheritance** allows one object to use properties and methods of another.  
- Achieved via prototypes in JavaScript.  

---

## 📌 Syntax  

```js
// Constructor function
function Person(name) {
  this.name = name;
}

// Adding method to prototype
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

// Creating object using constructor
let p1 = new Person("Ramesh");
p1.sayHello(); // Hello, my name is Ramesh
```

---

## 📊 Summary Table  

| Concept                | Meaning                                                                 |
|-------------------------|-------------------------------------------------------------------------|
| Prototype               | Object from which other objects inherit.                               |
| Prototypal Inheritance  | Objects inherit from other objects via prototype.                      |
| Prototype Chain         | Chain of prototypes JS follows to find properties.                     |
| `__proto__`             | Pointer to an object’s prototype.                                      |
| Inheritance in JS       | Sharing properties/methods via prototype chain.                        |

---

## 🎯 Interview Questions & Answers  

### Q1. What is a Prototype in JavaScript?  
👉 A prototype is an object from which other objects inherit properties and methods.  

---

### Q2. What is Prototypal Inheritance?  
👉 It’s a feature where objects can inherit properties/methods from other objects using the prototype chain.  

---

### Q3. What is the Prototype Chain?  
👉 The chain JS follows to look for a property/method in parent objects until `null`.  

---

### Q4. Difference between `__proto__` and `prototype`?  
- **`__proto__`** → reference to an object’s prototype.  
- **`prototype`** → property available only on constructor functions, used to set up inheritance.  

---

### Q5. Why do we call it `__proto__`?  
👉 Because it’s a hidden link (internal property) connecting an object to its prototype.  

---

### Q6. What is inheritance in JavaScript?  
👉 The mechanism of reusing properties and methods of one object in another via prototypes.  

---

✅ With this, you now have a complete understanding of **Prototype, Prototypal Inheritance, Prototype Chain, and Inheritance in JS** 🚀  
