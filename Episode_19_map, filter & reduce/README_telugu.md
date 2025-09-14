# 🚀 JavaScript లో Map, Filter & Reduce

JavaScript లో **higher-order functions** (`map()`, `filter()`, `reduce()`) వాడి arrays ని చాలా clean గా మరియు functional style లో handle చేయవచ్చు.

---

## 📌 1. `map()`

👉 `map()` function ఒక array లో ప్రతి element మీద పని చేసి, కొత్త array ని return చేస్తుంది. (Original array మార్చదు).

### Example – Elements ని Double చేయడం
```js
const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}

const doubleArr = arr.map(double);
console.log(doubleArr); // [10, 2, 6, 4, 12]
```

### Example – Binary కి మార్చడం
```js
const arr = [5, 1, 3, 2, 6];
const binaryArr = arr.map(x => x.toString(2));
console.log(binaryArr); // ['101', '1', '11', '10', '110']
```

---

## 📌 2. `filter()`

👉 `filter()` function ఒక condition ఆధారంగా elements select చేస్తుంది. New array return అవుతుంది.

### Example – Odd Numbers Filter చేయడం
```js
const arr = [5, 1, 3, 2, 6];

function isOdd(x) {
  return x % 2;
}

const oddArr = arr.filter(isOdd);
console.log(oddArr); // [5, 1, 3]

// Short version
const oddArr2 = arr.filter(x => x % 2);
console.log(oddArr2); // [5, 1, 3]
```

---

## 📌 3. `reduce()`

👉 `reduce()` function ఒక array ని ఒకే **single value** గా reduce చేస్తుంది.  
👉 ఇది రెండు arguments తీసుకుంటుంది:  
- **Accumulator (acc)** – result ని store చేస్తుంది  
- **Current Value (curr)** – array లోని ప్రస్తుత element  

### Example – Sum of Elements
```js
const arr = [5, 1, 3, 2, 6];

const sum = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum); // 17
```

### Example – Maximum Value
```js
const arr = [5, 1, 3, 2, 6];

const max = arr.reduce((acc, curr) => {
  if (curr > acc) acc = curr;
  return acc;
}, 0);

console.log(max); // 6
```

---

## 📌 Advanced Examples

✅ **Map – Objects నుండి Full Names**  
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

✅ **Reduce – Count People by Age**  
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

✅ **Function Chaining – Filter + Map**  
```js
const youngUsers = users
  .filter(user => user.age < 30)
  .map(user => user.firstName);

console.log(youngUsers); // ["Alok", "Ashish", "Ankit"]
```

---

## 📌 Summary (తెలుగులో)

| Function | పని | Return |
|----------|------|---------|
| **map()** | ప్రతి element ని transform చేయడం | కొత్త array |
| **filter()** | Condition ఆధారంగా select చేయడం | కొత్త array |
| **reduce()** | Array ని ఒకే value గా reduce చేయడం | Single value |

✔ `map()` → Transformation (మార్చడం)  
✔ `filter()` → Selection (ఎంచుకోవడం)  
✔ `reduce()` → Accumulation (కలపడం/సంక్షిప్తం చేయడం)  

---

## 🎯 Interview Questions & Answers (తెలుగులో)

**Q1. map, filter, reduce మధ్య తేడా ఏమిటి?**  
👉 `map()` elements ని మార్చుతుంది,  
👉 `filter()` elements ని select చేస్తుంది,  
👉 `reduce()` అన్ని elements ని ఒకే value లోకి మార్చేస్తుంది.  

**Q2. map() original array ని మార్చుతుందా?**  
👉 కాదు, అది కొత్త array ని return చేస్తుంది.  

**Q3. map & filter పనిని reduce తో చేయగలమా?**  
👉 అవును, reduce చాలా powerful. map & filter ని కూడా replicate చేయవచ్చు.  

**Q4. reduce ఎప్పుడు వాడాలి?**  
👉 ఒకే value లేదా summary కావాలంటే (ఉదా: sum, max, grouping).  

**Q5. Function chaining అంటే ఏమిటి?**  
👉 ఒకే line లో `filter().map().reduce()` లాంటివి వాడటం.  

---

👉 ఇదంతా practice చేస్తే, మీరు JavaScript arrays ని **modern, clean & professional style** లో handle చేయగలరు.  
