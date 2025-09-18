# ⚡ JavaScript లో Promise APIs (తెలుగులో)

JavaScript లో asynchronous పనులను సులభంగా హ్యాండిల్ చేయడానికి Promises వాడుతాం.  
వాటిని హ్యాండిల్ చేయడానికి 4 ముఖ్యమైన APIs ఉన్నాయి:

- **Promise.all()**
- **Promise.allSettled()**
- **Promise.race()**
- **Promise.any()**

---

## 📌 1. Promise.all()
- చాలా promises ని ఒకేసారి (parallel గా) రన్ చేస్తుంది.  
- అన్ని resolve అయినప్పుడు మాత్రమే ఫలితం ఇస్తుంది.  
- ఒకదాని అయినా reject అయితే → మొత్తం fail అవుతుంది.

### ✅ Example
```js
const p1 = new Promise(res => setTimeout(() => res("P1 ✅"), 3000));
const p2 = new Promise(res => setTimeout(() => res("P2 ✅"), 1000));
const p3 = new Promise(res => setTimeout(() => res("P3 ✅"), 2000));

Promise.all([p1, p2, p3])
  .then(results => console.log(results)) // ["P1 ✅","P2 ✅","P3 ✅"]
  .catch(err => console.error(err));
```

### ❌ If one fails
```js
Promise.all([p1, Promise.reject("P2 ❌"), p3])
  .then(console.log)
  .catch(console.error); // "P2 ❌"
```
👉 **ఉపయోగం**: ఒకేసారి APIs కాల్ చేసి అన్ని రిజల్ట్ కావాలి అనుకుంటే.

---

## 📌 2. Promise.allSettled()
- అన్ని promises settle అయ్యేవరకు (resolve లేదా reject) ఆగుతుంది.  
- చివరలో ప్రతి promise status తో కలిపి array ఇస్తుంది.

### ✅ Example
```js
const p1 = Promise.resolve("P1 ✅");
const p2 = Promise.reject("P2 ❌");
const p3 = Promise.resolve("P3 ✅");

Promise.allSettled([p1, p2, p3]).then(console.log);
```

👉 **Output**
```js
[
  { status: "fulfilled", value: "P1 ✅" },
  { status: "rejected", reason: "P2 ❌" },
  { status: "fulfilled", value: "P3 ✅" }
]
```
👉 **ఉపయోగం**: ఫలితాలు అన్నీ కావాలి, కొన్ని fail అయినా సరే.

---

## 📌 3. Promise.race()
- ఏ promise ముందుగా settle (success లేదా fail) అవుతుందో దానినే రిటర్న్ చేస్తుంది.  
- మిగతావి ఇగ్నోర్ అవుతాయి.

### ✅ Example
```js
const p1 = new Promise(res => setTimeout(() => res("P1 ✅"), 3000));
const p2 = new Promise(res => setTimeout(() => res("P2 ✅"), 1000));
const p3 = new Promise((_, rej) => setTimeout(() => rej("P3 ❌"), 2000));

Promise.race([p1, p2, p3])
  .then(console.log)   // "P2 ✅"
  .catch(console.error);
```
👉 **ఉపయోగం**: ఫాస్టెస్ట్ సర్వర్ రిస్పాన్స్ లాగా.

---

## 📌 4. Promise.any()
- మొదటిగా **success** అయ్యే promise ని మాత్రమే రిటర్న్ చేస్తుంది.  
- fail అవుతున్న వాటిని ఇగ్నోర్ చేస్తుంది.  
- అన్నీ fail అయితే → **AggregateError** ఇస్తుంది.

### ✅ Example
```js
const p1 = new Promise((_, rej) => setTimeout(() => rej("P1 ❌"), 1000));
const p2 = new Promise(res => setTimeout(() => res("P2 ✅"), 2000));
const p3 = new Promise((_, rej) => setTimeout(() => rej("P3 ❌"), 3000));

Promise.any([p1, p2, p3])
  .then(console.log)   // "P2 ✅"
  .catch(err => console.error(err.errors));
```
👉 **ఉపయోగం**: ఒక success చాలనిపించే పరిస్థితుల్లో (ఉదా: retry logic).

---

## 📊 Summary Table

| API                | అన్నీ వేచి చూస్తుందా? | మొదటి ఫలితం ఇస్తుందా? | Error Handling        | ఉపయోగం |
|---------------------|--------------------|--------------------|--------------------|---------|
| **Promise.all()**   | ✅ అవును            | ❌ కాదు             | ❌ Fail Fast        | అన్నీ success కావాలి |
| **Promise.allSettled()** | ✅ అవును        | ❌ కాదు             | ✅ Collect All      | success + failure రెండూ కావాలి |
| **Promise.race()**  | ❌ కాదు             | ✅ అవును            | ❌ Success/Fail రెండూ | ఫాస్టెస్ట్ ఫలితం కావాలి |
| **Promise.any()**   | ❌ కాదు             | ✅ మొదటి success    | ✅ Fail ఇగ్నోర్ చేస్తుంది | కనీసం ఒక success చాలనిప్పుడు |

---

## 🎯 ఇంటర్వ్యూ Questions & Answers

**Q1: Promise.all() మరియు Promise.allSettled() తేడా ఏమిటి?**  
👉 Promise.all() ఒకటి fail అయితే మొత్తం fail అవుతుంది, కానీ Promise.allSettled() అన్నీ settle అయ్యాక status ఇస్తుంది.

**Q2: Promise.race() ఎప్పుడు వాడతారు?**  
👉 ఫాస్టెస్ట్ రిస్పాన్స్ కావాలి అనుకున్నప్పుడు.

**Q3: Promise.any() లో అన్నీ fail అయితే ఏమవుతుంది?**  
👉 AggregateError వస్తుంది, అందులో అన్ని error reasons ఉంటాయి.

**Q4: అన్ని రిజల్ట్స్ కావాలి, సేఫ్ ఆప్షన్ ఏది?**  
👉 Promise.allSettled() ✅

**Q5: ఎక్కువగా ఉపయోగించే Promise API ఏది?**  
👉 Promise.all() (Parallel API calls కోసం).

---
