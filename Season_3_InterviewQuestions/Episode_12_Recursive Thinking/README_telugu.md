# 🔁 JavaScript లో Recursive Thinking – Core Fundamentals

Recursion అనేది **కంప్యూటర్ సైన్స్‌లో ఒక శక్తివంతమైన కాన్సెప్ట్**. ఇది ఒక function **తనను పునరావృతంగా పిలుచుకోవడం** ద్వారా పెద్ద సమస్యలను చిన్న, manageable భాగాలుగా విభజిస్తుంది.

👉 Recursion నేర్చుకోవడం software engineers కి ముఖ్యము — Microsoft/FAANG interviews లేదా real-world problem-solving లో.

---

## 📌 1. Recursion అంటే ఏమిటి?

Recursive function అంటే **తనను పునరావృతంగా పిలిచే function**, ఇది base condition చేరేవరకు కొనసాగుతుంది.

ప్రతి recursion కి రెండు భాగాలు ఉంటాయి:

| భాగం           | వివరణ                                    |
| -------------- | ---------------------------------------- |
| Base Case      | Recursion ను నిలిపే స్థానం (exit point)  |
| Recursive Case | Function తను పిలవడం (smaller problem తో) |

---

## 📌 2. Example Problem – Nested Objects Flatten చేయడం

Deeply nested object ను **flat object** గా మార్చడానికి recursion ఉపయోగిస్తాము.

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
let flattenObject = (obj, parent, finalObj) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      // Recursive Case → deeperకి వెళ్ళడం
      flattenObject(obj[key], parent + "_" + key, finalObj);
    } else {
      // Base Case → finalObj లో value add చేయడం
      finalObj[parent + "_" + key] = obj[key];
    }
  }
};

let finalObj = {};
flattenObject(user, "user", finalObj);
console.log(finalObj);
```

---

## 📌 4. Step-by-Step Execution

1. `user` object తో ప్రారంభించండి మరియు prefix `user` ఇవ్వండి.
2. ప్రతి key ను traverse చేయండి:

   * Value object అయితే → function ను recursively పిలవండి (`parent + '_' + key`).
   * Value primitive అయితే → finalObj లో add చేయండి.
3. అన్ని nested objects flatten అయ్యేవరకు కొనసాగించండి.

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

| Concept        | వివరణ                                                              |
| -------------- | ------------------------------------------------------------------ |
| Recursion      | Function తను పిలవడం                                                |
| Base Case      | Value object కాకపోవడం                                              |
| Recursive Case | Value object అయితే function ను recursively పిలవడం                  |
| Use Case       | Nested structures flatten చేయడం, trees traverse, DFS, backtracking |

---

## 📌 7. Interview Questions & Answers

**Q1. Recursion అంటే ఏమిటి?**
👉 Base condition చేరేవరకు function తను పిలవడం.

**Q2. Recursion key parts ఏవి?**
👉 Base Case (exit point) & Recursive Case (self-call).

**Q3. Recursion ఎందుకు ముఖ్యము?**
👉 Tree traversal, nested structures, permutations, factorial, Fibonacci లాంటి problems simple గా solve చేయడానికి.

**Q4. Base case ఈ problem లో ఏమిటి?**
👉 Value object కాకపోవడం (string, number, etc.).

**Q5. Base case define చెయ్యకపోతే ఏమవుతుంది?**
👉 Infinite recursion → Stack Overflow error.

**Q6. Recursion iteration తో replace చెయ్యవచ్చా?**
👉 అవును, loops/stacks ఉపయోగించి, కానీ recursion elegant.

**Q7. Real-world examples?**
👉 File system traversal, JSON parsing, DOM traversal, DFS, factorial, Fibonacci.

---

✅ **Summary:**
- Recursion = Problem divide → smaller parts solve → results combine.

- Example: Nested objects flatten చేయడం.

- Interviews మరియు real projects లో trees, graphs, parsing, backtracking problems కి essential.

⚡ ఇప్పుడు మీరు recursively nested problems step-by-step solve చేయడం నేర్చుకున్నారు 🚀
