# 🎬 జావాస్క్రిప్ట్ Async & Context Topics – సులభమైన వివరాలు

## ✅ Episode\_01: Callback Hell

* సమస్య: అనేక nested callbacks code చదవడం మరియు maintain చేయడం కష్టంగా అవుతుంది.
* ఉదాహరణ:

```javascript
getUser(id, function(user){
  getOrders(user, function(orders){
    getDetails(orders, function(details){
      console.log(details);
    });
  });
});
```

* పరిష్కారం: Promises లేదా async/await ఉపయోగించి structure సులభం చేయవచ్చు.

## ✅ Episode\_02: Promises

* Async operation యొక్క భవిష్యత్తు విలువను సూచిస్తుంది.
* States: Pending → Fulfilled → Rejected
* ఉదాహరణ:

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("సంపూర్ణం!"), 1000);
});
promise.then(result => console.log(result)).catch(err => console.log(err));
```

## ✅ Episode\_03: Creating a Promise, Chaining & Error Handling

* Creating: `new Promise((resolve, reject) => {...})`
* Chaining: sequential async tasks కోసం `.then()` ఉపయోగించాలి.
* Error Handling: `.catch()` చివర ఉపయోగించాలి.
* ఉదాహరణ:

```javascript
fetchData()
  .then(data => processData(data))
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

## ✅ Episode\_04: async / await

* Async code ను synchronous లా చూపిస్తుంది.
* `async` function Promise return చేస్తుంది.
* `await` Promise resolve అయ్యేవరకు execution నిలిపివేస్తుంది.
* ఉదాహరణ:

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

## ✅ Episode\_05: Promise APIs + Interview Focus

* `Promise.all([p1,p2])` → అన్ని promises కోసం wait చేస్తుంది.
* `Promise.race([p1,p2])` → మొదటి promise resolve/reject అయిన వెంటనే.
* `Promise.allSettled([p1,p2])` → అన్ని settle అయ్యేవరకు wait చేస్తుంది.
* Interviewలో multiple async operations efficiently handle చేయడం important.

## ✅ Episode\_06: this keyword in JavaScript

* ప్రస్తుత object context ను సూచిస్తుంది.
* Rules:

  * Global function: this → window (browser) / global (node)
  * Object method: this → object స్వయం
  * Arrow function: this → lexical context (defined అయిన जगह)
  * call/apply/bind: `this` ను explicitly set చేయవచ్చు
* ఉదాహరణ:

```javascript
let obj = { name: "Ramesh", greet() { console.log(this.name); } };
obj.greet(); // Ramesh
```

# 📌 Overall Summary

* Callbacks → Promises → async/await: Async code clean గా handle చేయడానికి evolution.
* Promise APIs: Multiple async tasks efficiently handle చేయవచ్చు.
* this keyword: Object మరియు function context correct గా understanding కోసం essential.
* Real-world use: API calls, eve
