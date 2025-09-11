# 🟢 JavaScript లో Closures  

## 📌 Closure అంటే ఏమిటి?
- **Closure** అనేది ఒక **function** తనతో పాటు ఉన్న **lexical scope** (బయటి function లోని variables) ను గుర్తుంచుకోవడం.  
- అంటే, ఒక function తన **parent function లోని variables** ను, ఆ parent function పూర్తయ్యాక కూడా **యాక్సెస్ చేయగలదు**.  

👉 సింపుల్‌గా చెప్పాలంటే:  
*Closure అంటే → "function + దానికి సంబంధించిన lexical scope".*

---

## 📌 Lexical Scope అంటే ఏమిటి?
- JavaScript **lexical (static) scoping** ను ఉపయోగిస్తుంది.  
- ఒక function ఒక variable ను వెతికేటప్పుడు ఇలా చేస్తుంది:
  1. ముందుగా తన **local scope** లో చూస్తుంది.  
  2. దొరకకపోతే తన **parent function scope** లో వెతుకుతుంది.  
  3. ఇంకా దొరకకపోతే **global scope** లో వెతుకుతుంది.  

---

## 📌 Example 1: Basic Closure  

```js
function x() {
  var a = 7;
  function y() {
    console.log(a); // parent లోని variable ను యాక్సెస్ చేస్తుంది
  }
  return y;
}

var z = x();
z();  // Output: 7
```

👉 ఇక్కడ, `y` function ను రిటర్న్ చేసాం. కానీ `a` అనే variable కూడా **మర్చిపోలేదు**, ఎందుకంటే అది **closure** ద్వారా గుర్తుంచుకుంది.  

---

## 📌 Example 2: Nested Closures  

```js
function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();
// Output: 7 900
```

👉 ఇక్కడ:  
- `y` function → `a` (x లోని variable) మరియు `b` (z లోని variable) ను యాక్సెస్ చేస్తుంది.  
- ఇది **closure chaining** వల్ల సాధ్యమైంది.  

---

## ✅ ముఖ్యమైన పాయింట్లు
- Closures ద్వారా:
  - **డేటా హైడింగ్** చేయవచ్చు.  
  - **state ను maintain** చేయవచ్చు.  
  - **private variables** క్రియేట్ చేయవచ్చు.  
  - **function factories** తయారు చేయవచ్చు.  

---

## 🎯 ఇంటర్వ్యూ ప్రశ్నలు (Interview Q&A)

### Q1: Closure అంటే ఏమిటి?
**సమాధానం:**  
Closure అనేది ఒక function తన **outer function scope** ను కూడా యాక్సెస్ చేయగలగడం, అది పూర్తయ్యాక కూడా.

---

### Q2: Closures ఎందుకు ఉపయోగిస్తారు?
**సమాధానం:**  
- **డేటా దాచడానికి** (data hiding).  
- **stateful functions** కోసం.  
- **event handlers, callbacks, functional programming** లో.  

---

### Q3: Real-world Example ఇవ్వండి.
```js
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
```

👉 ఇక్కడ `count` అనే variable ని బయట నుండి direct గా యాక్సెస్ చేయలేము.  
👉 కానీ closure వల్ల `increment()` లో అది కొనసాగుతుంది.  

---

### Q4: Lexical Scope & Closure మధ్య తేడా ఏమిటి?
- **Lexical Scope** → Variable *ఎక్కడ వ్రాశారో* దాని ఆధారంగా scope నిర్ణయించబడుతుంది.  
- **Closure** → Function తన parent scope variables ను *గుర్తుంచుకుని యాక్సెస్ చేయగలదు*.  

---

### Q5: Arrow functions కూడా Closures అవుతాయా?
**సమాధానం:**  
అవును ✅. Arrow functions కూడా lexical scope ను గుర్తుంచుకుంటాయి.  

---

👉 ఇలాగే, **Closures** అనేది JavaScript లో చాలా పవర్‌ఫుల్ కాన్సెప్ట్.  
