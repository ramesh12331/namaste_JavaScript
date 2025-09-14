# 📘 JavaScript Execution Context

## 🔹 Overview
Everything in JavaScript happens inside the **Execution Context**.  
It acts like a container with two main components:

### 1. Memory Component (Variable Environment)
- Stores variables and functions in key-value pairs.  
- Responsible for memory allocation.  

### 2. Code Component (Thread of Execution)
- Executes the code one line at a time.  
- Handles the logic and instructions.  

---

## 🔹 Key Concepts
1. **Synchronous**  
   - Code runs in a specific order, line by line.  
   - Each statement waits for the previous one to finish.  

2. **Single-Threaded**  
   - JavaScript has one thread of execution.  
   - It can handle only one command at a time.  

---

## 🔹 Execution Context Flow

```
             +-------------------------+
             |   Execution Context      |
             +-------------------------+
               |                  |
     +----------------+   +------------------+
     | Memory Component|   | Code Component   |
     | (Variable Env)  |   | (Thread of Exec) |
     +-----------------+   +------------------+
               |                  |
   --------------------     --------------------
   | Stores variables |     | Executes code    |
   | & functions as   |     | line by line     |
   | key-value pairs  |     |                  |
   --------------------     --------------------
```

---

## 🔹 Summary
- **Execution Context** = Memory Component + Code Component  
- **Memory Component** = Variable Environment  
- **Code Component** = Thread of Execution  
- JavaScript is **Synchronous** and **Single-Threaded**.  

---

## 🔹 Interview Questions & Answers

### 1. What is an **Execution Context** in JavaScript?  
An execution context is the environment in which JavaScript code is executed.  
It contains the variables, functions, and the code that is currently running.  

---

### 2. What are the two main components of the Execution Context?  
1. **Memory Component (Variable Environment)** → Stores variables and functions.  
2. **Code Component (Thread of Execution)** → Executes the code line by line.  

---

### 3. What is the difference between **Memory Component** and **Code Component**?  
- **Memory Component**: Stores all variables and function declarations in key-value pairs.  
- **Code Component**: Executes the actual instructions, one line at a time.  

---

### 4. Why is the Memory Component also called the **Variable Environment**?  
Because it is where variables and functions live in memory before execution begins.  

---

### 5. Why is the Code Component also called the **Thread of Execution**?  
Because it represents the single thread that executes the code line by line.  

---

### 6. Is JavaScript a synchronous or asynchronous language by default? Explain.  
By default, JavaScript is **synchronous**. It executes code **one step at a time** in order.  
However, JavaScript can handle **asynchronous tasks** (e.g., setTimeout, promises, fetch) using the event loop.  

---

### 7. What does it mean when we say JavaScript is **single-threaded**?  
It means JavaScript has **only one thread of execution**, so it can only execute one command at a time.  

---

### 8. How does JavaScript handle multiple tasks if it is single-threaded?  
JavaScript uses the **event loop**, **callback queue**, and **Web APIs** to handle asynchronous tasks without blocking the main thread.  

---

### 9. What happens during the **creation phase** of the Execution Context?  
- Memory is allocated to variables and functions.  
- Variables are initialized with `undefined`.  
- Function declarations are stored in memory.  

---

### 10. What happens during the **execution phase** of the Execution Context?  
- Code is executed line by line.  
- Variables are assigned their actual values.  
- Functions are executed when called.  
