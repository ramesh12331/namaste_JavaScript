# ⚡ Event Bubbling & Capturing (Trickling) in JavaScript - తెలుగు వెర్షన్

---

## 📌 Event Bubbling అంటే ఏమిటి?
- ఒక ఎలిమెంట్ (ఉదా: `child`) పై click చేసినప్పుడు, ఆ ఈవెంట్ మొదట **ఆ ఎలిమెంట్** మీద trigger అవుతుంది.  
- ఆ తరువాత **దాని parent → grandparent → body → html → document** లాగా పైకి వెళుతుంది.  
- అంటే ఈవెంట్ **కిందనుండి పైకి (Bottom → Top)** వెళ్తుంది.  

👉 దీన్నే **Event Bubbling** అంటారు.  
డిఫాల్ట్‌గా JavaScript ఈవెంట్స్ bubbling phase లోనే trigger అవుతాయి.  

---

## 📌 Event Capturing (లేదా Trickling) అంటే ఏమిటి?
- ఇది **Event Bubbling కి విరుద్ధం**.  
- ఈవెంట్ **పైనుండి కిందకి (Top → Bottom)** వస్తుంది.  
- మొదట `document` → `html` → `body` → `grandparent` → `parent` → చివరికి `child`.  

👉 దీన్నే **Capturing Phase** లేదా **Trickling** అంటారు.  

---

## 📌 Syntax
```js
element.addEventListener("click", handler, useCapture);
```
- **useCapture = false (default)** → Bubbling  
- **useCapture = true** → Capturing  

---

## 📌 కోడ్ Examples

### ✅ Bubbling (false లేదా default)
```js
grandparent.addEventListener("click", () => {
  console.log("Grandparent (Bubbling)");
}, false);

parent.addEventListener("click", () => {
  console.log("Parent (Bubbling)");
}, false);

child.addEventListener("click", () => {
  console.log("Child (Bubbling)");
}, false);
```

👉 `child` click చేస్తే Output:
```
Child (Bubbling)
Parent (Bubbling)
Grandparent (Bubbling)
```

---

### ✅ Capturing (true)
```js
grandparent.addEventListener("click", () => {
  console.log("Grandparent (Capturing)");
}, true);

parent.addEventListener("click", () => {
  console.log("Parent (Capturing)");
}, true);

child.addEventListener("click", () => {
  console.log("Child (Capturing)");
}, true);
```

👉 `child` click చేస్తే Output:
```
Grandparent (Capturing)
Parent (Capturing)
Child (Capturing)
```

---

### ✅ Mixed Example
```js
grandparent.addEventListener("click", () => {
  console.log("Grandparent (Capturing)");
}, true);

parent.addEventListener("click", () => {
  console.log("Parent (Bubbling)");
}, false);

child.addEventListener("click", () => {
  console.log("Child (Bubbling)");
}, false);
```

👉 `child` click చేస్తే Output:
```
Grandparent (Capturing)
Child (Bubbling)
Parent (Bubbling)
```

---

### ✅ Propagation ఆపడం (stopPropagation)
```js
child.addEventListener("click", (e) => {
  console.log("Only child runs!");
  e.stopPropagation(); // పైకి లేదా కిందకి వెళ్లదు
}, false);
```

---

### ✅ stopImmediatePropagation
```js
child.addEventListener("click", (e) => {
  console.log("First handler runs");
  e.stopImmediatePropagation();
}, false);

child.addEventListener("click", () => {
  console.log("This will NOT run");
}, false);
```

---

## 📊 Diagram (Flow)

```
Capturing (true):   Document → HTML → Body → Grandparent → Parent → Child
Target Phase:       Child
Bubbling (false):   Child → Parent → Grandparent → Body → HTML → Document
```

---

## 📌 ఇంటర్వ్యూ Questions (తెలుగులో)

### Q1: Event Bubbling అంటే ఏమిటి?
👉 Event కిందనుండి పైకి propagate అవ్వడం.  

### Q2: Event Capturing అంటే ఏమిటి?
👉 Event పైనుండి కిందకి propagate అవ్వడం.  

### Q3: Bubbling & Capturing మధ్య తేడా?
👉 Bubbling → Bottom → Top  
👉 Capturing → Top → Bottom  

### Q4: `addEventListener` లో true / false అంటే ఏమిటి?
👉 `true` → Capturing, `false` → Bubbling (డిఫాల్ట్).  

### Q5: Propagation ను ఆపడం ఎలా?
👉 `event.stopPropagation()` లేదా `event.stopImmediatePropagation()`.  

---

✅ ఇప్పుడు నీకు **Event Bubbling & Capturing** గురించి తెలుగు లో పూర్తి అవగాహన వచ్చింది 🚀  
