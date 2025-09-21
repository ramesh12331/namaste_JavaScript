# 🔁 JavaScript Curried Sum Function – Core Fundamentals (తెలుగు)

Currying అనేది **function calls ను chaining చేయడం** సాధ్యపడుతుంది, ప్రతి call ఒక parameter పాస్ చేసి కొత్త function return చేస్తుంది, చివరి callలో final result return అవుతుంది.

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

**వివరణ:**

* ప్రతి call `a` కి number add చేస్తుంది.
* ఎప్పుడు argument ఇవ్వకపోతే (empty call `()`), accumulated sum return అవుతుంది.

---

## 📌 2. Ternary Operator ఉపయోగించడం

```javascript
let sum = function(a){
    return function(b){
       return b ? sum(a+b) : a;
    }
}
console.log(sum(1)(2)(3)(4)()); // 10
```

* Shorter version, ternary operator ద్వారా if-else replace చేస్తుంది.

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

* Arrow function syntax cleaner గా ఉంటుంది.

### Shortest ES6 Version

```javascript
let sum = (a) => (b) => b ? sum(a+b) : a;
console.log(sum(1)(2)(3)(4)()); // 10
```

---

## 📌 4. Step-by-Step Execution

1. `sum(1)` → next number కోసం function return అవుతుంది.
2. `sum(1)(2)` → next number కోసం function return అవుతుంది.
3. `sum(1)(2)(3)` → chaining కొనసాగుతుంది.
4. `sum(1)(2)(3)(4)()` → final sum `10` return అవుతుంది.

ప్రతి function call **previous sum ని closures ద్వారా గుర్తు ఉంచుతుంది**.

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

| Concept           | వివరణ                                                  |
| ----------------- | ------------------------------------------------------ |
| Currying          | Final call వరకు function మరో function return చేస్తుంది |
| Closure           | Accumulated sum ని track చేస్తుంది                     |
| Base Case         | Empty call `()` accumulated sum return చేస్తుంది       |
| Recursive Case    | Number pass అయితే new function return అవుతుంది         |
| Syntax Variations | Classic, Ternary, ES6 arrow function                   |

---

## 📌 7. Interview Questions & Answers

**Q1. JavaScript లో currying అంటే ఏమిటి?**
- 👉 Multiple arguments ఉన్న function ను single argument functions chaining లో convert చేయడం.

**Q2. ఈ sum function ఎలా పని చేస్తుంది?**
- 👉 ప్రతి function call accumulated sum add చేస్తుంది మరియు new function return చేస్తుంది, చివరి empty call final value return చేస్తుంది.

**Q3. JavaScript concept ఏమి దీనిని సాధ్యమే చేస్తుంది?**
- 👉 Closures, previous `a` value retain చేస్తుంది.

**Q4. ఇక్కడ if-else ని ternary operator తో replace చేయవచ్చా?**
- 👉 అవును, concise గా ఉంటుంది.

**Q5. Currying real-world examples ఏవి?**
- 👉 Partial application, event handling, function composition, functional programming patterns.

---

✅ **Summary:**
- Currying + Closures = function calls chaining మరియు results accumulate చేయడానికి elegant మార్గం. Example: `sum(1)(2)(3)(4)()`.

- ఇది common interview pattern, closures మరియు function chaining understanding test చేయడానికి.
