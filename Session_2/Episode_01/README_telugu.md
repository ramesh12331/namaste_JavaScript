# ⚡ Callbacks, Callback Hell & Inversion of Control (JavaScript)

## 📌 Callbacks అంటే ఏమిటి?
- **Callback Function** = ఒక function కి మరో function ని argument గా పంపడం.  
- Async (asynchronous) code రాయడానికి చాలా ఉపయోగపడుతుంది.  

### ✅ Example
```js
console.log("Namaste");
setTimeout(function () {
  console.log("JavaScript");
}, 2000);
console.log("Season 2");
```

👉 Output:
```
Namaste
Season 2
JavaScript
```

⏳ setTimeout callback వలన 2 sec delay తరువాత "JavaScript" print అవుతుంది.

---

### 🎯 Callbacks యొక్క Good Part
- Async code handle చేయడం సులువు అవుతుంది.  
- Browser APIs (setTimeout, event listeners, etc.) లో ఎక్కువగా ఉపయోగిస్తారు.  

---

### ⚠️ Callbacks యొక్క Bad Part (Callback Hell)
ఎక్కువ dependencies ఉన్నప్పుడు functions లో functions nest అవుతూ "Pyramid of Doom" గా మారుతుంది.  
Code చదవటానికి, maintain చేయటానికి చాలా కష్టం అవుతుంది.

❌ Example – Callback Hell
```js
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});
```
👉 ఇలాంటివి చదవటానికి కష్టమవుతాయి → Callback Hell.

---

## 🌀 Inversion of Control
Callback ఇవ్వడం అంటే మన code ని మరో function పై blind trust పెట్టడం.

ఉదా:
```js
api.createOrder(cart, function () {
  api.proceedToPayment();
});
```
👉 ఇక్కడ మనం createOrder మీద depend అవుతున్నాం. కానీ:
- అది proceedToPayment ని ఒక్కసారే కాల్ చేస్తుందా?  
- ఎప్పుడూ కాల్ చేస్తుందా?  
- రెండు సార్లు కాల్ చేస్తుందా?  

అంటే మన code పై control పోతుంది → **Inversion of Control** అని అంటారు.

---

## 📊 Flowchart (Callbacks → Callback Hell → Inversion of Control)
```
                    ┌──────────────────────┐
          │   Normal Callback    │
          │ (Async execution)    │
          └──────────┬───────────┘
                     │
                     ▼
         Example: setTimeout(fn, 2000)
                     │
                     ▼
          ✔ Easy to understand
          ✔ Useful for async code
          ─────────────────────────

                     ▼
          ┌──────────────────────┐
          │    Callback Hell     │
          │ (Nested callbacks)   │
          └──────────┬───────────┘
                     │
                     ▼
   createOrder(cart, function() {
       proceedToPayment(function() {
           showOrderSummary(function() {
               updateWallet();
           });
       });
   });

                     │
                     ▼
          ❌ Hard to read
          ❌ Hard to maintain
          ❌ Pyramid of Doom
          ─────────────────────────

                     ▼
          ┌────────────────────────┐
          │ Inversion of Control   │
          │ (Lose control of flow) │
          └──────────┬─────────────┘
                     │
                     ▼
   We trust parent function
   to call our callback correctly.
   - What if it fails?
   - What if it calls twice?
   - What if it never calls?

                     ▼
          ⚠️ Risky & Unreliable
          → Promises/Async Await
          are better solutions

```

---

## 📌 Summary
- **Callback** → Async code execute చేయడానికి ఉపయోగపడుతుంది.  
- **Callback Hell** → ఎక్కువ nested callbacks ఉన్నప్పుడు చదవటానికి కష్టం.  
- **Inversion of Control** → మనం మరో function పై blind trust పెట్టడం వలన సమస్య.  
- ✅ Solution → Promises లేదా Async/Await వాడటం.  

---

## 🎯 Interview Questions & Answers

**Q1. Callback అంటే ఏమిటి?**  
👉 ఒక function కి మరో function ని argument గా పంపడం.

**Q2. Callback Hell అంటే ఏమిటి?**  
👉 Nested callbacks వల్ల code "Pyramid of Doom" లా మారి చదవటం కష్టం అవుతుంది.

**Q3. Inversion of Control అంటే ఏమిటి?**  
👉 Callback ఇచ్చిన తర్వాత మన code పై control పోయి మరో function మీద depend అవ్వటం.

**Q4. Callback Hell కి solution ఏమిటి?**  
👉 Promises మరియు Async/Await.

**Q5. setTimeout() లో callback ఎలా పని చేస్తుంది?**  
👉 ఇచ్చిన delay తరువాత, callback function ని event loop ద్వారా execute చేస్తుంది.
