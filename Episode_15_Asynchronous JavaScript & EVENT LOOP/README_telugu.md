
# ⏳ Asynchronous JavaScript & Event Loop (తెలుగులో)

## 📌 Asynchronous JavaScript అంటే ఏమిటి?

- **JavaScript ఒక single-threaded language** → అంటే ఒకేసారి ఒక task మాత్రమే చేయగలదు.  
- కానీ, browser ఇచ్చే **Web APIs**, **Event Loop**, **Callback Queue**, **Microtask Queue** వలన async పనులు కూడా handle చేస్తుంది.  

👉 **Call Stack** ఒక్క execution context‌ను ఒకేసారి execute చేస్తుంది.  
👉 Browser మాత్రం అదనపు features ఇస్తుంది:  
   - **setTimeout()**  
   - **fetch()**  
   - **DOM APIs**  
   ఇవి JavaScript భాగం కావు → browser ఇచ్చే extra superpowers.

---

## ✅ Example 1 – setTimeout

```js
console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 2000);

console.log("End");
```

### 🔎 Execution Flow (step by step):
1. `"Start"` → Call Stack‌లోకి వెళ్ళి వెంటనే console లో print అవుతుంది.  
2. `setTimeout(cb, 2000)` → Browser Timer ప్రారంభమవుతుంది. cb()ను నిల్వ చేసి **Callback Queue** లో పెడుతుంది (2s తర్వాత).  
3. `"End"` → వెంటనే console లో print అవుతుంది.  
4. **Event Loop** → Call Stack ఖాళీగా ఉందా అని చూస్తుంది. ఖాళీగా ఉంటే callback ను Call Stack‌లోకి పెడుతుంది.  
5. `"Callback"` print అవుతుంది.  

👉 **Output:**
```
Start
End
Callback
```

---

## ✅ Example 2 – setTimeout + fetch

```js
console.log("Start");

setTimeout(() => console.log("CB Timeout"), 5000);

fetch("https://api.netflix.com").then(() => {
  console.log("CB Netflix");
});

console.log("End");
```

### 🔎 Execution Flow:
1. `"Start"` → console లో print అవుతుంది.  
2. `setTimeout` → Timer ప్రారంభమై, callback **Callback Queue** లోకి వెళ్తుంది (5s తర్వాత).  
3. `fetch()` → Promise return చేస్తుంది. `.then()` callback **Microtask Queue** లోకి వెళ్తుంది (~2s తర్వాత).  
4. `"End"` → console లో print అవుతుంది.  
5. **Event Loop Priority** →  
   - ముందు Microtask Queue callbacks execute అవుతాయి.  
   - తర్వాత Callback Queue callbacks వస్తాయి.  

👉 **Output:**
```
Start
End
CB Netflix   // Microtask Queue ముందు
CB Timeout   // తర్వాత Callback Queue
```

---

## 📌 Key Concepts (తెలుగులో)

### 1. **Event Loop**
- ఎప్పటికీ నడుస్తూ ఉంటుంది.  
- Call Stack ఖాళీగా ఉందా అని చూస్తుంది. ఖాళీగా ఉంటే, Queue నుండి callback ను Call Stack లో పెడుతుంది.  

### 2. **Callback Queue (Task Queue)**
- setTimeout, DOM Events వంటివి ఇక్కడ నిల్వ అవుతాయి.  

### 3. **Microtask Queue**
- Promises (`.then`, `.catch`)  
- MutationObserver  
👉 ఇవి **HIGH Priority** కలిగినవి → ఎప్పుడూ ముందుగా execute అవుతాయి.  

### 4. **Starvation**
- Microtask Queue నిరంతరం కొత్త tasks push చేస్తే, Callback Queue లో ఉన్న tasks ఎప్పటికీ execute కావు. → దీనినే starvation అంటారు.  

---

## 📌 Summary (తెలుగులో)

1. **JS Engine** → Call Stack ను run చేస్తుంది.  
2. **Browser Web APIs** → setTimeout, fetch, DOM APIs ఇస్తుంది.  
3. **Event Loop** → Call Stack & Queues ని coordinate చేస్తుంది.  
4. **Queues**:  
   - **Microtask Queue** → Promises, MutationObserver → High Priority.  
   - **Callback Queue** → setTimeout, DOM events → Normal Priority.  

⚡ **In short:**  
- Event Loop వలనే Async JS సాధ్యం అవుతుంది.  
- **Microtask Queue > Callback Queue**  
- **fetch (Promises) setTimeout కంటే ముందే execute అవుతుంది.**

---

## 🎯 Interview Questions (తెలుగులో)

**Q1. Event Loop ఎప్పుడు start అవుతుంది?**  
👉 Event Loop ఎప్పుడూ నడుస్తూనే ఉంటుంది. Call Stack ఖాళీగా ఉందా అని చూస్తుంది.  

**Q2. Callback Queue & Microtask Queue మధ్య తేడా ఏమిటి?**  
👉 రెండింటిలో async callbacks ఉంటాయి. కానీ **Microtask Queue కి ఎక్కువ priority** ఉంటుంది.  

**Q3. setTimeout(fn, 0) వాడితే వెంటనే run అవుతుందా?**  
👉 కాదు. Call Stack ఖాళీ అయిన తర్వాతే run అవుతుంది. Stack busy అయితే delay అవుతుంది.  

**Q4. fetch callback setTimeout కంటే ముందే ఎందుకు execute అవుతుంది?**  
👉 fetch → Promises → Microtask Queue లోకి వెళ్తుంది. ఇది setTimeout ఉన్న Callback Queue కంటే ముందే execute అవుతుంది.  

**Q5. Unused Event Listeners ఎందుకు remove చేయాలి?**  
👉 అవి Web API లో శాశ్వతంగా ఉండిపోతాయి. Garbage Collector clean చేయలేడు → memory leaks వస్తాయి.  
