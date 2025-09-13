# JavaScript: Closures, setTimeout, మరియు Loop ప్రవర్తన

ఈ README లో `setTimeout` లూప్ లో ఎలా పని చేస్తుందో, `var` మరియు `let` తేడా ఏమిటో, అలాగే Closures గురించి వివరిస్తుంది.  

---

## 🔹 సింపుల్ ఎక్స్ప్లనేషన్

- `setTimeout` → కోడ్‌ని ఒక డిలే తర్వాత నడుపుతుంది.  
- `var` → **function-scoped** → లూప్‌లో అన్ని callbacks ఒకే `i`ని పంచుకుంటాయి.  
- `let` → **block-scoped** → లూప్ ప్రతి iterationకి కొత్త `i` సృష్టిస్తుంది.  
- **Closure** → ఒక function తన outer scope variablesని గుర్తుంచుకోవడం.  

---

## 🔹 డీటైల్డ్ ఎక్స్ప్లనేషన్

### ఉదాహరణ 1: `var` తో
```js
function x() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript");
}
x();
```

**ఎగ్జిక్యూషన్ ఫ్లో:**
1. లూప్ `i = 1` నుండి `i = 5` వరకు ఫాస్ట్‌గా నడుస్తుంది.  
2. ప్రతి సారి ఒక టైమర్ schedule అవుతుంది.  
3. లూప్ అయిపోయే సమయానికి `i = 6`.  
4. అన్ని callbacks అదే `i`ని యాక్సెస్ చేస్తాయి.  
5. Output:  
```
Namaste JavaScript
6
6
6
6
6
```

---

### ఉదాహరణ 2: `let` తో
```js
function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript");
}
x();
```

**ఎగ్జిక్యూషన్ ఫ్లో:**
1. లూప్ `i = 1` నుండి `i = 5` వరకు నడుస్తుంది.  
2. ప్రతి iteration కి కొత్త `i` సృష్టించబడుతుంది.  
3. ప్రతి టైమర్ తన `i`ని గుర్తుంచుకుంటుంది.  
4. Output:  
```
Namaste JavaScript
1
2
3
4
5
```

---

### ఉదాహరణ 3: Closure (IIFE) ఉపయోగించి `var` ఫిక్స్ చేయడం
```js
function x() {
    for (var i = 1; i <= 5; i++) {
        (function (i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        })(i);
    }
    console.log("Namaste JavaScript");
}
x();
```

**వివరణ:**  
ఇక్కడ **IIFE (Immediately Invoked Function Expression)** ప్రతి iteration కి ఒక కొత్త scope సృష్టిస్తుంది.  
కాబట్టి output `let` లాగా వస్తుంది.  

---

## 🔹 ముఖ్యమైన కాన్సెప్ట్స్

- **Closure** → Function + తన lexical environment.  
- **Event Loop** → async operations (`setTimeout` వంటివి) హ్యాండిల్ చేస్తుంది.  
- **var vs let** →  
  - `var`: function-scoped → ఒకే variable షేర్ అవుతుంది.  
  - `let`: block-scoped → ప్రతి iterationకి కొత్త variable వస్తుంది.  

---

## 🔹 ఇంటర్వ్యూ ప్రశ్నలు & సమాధానాలు

### Q1: ఎందుకు `var` వాడితే అన్ని setTimeout లో ఒకే number ప్రింట్ అవుతుంది?
**Answer:**  
`var` function-scoped కాబట్టి. లూప్ ముగిసిన తర్వాత, అన్ని callbacks `i = 6`ని యాక్సెస్ చేస్తాయి.  

---

### Q2: దీన్ని ఎలా ఫిక్స్ చేయాలి?
**Answer:**  
1. `var` బదులు `let` వాడాలి.  
2. లేదా Closure (IIFE) వాడాలి.  

---

### Q3: Closure అంటే ఏమిటి?
**Answer:**  
ఒక function తన outer function variablesని యాక్సెస్ చేయగలిగితే, దాన్ని closure అంటారు — outer function ముగిసిన తర్వాత కూడా.  

---

### Q4: `"Namaste JavaScript"` ఎందుకు ముందు ప్రింట్ అవుతుంది?
**Answer:**  
ఎందుకంటే అది synchronous కోడ్, కానీ `setTimeout` asynchronous — అది event loop ద్వారా తర్వాత execute అవుతుంది.  

---

### Q5: `setTimeout` డిలే సరిగ్గా జరుగుతుందా?
**Answer:**  
కాదు. `setTimeout` ఇచ్చిన టైం **కంటే ఎక్కువ కాకుండా** తర్వాతే execute అవుతుంది, కానీ నిజమైన టైమింగ్ event loop మీద ఆధారపడుతుంది.  

---

## 🔹 Summary

- లూప్‌లో numbers సరైన క్రమంలో రావాలంటే `let` వాడాలి.  
- Closures → JavaScript లో బాగా ముఖ్యమైన కాన్సెప్ట్.  
- Event loop → ఇంటర్వ్యూలలో చాలా ఎక్కువగా అడుగుతారు.  
