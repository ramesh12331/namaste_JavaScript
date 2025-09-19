# ⚡ Async & Await in JavaScript (తెలుగులో)

## 📌 చర్చించే విషయాలు
- async అంటే ఏమిటి?
- await అంటే ఏమిటి?
- Async/Await ఎలా పనిచేస్తుంది?
- Example usage
- Error Handling
- Async/Await vs Promise .then/.catch
- Interview Q&A

---

## 🚀 async అంటే ఏమిటి?
- `async` అనేది function ముందు వాడే keyword.
- ఒక async function ఎప్పుడూ **Promise** ను return చేస్తుంది.
- మనం సాధారణ value ఇచ్చినా, అది ఆటోమేటిక్‌గా Promise లో wrap అవుతుంది.

### ✅ Example
```js
async function getData() {
  return "Hello JavaScript";
}

const dataPromise = getData();
console.log(dataPromise); // Promise {<fulfilled>: "Hello JavaScript"}

dataPromise.then((res) => console.log(res)); // Hello JavaScript
```

👉 సాధారణ value ఇచ్చినా, అది Promise రూపంలో వస్తుంది.

---

## ⏳ await అంటే ఏమిటి?
- `await` అనేది **async function లోపల మాత్రమే** వాడగలం.
- ఇది Promise resolve/reject అయ్యే వరకు function execution **pause** చేస్తుంది.

### ✅ Example
```js
const p = new Promise((resolve) => {
  setTimeout(() => resolve("✅ Promise resolved"), 2000);
});

async function handlePromise() {
  console.log("Start");
  const result = await p; // ఇక్కడ 2 sec వరకు ఆగుతుంది
  console.log(result);
  console.log("End");
}

handlePromise();
```

### ⏱ Output:
```
Start
(2 sec తరువాత) ✅ Promise resolved
End
```

👉 `.then()` వాడినట్లే కానీ, కోడ్ సింపుల్‌గా, చదవడానికి easyగా ఉంటుంది.

---

## ⚙️ Async/Await ఎలా పనిచేస్తుంది?
- JavaScript ఒక **single-threaded language**.
- `await` వాడినప్పుడు:
  - Function pause అవుతుంది.
  - JS engine meantime లో ఇతర పనులు కొనసాగిస్తుంది.
  - Promise resolve అయిన వెంటనే function మళ్లీ resume అవుతుంది.

👉 నిజంగా wait చేయదు, function ను మాత్రమే నిలిపేస్తుంది.

---

## 📝 Real World Example
```js
async function fetchUser() {
  const response = await fetch("https://api.github.com/users/octocat");
  const data = await response.json();
  console.log(data);
}

fetchUser();
```

👉 `fetch()` ఒక Promise ఇస్తుంది.  
👉 `.json()` కూడా Promise ఇస్తుంది.  
👉 ఇవి రెండూ సులభంగా `await` తో handle అవుతాయి.

---

## ⚠️ Error Handling

### ✅ try...catch ఉపయోగించడం
```js
async function fetchUser() {
  try {
    const response = await fetch("https://invalid-url");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("❌ Error:", err.message);
  }
}
fetchUser();
```

### ✅ Alternative
```js
fetchUser().catch((err) => console.log("❌ Error:", err.message));
```

---

## 🔄 Async/Await vs Promise .then/.catch
- **Async/Await** అనేది Promises మీద సింపుల్ syntax.
- Inside గా Promises నే వాడుతుంది.

### ✅ Pros (లాభాలు)
- కోడ్ readable, clean గా ఉంటుంది.
- Callback hell తప్పించవచ్చు.

### ❌ Cons (లోపాలు)
- Error handling కోసం try...catch వాడాలి.
- Sequential `await` వాడితే కొన్ని cases లో performance slow అవుతుంది.

---

## 📌 Summary
- `async` → function ఎల్లప్పుడూ Promise return చేస్తుంది.
- `await` → Promise resolve అయ్యే వరకు execution pause అవుతుంది.
- `.then/.catch` కన్నా సులభంగా ఉంటుంది.
- కోడ్ synchronous లాగా కనిపిస్తుంది కానీ async గా పని చేస్తుంది.

---

## 🎯 Interview Questions & Answers

**Q1. async అంటే ఏమిటి?**  
👉 async function ఎల్లప్పుడూ Promise return చేస్తుంది.

**Q2. await అంటే ఏమిటి?**  
👉 Promise resolve/reject అయ్యే వరకు function execution pause చేస్తుంది.

**Q3. async function vs normal function?**  
👉 Normal function → direct value ఇస్తుంది.  
👉 async function → ఎప్పుడూ Promise return చేస్తుంది.

**Q4. Async/Await ఎలా పనిచేస్తుంది?**  
👉 Promise resolve అయ్యే వరకు function execution pause అవుతుంది. తరువాత మళ్లీ resume అవుతుంది.

**Q5. Error Handling ఎలాచేస్తారు?**  
👉 try...catch లేదా .catch() తో handle చేస్తారు.

**Q6. async/await vs .then/.catch?**  
👉 రెండూ Promises మీదే ఆధారపడి ఉంటాయి. కానీ async/await వాడితే కోడ్ clean & readable అవుతుంది.

**Q7. await ను async function వెలుపల వాడగలమా?**  
👉 ❌ No, await ఎల్లప్పుడూ async function లోపలే వాడాలి.
