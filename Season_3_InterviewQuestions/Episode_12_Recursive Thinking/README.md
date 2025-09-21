
# 🔁 Thinking Recursively in JavaScript – Core Fundamentals

Recursion is a **powerful concept in computer science**.  
It’s the process of a function calling itself to break down complex problems into smaller, more manageable parts.

Mastering recursion is crucial for **software engineers** — whether in **Microsoft/FAANG interviews** or in **real-world problem solving**.

---

## 📌 1. What is Recursion?

A **recursive function** is a function that calls itself until it reaches a **base condition**.

Every recursion has two parts:

| Concept       | Description                               |
|---------------|-------------------------------------------|
| Base Case     | Stops recursion (exit point)              |
| Recursive Case| Function calls itself with a smaller problem |

---

## 📌 2. Example Problem – Flattening Nested Objects

We want to convert a **deeply nested object** into a **flat object** using recursion.

### ✅ Input:
```javascript
let user = {
  name: "Akshay Saini",
  address: {
    personal: {
      city: "Dehradun",
      state: "Uttrakhand",
      area: "Majra",
    },
    office: {
      city: "Hyderabad",
      area: {
        landmark: "Hi Tech",
      }
    }
  }
};
```

### ✅ Expected Output:
```javascript
{
  user_name: "Akshay Saini",
  user_address_personal_city: "Dehradun",
  user_address_personal_state: "Uttrakhand",
  user_address_personal_area: "Majra",
  user_address_office_city: "Hyderabad",
  user_address_office_area_landmark: "Hi Tech"
}
```

---

## 📌 3. Recursive Solution

### ✅ Code:
```javascript
let magic = (obj, parent, finalObj) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      // Recursive case → Dive deeper into object
      magic(obj[key], parent + "_" + key, finalObj);
    } else {
      // Base case → Assign value to flattened object
      finalObj[parent + "_" + key] = obj[key];
    }
  }
};

let finalObj = {};
magic(user, "user", finalObj);

console.log(finalObj);
```

---

## 📌 4. Step-by-Step Execution

1. Start with `user` object and prefix `"user"`.
2. Traverse each key:
   - **If value is an object** → call function again with `parent + "_" + key`.
   - **If value is a primitive** → add to `finalObj`.
3. Continue until all nested objects are flattened.

---

## 📊 5. Diagram (Recursive Tree)

```
user
 ├── name → user_name
 └── address
      ├── personal
      │    ├── city → user_address_personal_city
      │    ├── state → user_address_personal_state
      │    └── area → user_address_personal_area
      └── office
           ├── city → user_address_office_city
           └── area
                └── landmark → user_address_office_area_landmark
```

---

## 📌 6. Summary Table

| Concept       | Explanation                                               |
|---------------|-----------------------------------------------------------|
| Recursion     | Function calling itself                                    |
| Base Case     | When value is NOT an object                               |
| Recursive Case| When value IS an object → call function again            |
| Use Case      | Flattening nested structures, parsing trees, DFS, backtracking |

---

## 📌 7. Interview Questions & Answers

**Q1. What is recursion?**  
👉 A technique where a function calls itself until a base condition is met.

**Q2. What are the key parts of recursion?**  
👉 Base Case (exit point) and Recursive Case (self-call).

**Q3. Why is recursion important?**  
👉 Simplifies problems like tree traversal, nested structures, permutations, etc.

**Q4. What is the base case in this problem?**  
👉 When the value is NOT an object (string, number, etc.).

**Q5. What happens if we don’t define a base case?**  
👉 Infinite recursion → stack overflow error.

**Q6. Can recursion be replaced with iteration?**  
👉 Yes, using stacks/loops, but recursion is often more elegant.

**Q7. Real-world examples of recursion?**  
👉 File system traversal, JSON parsing, DOM traversal, algorithm problems (DFS, factorial, Fibonacci).

---

## ✅ Summary

- Recursion = divide problem → solve smaller parts → combine results.  
- Example showed **flattening nested objects** using recursion.  
- Essential in interviews and real projects like **tree/graph traversal**, **parsing**, and **backtracking algorithms**.  

⚡ Now you understand how to **think recursively** and solve nested problems step-by-step 🚀
