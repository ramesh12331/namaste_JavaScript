# 📘 Call, Apply, and Bind in JavaScript

In JavaScript, **call, apply, and bind** are methods that allow you to explicitly set the value of `this` when calling a function.

---

## 🔹 1. call() Method
- **Definition**: Calls the function immediately with a given `this` value and arguments passed **individually**.
- **Syntax**:  
  ```js
  func.call(thisArg, arg1, arg2, ...)
  ```
- **Example**:
  ```js
  let obj = {
      firstName: "Akshay",
      lastName: "Saini",
  };

  let printFullName = function (hometown, state) {
      console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
  };

  // Using call
  printFullName.call(obj, "Dehradun", "Uttarakhand");
  // Output: Akshay Saini from Dehradun, Uttarakhand
  ```

---

## 🔹 2. apply() Method
- **Definition**: Calls the function immediately with a given `this` value and arguments passed as an **array**.
- **Syntax**:
  ```js
  func.apply(thisArg, [argsArray])
  ```
- **Example**:
  ```js
  let obj2 = {
      firstName: "Sachin",
      lastName: "Tendulkar",
  };

  let printFullName = function (hometown, state) {
      console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
  };

  // Using apply
  printFullName.apply(obj2, ["Mumbai", "Maharashtra"]);
  // Output: Sachin Tendulkar from Mumbai, Maharashtra
  ```

---

## 🔹 3. bind() Method
- **Definition**: Returns a new function with `this` value and arguments bound, but does not execute immediately.
- **Syntax**:
  ```js
  let boundFunc = func.bind(thisArg, arg1, arg2, ...)
  ```
- **Example**:
  ```js
  let obj3 = {
      firstName: "Virat",
      lastName: "Kohli",
  };

  let printFullName = function (hometown, state) {
      console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
  };

  // Using bind
  let printName = printFullName.bind(obj3, "Delhi", "India");
  console.log(printName); // Function
  printName();
  // Output: Virat Kohli from Delhi, India
  ```

---

## 📊 Summary Table

| Method  | Execution       | Arguments Passed             |
|---------|----------------|-----------------------------|
| **call()** | Immediately    | Individually `(arg1, arg2, …)` |
| **apply()** | Immediately    | As an array `[arg1, arg2, …]` |
| **bind()**  | Returns new fn | Individually (invoke later)   |

---

## 🎯 Interview Questions & Answers

**Q1. What is the difference between call, apply, and bind?**  
👉 `call()` → Invokes immediately, arguments individually.  
👉 `apply()` → Invokes immediately, arguments as array.  
👉 `bind()` → Returns a new function, can be called later.

**Q2. When should you use apply over call?**  
👉 Use `apply` when arguments are already in an array.

**Q3. What does bind return?**  
👉 `bind()` returns a new function with `this` and arguments permanently set, but does not execute immediately.

**Q4. Can bind be used for function borrowing?**  
👉 Yes, `bind` allows reusing methods across objects by binding them to a different `this`.

**Q5. Which method is best for creating a callback function with fixed this?**  
👉 `bind()`, because it returns a new function that can be used later.

---

## ✅ Conclusion

- Use **call()** and **apply()** when you need to invoke a function immediately.  
- Use **bind()** when you want to create a new function with fixed `this` and invoke it later.
