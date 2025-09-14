# 🚀 Map, Filter & Reduce in JavaScript

JavaScript provides **higher-order functions** like `map()`, `filter()`, and `reduce()` that help us work with arrays in a clean, functional way.

---

## 📌 1. map()

The `map()` function transforms each element of an array and returns a **new array**.

### Example – Double Array Elements
```js
const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}

const doubleArr = arr.map(double);
console.log(doubleArr); // [10, 2, 6, 4, 12]
```

### Example – Convert to Binary
```js
const arr = [5, 1, 3, 2, 6];
const binaryArr = arr.map(x => x.toString(2));
console.log(binaryArr); // ['101', '1', '11', '10', '110']
```

---

## 📌 2. filter()

The `filter()` function selects elements from an array based on a condition.  
It returns a **new array** containing only values that satisfy the condition.

### Example – Filter Odd Numbers
```js
const arr = [5, 1, 3, 2, 6];

function isOdd(x) {
  return x % 2;
}

const oddArr = arr.filter(isOdd);
console.log(oddArr); // [5, 1, 3]
```

(Short version using arrow function:)
```js
const oddArr = arr.filter(x => x % 2);
console.log(oddArr); // [5, 1, 3]
```

---

## 📌 3. reduce()

The `reduce()` function reduces an array to a **single value**.  
It takes two arguments:
- **Accumulator** – stores the result
- **Current value** – current array element

### Example – Sum of Elements
```js
const arr = [5, 1, 3, 2, 6];

const sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 17
```

### Example – Find Maximum Value
```js
const arr = [5, 1, 3, 2, 6];

const max = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(max); // 6
```

---

## 📌 Advanced Examples

### ✅ Map – Full Names from Objects
```js
const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 }
];

const fullNames = users.map(user => user.firstName + " " + user.lastName);
console.log(fullNames);
// ["Alok Raj", "Ashish Kumar", "Ankit Roy", "Pranav Mukherjee"]
```

### ✅ Reduce – Count People by Age
```js
const report = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(report);
// {23: 1, 29: 2, 50: 1}
```

### ✅ Function Chaining – Filter + Map
```js
const youngUsers = users
  .filter(user => user.age < 30)
  .map(user => user.firstName);

console.log(youngUsers); // ["Alok", "Ashish", "Ankit"]
```

(Using `reduce` instead:)
```js
const youngUsersReduce = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(youngUsersReduce); // ["Alok", "Ashish", "Ankit"]
```

---

## 📌 Summary

| Function  | Purpose | Returns |
|-----------|---------|----------|
| **map()** | Transform each element | New array |
| **filter()** | Select elements based on condition | New array |
| **reduce()** | Reduce array to single value | Single value |

✔ `map()` → Transformation  
✔ `filter()` → Selection  
✔ `reduce()` → Accumulation

---

## 🎯 Interview Questions & Answers

### Q1. What is the difference between map, filter, and reduce?
👉 `map()` transforms elements, `filter()` selects elements, and `reduce()` accumulates elements into a single result.

---

### Q2. Does map() modify the original array?
👉 No, it always returns a new array without modifying the original.

---

### Q3. Can we achieve map and filter using reduce?
👉 Yes. Since `reduce()` is the most powerful, it can replicate both `map()` and `filter()` by carefully managing the accumulator.

---

### Q4. When should you use reduce over map/filter?
👉 Use `reduce()` when you need a **single value** or **object summary** from an array (e.g., sum, max, grouping).

---

### Q5. What is function chaining in JS?
👉 Function chaining means using multiple array methods like `filter().map().reduce()` in one line for cleaner code.

---

✨ Mastering these three functions is key to writing clean, functional, and modern JavaScript code.
