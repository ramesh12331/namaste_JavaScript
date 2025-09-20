# 🔑 JavaScript లో Debouncing

Debouncing అనేది **Performance Optimization Technique**.  
ఒక function తరచుగా కాల్ అవుతున్నప్పుడు, అది unnecessaryగా చాలా సార్లు execute కాకుండా,  
చివరి call తర్వాత మాత్రమే ఒకసారి run అవ్వడానికి Debounce ఉపయోగిస్తారు.  

---

## 📌 Debouncing అంటే ఏమిటి?

- ఒక function repeatedly trigger అయినప్పుడు (ఉదా: search box typing, window resize, scroll events),  
  Debounce వల్ల చివరి input వచ్చిన తర్వాత మాత్రమే function execute అవుతుంది.  
- దీని వల్ల **API calls తగ్గుతాయి** మరియు **Performance మెరుగుపడుతుంది**.

---

## 📌 Syntax

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

---

## 📌 Example: Search Input తో Debounce

```js
let count = 0;

const getData = () => {
  console.log("Fetching Data...", count++);
};

const debounce = function (fn, d) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, d);
  };
};

const betterFunction = debounce(getData, 300);

// Suppose this is attached to a search input event
document.getElementById("search").addEventListener("input", betterFunction);
```

👉 ఈ ఉదాహరణలో, search box లో టైప్ చేస్తే ప్రతి key strokeకి API call జరగదు.  
300ms (delay) తర్వాత మాత్రమే చివరి టైపింగ్ ఆధారంగా API call అవుతుంది.

---

## 📊 Real-life Use Cases

- **Search Suggestions** → User టైప్ చేస్తున్నప్పుడు unnecessary API calls ఆపటానికి.  
- **Window Resize Events** → Resize జరుగుతున్నప్పుడు చివర్లో మాత్రమే function execute చేయటానికి.  
- **Button Click Prevention** → Repeated clicks వల్ల duplicate actions ఆపటానికి.  

---

## 📊 Summary Table

| Concept       | Explanation |
|---------------|-------------|
| Debouncing    | చివరి event తర్వాత మాత్రమే function execute అవుతుంది |
| Main Use      | Reduce unnecessary function calls |
| Example Uses  | Search bar, Resize event, Scroll event, Button click prevention |
| Tools Used    | setTimeout + clearTimeout |

---

## 🎯 Interview Questions & Answers

**Q1. Debouncing అంటే ఏమిటి?**  
👉 Function repeatedగా trigger అయినప్పుడు, చివరి trigger తర్వాత మాత్రమే execute అయ్యే విధానం.

**Q2. Throttling & Debouncing మధ్య తేడా ఏమిటి?**  
- Debouncing → చివరి event తర్వాత మాత్రమే execute అవుతుంది.  
- Throttling → ఒక fixed interval కి ఒకసారి execute అవుతుంది.  

**Q3. Debounce ఎలా implement చేస్తారు?**  
👉 setTimeout మరియు clearTimeout వాడి, ప్రతి కొత్త event కి పాత timer clear చేసి, కొత్త timer start చేస్తాం.

**Q4. Real-time examples చెప్పండి?**  
👉 Search suggestions, Scroll events, Window resize handling.  

---

✅ ఇలా మీరు Debouncing ని implement చేసి performance improve చేయవచ్చు 🚀
