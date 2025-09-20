# 🚀 JavaScript లో Throttling  

**Throttling** అనేది ఒక **Performance Optimization Technique**.  
దీని ఉపయోగం ఏమిటంటే, ఒక function ఎన్ని సార్లు trigger అయినా, అది **ఒక నిర్దిష్ట టైమ్ ఇంటర్వెల్ (delay)** లో **గరిష్టం ఒకసారి మాత్రమే execute అవుతుంది**.  

---

## 📌 Throttling అంటే ఏమిటి?  

- `scroll`, `resize`, `mousemove` లాంటి continuous events చాలా వేగంగా జరిగితే, performance slow అవుతుంది.  
- **Throttling** వల్ల function అనేది **మాత్రం ఒక interval (ఉదా: 300ms)** లో ఒక్కసారి మాత్రమే నడుస్తుంది.  
- ఇలా చేయడం వలన **బ్రౌజర్ performance మెరుగవుతుంది**.  

---

## 📌 Syntax (Throttle Function)

```js
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
```

---

## 📌 Example: Scroll Event లో Throttling  

```js
let count = 0;

const expensiveFunction = () => {
  console.log("API Call...", count++);
};

// Throttle function ను ఉపయోగించడం
const betterFunction = throttle(expensiveFunction, 1000);

window.addEventListener("scroll", betterFunction);
```

👉 ఎంత scroll చేసినా, `expensiveFunction` ప్రతి **1 సెకనుకు ఒక్కసారి మాత్రమే** run అవుతుంది.  

---

## 📌 Polyfill (Custom Implementation)

```js
Function.prototype.myThrottle = function (delay) {
  let lastCall = 0;
  let func = this;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      return func.apply(this, args);
    }
  };
};

// ఉపయోగించడం
const logMessage = function () {
  console.log("Throttled Function Executed");
};

const throttledFn = logMessage.myThrottle(2000);
window.addEventListener("resize", throttledFn);
```

👉 ఇక్కడ మనమే ఒక custom `myThrottle()` method సృష్టించాం.  

---

## 📌 Step by Step ఎలా పని చేస్తుంది?  

1. ముందుగా **lastCall** అనే variable లో చివరి execution time store చేస్తాం.  
2. ప్రతిసారి event trigger అయ్యినప్పుడు, **ఇప్పటి టైమ్ - lastCall ≥ delay** అని చెక్ చేస్తాం.  
3. సరిపోతే function execute అవుతుంది.  
4. కాకపోతే **ignore** అవుతుంది.  

---

## 📌 Debouncing vs Throttling  

| Feature         | Debouncing | Throttling |
|-----------------|------------|------------|
| Definition      | చివరి trigger తరువాత delay తర్వాత execute అవుతుంది | ఒక నిర్దిష్ట interval లో ఒకసారి మాత్రమే execute అవుతుంది |
| Use Case        | Search box, API calls తగ్గించడం | Scroll/Resize optimization |
| Tool Used       | `setTimeout` | `timestamp` |
| Example         | Auto-suggestions | Infinite scroll |

---

## 📌 Real-Life Examples  

1. **Scroll Event** → scroll చేస్తూ ఉన్నప్పుడు APIని వరుసగా కాల్ కాకుండా నిరోధించటం.  
2. **Window Resize** → ప్రతి resize సమయంలో calculations తగ్గించడం.  
3. **Mouse Move/Drag** → animationsలో smoothness కాపాడటం.  
4. **API Rate Limiting** → serverకి ఎక్కువ requests వెళ్లకుండా కంట్రోల్ చేయడం.  

---

## 🎯 Interview Q&A  

### Q1. JavaScript లో Throttling అంటే ఏమిటి?  
👉 ఒక function ను ఒక నిర్దిష్ట interval లో గరిష్టం ఒక్కసారి మాత్రమే execute అయ్యేలా కంట్రోల్ చేయడం.  

---

### Q2. Debouncing & Throttling మధ్య తేడా ఏమిటి?  
👉 **Debouncing** → చివరి event తరువాత మాత్రమే function execute అవుతుంది.  
👉 **Throttling** → నిర్దిష్ట టైమ్ interval లో ఒకసారి మాత్రమే execute అవుతుంది.  

---

### Q3. Throttling ఎలా implement చేస్తారు?  
👉 `lastCall` అనే variable లో previous execution టైమ్ store చేసి, ఇప్పుడు ఉన్న టైమ్ తో compare చేస్తాం.  

---

### Q4. Polyfill రాయగలవా?  
👉 అవును ✅ (పై కోడ్ చూడండి).  

---

### Q5. మీరు ఎక్కడ Throttling ఉపయోగించారు?  
👉 Scroll handling, resize optimization, animations, API rate limiting లో.  

---

✅ ఇలా, ఇప్పుడు నీకు **Throttling గురించి పూర్తిగా అవగాహన** వచ్చింది 🚀  
