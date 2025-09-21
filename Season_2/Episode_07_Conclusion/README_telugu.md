# 🎬 JavaScript అసింక్ & కాంటెక్స్‌ట్ టాపిక్స్ – సింపుల్ డీటెయిల్డ్ సమ్మరీ (తెలుగు)

---

## ✅ ఎపిసోడ్\_01: Callback Hell

**పరిచయం:**
మల్టిపుల్ nested callbacks వల్ల కోడ్ చదవడం కష్టంగా, నిర్వహించలేనివిగా మారుతుంది.

**ఉదాహరణ:**

```javascript
getUser(id, function(user){
  getOrders(user, function(orders){
    getDetails(orders, function(details){
      console.log(details);
    });
  });
});
```

**వివరణ:**

* Deep nesting readability మరియు maintainability ను తగ్గిస్తుంది.
* Debugging మరియు error handling కష్టం.
* పరిష్కారం: Promises లేదా async/await ఉపయోగించి కోడ్ ని flatten చేయండి.

**సారాంశం:**

* Sequential async operations లో Callback hell వస్తుంది.
* Promises మరియు async/await క్లియర్ కోడ్ కోసం ప్రాధాన్యం పొందాయి.

---

## ✅ ఎపిసోడ్\_02: Promises

**పరిచయం:**
Async operation యొక్క భవిష్యత్ విలువను ప్రతినిధ్యం చేస్తుంది. States: Pending → Fulfilled → Rejected.

**ఉదాహరణ:**

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
promise.then(result => console.log(result)).catch(err => console.log(err));
```

**వివరణ:**

* Pending: operation పూర్తి కాలేదు.
* Fulfilled: operation విజయవంతం → `.then()` اجرا అవుతుంది.
* Rejected: operation విఫలమైంది → `.catch()` اجرا అవుతుంది.

**సారాంశం:**

* Promises async flow ను సరళతరం చేస్తుంది.
* Deep nested callbacks నివారిస్తుంది.

---

## ✅ ఎపిసోడ్\_03: Promise సృష్టించడం, Chaining & Error Handling

**పరిచయం:**

* సృష్టించడం: `new Promise((resolve,reject)=>{})`
* Chaining: `.then()` ద్వారా sequential async tasks
* Error handling: `.catch()` ద్వారా chain లో error ను handle చేస్తుంది.

**ఉదాహరణ:**

```javascript
fetchData()
  .then(data => processData(data))
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

**వివరణ:**

* ప్రతి `.then()` గత Promise resolve అయ్యేవరకు వెయిట్ చేస్తుంది.
* `.catch()` చివరలో errors ను centralized గా handle చేస్తుంది.

**సారాంశం:**

* Promise chaining sequential async execution కు అనుకూలం.
* Centralized error handling clean code ను అందిస్తుంది.

---

## ✅ ఎపిసోడ్\_04: async / await

**పరిచయం:**
`async/await` async కోడ్ ను synchronous లా వ్రాయడానికి ఉపయోగిస్తారు.

* `async` function ఎల్లప్పుడూ Promise ను return చేస్తుంది.
* `await` execution ను Promise resolve అయ్యేవరకు pause చేస్తుంది.

**ఉదాహరణ:**

```javascript
async function getData() {
  try {
    let data = await fetch("https://api.example.com");
    console.log(data);
  } catch(err) {
    console.error(err);
  }
}
getData();
```

**వివరణ:**

* `await` async operation పూర్తయ్యేవరకు code ను నిలిపివేస్తుంది.
* `try/catch` errors ను handle చేస్తుంది.
* Nested callbacks కంటే code readability మెరుగ్గా ఉంటుంది.

**సారాంశం:**

* Async/await clean మరియు readable async code కోసం.
* Maintain మరియు debug చేయడం సులభం.

---

## ✅ ఎపిసోడ్\_05: Promise APIs + Interview Focus

**పరిచయం:**
Multiple async tasks కోసం JavaScript Promise utility methods:

* `Promise.all([p1,p2])` → అన్ని promises resolve అయ్యేవరకు వెయిట్ చేస్తుంది.
* `Promise.race([p1,p2])` → ఒక promise settle అయ్యే వెంటనే resolve/reject అవుతుంది.
* `Promise.allSettled([p1,p2])` → అన్ని Promises settle అయ్యేవరకు వెయిట్ చేస్తుంది.

**ఉదాహరణ:**

```javascript
Promise.all([fetchData1(), fetchData2()])
  .then(results => console.log(results))
  .catch(err => console.error(err));
```

**వివరణ:**

* Multiple async tasks parallel గా run అయ్యేటప్పుడు ఉపయోగకరం.
* Multiple API calls లేదా data fetches efficiently handle చేయవచ్చు.

**సారాంశం:**

* Promise APIs multiple async operations ను సులభంగా నిర్వహిస్తుంది.
* Real-world applications మరియు coding interviews కోసం అవసరం.

---

## ✅ ఎపిసోడ్\_06: this keyword in JavaScript

**పరిచయం:**
`this` ప్రస్తుత execution context లేదా object ను సూచిస్తుంది.

**Rules:**

* Global function: this → window (browser) / global (Node.js)
* Object method: this → object itself
* Arrow function: this → lexical context
* call/apply/bind: explicitly set this

**ఉదాహరణ:**

```javascript
let obj = { name: "Ramesh", greet() { console.log(this.name); } };
obj.greet(); // Ramesh
```

**వివరణ:**

* Method call లో, `this` object ను సూచిస్తుంది.
* Arrow functions లో, `this` function define అయిన context retain చేస్తుంది.
* call/apply/bind `this` ను explicitly override చేస్తాయి.

**సారాంశం:**

* `this` ను సరిగ్గా అర్థం చేసుకోవడం object మరియు function behavior కొరకు ముఖ్యము.
* DOM events, classes, advanced JS patterns లో అవసరం.

---

# 📌 Overall Summary

* Callback → Promises → async/await: Async code ను సులభంగా హ్యాండిల్ చేయడం కోసం evolution.
* Promise APIs: Multiple async operations efficiently handle చేయడం.
* `this` keyword: Objects మరియు functions కోసం correct context నిర్ధారిస్తుంది.
* Real-world usage: API calls, event handling, frontend coding interviews.
