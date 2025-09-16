# ⚡ JavaScript లో Promises  

## 📌 Promise అంటే ఏమిటి?  
Promise అనేది JavaScript లో ఒక object, ఇది asynchronous operations (ఉదా: API calls, setTimeout వంటివి) handle చేయడానికి వాడతారు.  

👉 దాన్ని ఒక future value కోసం container అని అనుకోచ్చు. (ఇప్పుడే రాదు, కానీ తర్వాత వస్తుంది అన్న value ను represent చేస్తుంది).  

---

## 🚀 ఎందుకు Promises అవసరం?  
Promises రాకముందు callbacks వాడేవాళ్లం. కానీ callbacks వల్ల 2 ప్రధాన సమస్యలు వచ్చేవి:  

1. **Inversion of Control** → మనం function ని మరో function కి ఇచ్చేసి, అది call చేస్తుందా లేదా అన్నది blindly trust చేయాలి.  
2. **Callback Hell (Pyramid of Doom)** → nested callbacks వలన code చాలా క్లిష్టంగా, చదవటానికి కష్టంగా మారుతుంది.  

👉 Promises ఈ రెండు problems ని solve చేస్తాయి.  

---

## 🖥️ Example 1 – Callback విధానం (Promise లేకుండా)  
```js
// షాపింగ్ కార్ట్‌లో వేసుకున్న వస్తువుల లిస్ట్
const cart = ["shoes", "pants", "kurta"];

// async ఆపరేషన్‌ని handle చేయడానికి callback function వాడుతున్నాం
createOrder(cart, function (orderId) {
  // ఆర్డర్ సక్సెస్‌ఫుల్‌గా క్రియేట్ అయిన తర్వాత (async complete అయినప్పుడు),
  // ఈ callback function run అవుతుంది, మరియు "orderId" అనే విలువ వస్తుంది.
  
  // ఆ "orderId" ని తరువాతి async function కి పంపుతాం:
  proceedToPayment(orderId);
});

```  

❌ ఇక్కడ మనం `createOrder` function పై depend అవుతున్నాం → ఇది `proceedToPayment` ని సరైన సమయానికి call చేస్తుందా లేదా అని మన control లో ఉండదు.  

---

## 🖥️ Example 2 – Promise విధానం  
```js
const cart = ["shoes", "pants", "kurta"];  

// createOrder returns a Promise
const promiseRef = createOrder(cart);  

promiseRef.then(function (orderId) {  
  proceedToPayment(orderId);  
});
```  

✔ Promises తో మనం callback ను **attach** చేస్తాం, pass చేయము.  
✔ గ్యారంటీ → data ready అయిన తర్వాత ఒకసారి మాత్రమే callback execute అవుతుంది.  

---

## 🖥️ Example 3 – నిజమైన Promise (fetch API)  
```js
const URL = "https://api.github.com/users/octocat";  
const user = fetch(URL); // fetch returns a Promise  

console.log(user); // Promise { <pending> }  

user.then(function (data) {  
  console.log(data); // fulfilled response  
});
```  

✅ **Promise states:**  
- `pending` → మొదట  
- `fulfilled` → success, data వచ్చింది  
- `rejected` → failure  

💡 **Promise objects immutable** → ఒకసారి resolve/reject అయితే state మారదు.  

---

## 🖥️ Example 4 – Callback Hell ❌  
```js
createOrder(cart, function (orderId) {  
  proceedToPayment(orderId, function (paymentInfo) {  
    showOrderSummary(paymentInfo, function (balance) {  
      updateWalletBalance(balance);  
    });  
  });  
});
```  

❌ ఇది చదవటం, maintain చేయటం చాలా కష్టమైపోతుంది → దీనినే **Pyramid of Doom** అంటారు.  

---

## 🖥️ Example 5 – Promise Chaining ✔  
```js
createOrder(cart)
  .then(function (orderId) {  
    return proceedToPayment(orderId);  
  })  
  .then(function (paymentInfo) {  
    return showOrderSummary(paymentInfo);  
  })  
  .then(function (balance) {  
    return updateWalletBalance(balance);  
  });
```  

✔ Clean  
✔ Readable  
✔ ప్రతి `.then()` result ని తర్వాతి `.then()` కి pass చేస్తుంది.  

---

## ✅ Common Mistake  
```js
// ❌ Wrong (return మర్చిపోయాం)
createOrder(cart)
  .then(function (orderId) {  
    proceedToPayment(orderId);  
  })  
  .then(function (paymentInfo) {  
    showOrderSummary(paymentInfo);  
  });

// ✔ Correct
createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))  
  .then((paymentInfo) => showOrderSummary(paymentInfo))  
  .then((balance) => updateWalletBalance(balance));
```  

---

## 📌 Summary  
- **Promise** = future value కోసం placeholder.  
- **Issues solved** = Callback Hell, Inversion of Control.  
- **States** = pending, fulfilled, rejected.  
- **Methods** = `.then()`, `.catch()`, `.finally()`.  
- **Immutable** → ఒకసారి resolve/reject అయితే మారదు.  

---

## 🎯 ఇంటర్వ్యూ Questions & Answers  

**Q1. Promise అంటే ఏమిటి?**  
👉 ఒక async operation యొక్క eventual success/failure ను represent చేసే object.  

**Q2. Promises ఎందుకు వాడాలి?**  
👉 Callback Hell & Inversion of Control తప్పించుకోవడానికి.  

**Q3. Promise states ఏవి?**  
👉 pending, fulfilled, rejected.  

**Q4. Callback vs Promise తేడా?**  
👉 Callbacks → pass చేస్తాం (less control).  
👉 Promises → attach చేస్తాం (more control, readable).  

**Q5. Promise chaining అంటే ఏమిటి?**  
👉 `.then()` methods ని వరుసగా link చేసి async tasks ని order లో run చేయటం.  

**Q6. Promises mutableనా?**  
👉 కాదు, ఒకసారి settle అయితే state మార్చలేం.  

**Q7. Callback Hell అంటే ఏమిటి?**  
👉 Nested callbacks వల్ల code unreadable అవడం (Pyramid of Doom).  

**Q8. Promises దాన్ని ఎలా solve చేస్తాయి?**  
👉 `.then()` chaining ద్వారా nested callbacks లేకుండా clean structure ఇస్తాయి.  

---

✨ **Next Step → Async/Await నేర్చుకోవాలి → ఇది Promises పైన syntactic sugar.**  
