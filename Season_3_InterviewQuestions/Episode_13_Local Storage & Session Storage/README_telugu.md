
# 🗄️ Web Storage API – localStorage & sessionStorage

**Web Storage API** అనేది బ్రౌజర్‌లో key-value జంటలుగా డేటాను నిల్వ చేసే విధానం.

* **localStorage** → బ్రౌజర్ మూసినా కూడా డేటా ఉంటుంది.
* **sessionStorage** → బ్రౌజర్ ట్యాబ్ మూసేవరకు మాత్రమే డేటా ఉంటుంది.

---

## 📌 1. localStorage అంటే ఏమిటి?

* Expiration date లేకుండా డేటాను నిల్వ చేస్తుంది.
* Data అన్ని browser sessions లో కూడా అందుబాటులో ఉంటుంది.

```javascript
// డేటా save చేయడం
localStorage.setItem("username", "Ramesh");

// డేటా పొందడం
console.log(localStorage.getItem("username")); // "Ramesh"

// డేటా తీసివేయడం
localStorage.removeItem("username");

// అన్ని డేటా clear చేయడం
localStorage.clear();
```

---

## 📌 2. sessionStorage అంటే ఏమిటి?

* ఒక session కి మాత్రమే డేటాను నిల్వ చేస్తుంది.
* Tab లేదా page మూసిన వెంటనే డేటా తొలగిపోతుంది.

```javascript
// డేటా save చేయడం
sessionStorage.setItem("user", "Ramesh");

// డేటా పొందడం
console.log(sessionStorage.getItem("user")); // "Ramesh"

// డేటా తీసివేయడం
sessionStorage.removeItem("user");

// అన్ని డేటా clear చేయడం
sessionStorage.clear();
```

---

## 📌 3. localStorage లో objects నిల్వ చేయగలమా?

👉 అవును, కానీ **JSON.stringify()** మరియు **JSON.parse()** వాడాలి.

```javascript
let user = { name: "Ramesh", age: 25 };

// Object ను Store చేయడం
localStorage.setItem("user", JSON.stringify(user));

// Object ను Retrieve చేయడం
let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Ramesh
```

---

## 📊 4. Local Storage ఉపయోగించే కంపెనీలు

* **Flipkart** → Cart items ని తాత్కాలికంగా నిల్వ చేస్తుంది, page reload అయినా పోవకుండా.
* **Paytm** → User preferences, theme, temporary session data ని వేగంగా load కావడానికి నిల్వ చేస్తుంది.

---

## 📌 5. Machine Coding Rounds లో ఎందుకు ముఖ్యము?

**Web/UI Developer Interviews** లో మీరు చేయమని అడగవచ్చు:

* localStorage ఉపయోగించి cart system నిర్మించడం.
* Page refresh అయినా form data నిల్వ చేయడం.
* Login/session flow అమలు చేయడం.

👉 ఇది **state persistence** (data నిల్వ చేయడం) మీద మీ అవగాహనను పరీక్షిస్తుంది.

---

## 📌 6. Summary Table

| Feature       | localStorage                   | sessionStorage           |
| ------------- | ------------------------------ | ------------------------ |
| Lifespan      | Clear చేసే వరకు               | Tab/browser close అయిన వెంటనే |
| Capacity      | సుమారు 5–10 MB                 | సుమారు 5 MB             |
| Shared Across | అన్ని tabs/windows (same origin)| ఒకే tab లో మాత్రమే        |

---

## 📌 7. ఇంటర్వ్యూ ప్రశ్నలు & సమాధానాలు

**Q1. localStorage & sessionStorage మధ్య తేడా ఏమిటి?**
👉 localStorage clear చేసే వరకు ఉంటుంది, sessionStorage tab close అవగానే తొలగిపోతుంది.

**Q2. localStorage లో objects నిల్వ చేయగలమా?**
👉 కాదు, నేరుగా కాదు. JSON.stringify() & JSON.parse() వాడాలి.

**Q3. localStorage storage limit ఎంత?**
👉 Browser ఆధారంగా సుమారు 5–10 MB.

**Q4. Cookies కంటే Web Storage ఎందుకు ఉపయోగించాలి?**
👉 Web Storage పెద్దది, వేగంగా ఉంటుంది, ప్రతి request తో server కి పంపబడదు.

**Q5. Real-world use cases?**
👉 Shopping cart, theme preferences, form draft saving.

---

✅ **సంక్షిప్తంగా:** Web Storage API అనేది బ్రౌజర్‌లో డేటా నిల్వ చేయడానికి ఉపయోగపడుతుంది. ఇది user experience కి ఉపయోగకరంగా ఉండటంతో పాటు, interviews లో కూడా చాలా ముఖ్యం. 🚀
