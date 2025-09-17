# ⚡ JavaScript లో Promise, Chaining & Error Handling

## 📌 Promise అంటే ఏమిటి?

* **Promise** = JavaScript లో ఒక object, ఇది asynchronous operation **success (✅ resolve)** అయ్యిందా లేదా **failure (❌ reject)** అయ్యిందా అని future లో result ఇస్తుంది.
  👉 ఉదాహరణ: *"నేను నీకు తర్వాత ఫలితం ఇస్తానని వాగ్దానం చేస్తున్నాను."*

---

## 🚀 Promise Create చేయడం

JavaScript లో `Promise` constructor ఉంటుంది.
దీనికి ఒక function ఇస్తాం, అందులో రెండు parameters ఉంటాయి:

* `resolve(value)` → విజయవంతంగా పూర్తయితే (success).
* `reject(error)` → ఎర్రర్ జరిగితే (failure).

### Example

```js
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      reject(new Error("Cart is not Valid"));
    }

    const orderId = "12345"; // Mock orderId from DB
    resolve(orderId);
  });
}

const cart = ["shoes", "pants", "kurta"];
const promise = createOrder(cart);

console.log(promise); // Promise {<pending>}

promise.then(function (orderId) {
  console.log("Order created with ID:", orderId);
});
```

👉 మొదట promise pending state లో ఉంటుంది.
👉 resolve అయినప్పుడు `.then()` లోని callback execute అవుతుంది.

---

## ⚠️ Error Handling with `.catch()`

ఏదైనా తప్పు జరిగితే `.catch()` వాడి error handle చేసుకోవచ్చు.

```js
const cart = [];

createOrder(cart)
  .then(function (orderId) {
    console.log("Order ID:", orderId);
    return proceedToPayment(orderId);
  })
  .catch(function (err) {
    console.log("Error:", err.message);
  });
```

---

## 🔗 Promise Chaining

Multiple async tasks ని ఒకదాని తర్వాత ఒకటి run చేయడానికి వాడతాం.
ఒక `.then()` నుంచి return అయిన data → next `.then()` కు input అవుతుంది.

```js
createOrder(cart)
  .then(function (orderId) {
    console.log("Order ID:", orderId);
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log("Payment Info:", paymentInfo);
  })
  .catch(function (err) {
    console.log("Error:", err.message);
  });

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful for Order: " + orderId);
  });
}
```

✅ కోడ్ clean & readable అవుతుంది.
❌ Promise reject అయితే → `.catch()` కు వెళ్తుంది.

---

## 🎯 Multiple `.catch()` Handling

వివిధ స్థాయిల్లో errors ను handle చేయవచ్చు.

```js
createOrder(cart)
  .then(function (orderId) {
    console.log("Order ID:", orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log("Validation Failed:", err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log("Payment Failed:", err.message);
  });
```

---

## 📊 Promise States

* **Pending** → మొదటి state
* **Fulfilled** → success (resolve)
* **Rejected** → failure (reject)

---

## 📌 Summary

* `new Promise((resolve, reject) => {})` → Promise create చేయడానికి
* `.then()` → success handle చేయడానికి
* `.catch()` → failure handle చేయడానికి
* **Promise Chaining** → ఒకదాని తర్వాత ఒకటి async operations run చేయడానికి
* Error వచ్చినప్పుడు → `.catch()` కు వెళ్తుంది
* Promises వాడితే **Callback Hell తగ్గుతుంది** → కోడ్ clean అవుతుంది

---

## 🎯 Interview Q\&A

**Q1. Promise అంటే ఏమిటి?**
👉 Async operation యొక్క future result represent చేసే object.

**Q2. Promise ఎలా create చేస్తారు?**
👉 `new Promise((resolve, reject) => {...})` తో.

**Q3. Promise States ఏవీ?**
👉 pending, fulfilled, rejected.

**Q4. resolve & reject మధ్య తేడా ఏమిటి?**
👉 `resolve(value)` = success, `reject(error)` = failure.

**Q5. Promise Chaining అంటే ఏమిటి?**
👉 `.then()` → return అయిన value next `.then()` కు input అవుతుంది.

**Q6. Errors ను ఎలా handle చేస్తారు?**
👉 `.catch()` వాడి.

**Q7. `.then()` లో return మర్చిపోతే ఏమవుతుంది?**
👉 Next `.then()` కు data వెళ్ళదు, chain break అవుతుంది.
