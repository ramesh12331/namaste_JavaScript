# ⏳ setTimeout() కి Trust Issues ఎందుకు?

## 📌 setTimeout Behavior

👉 setTimeout() కచ్చితంగా ఇచ్చిన సమయానికి (ఉదా: 5s) రన్ అవుతుందని
గ్యారంటీ ఇవ్వదు.\
అది చెబేది ఏమిటంటే: **"కనీసం"** ఆ సమయం తర్వాత రన్ అవుతుంది కానీ
ఎగ్జాక్ట్ ఆ టైమ్‌కి కాదు.

------------------------------------------------------------------------

## 📌 కారణం

-   JavaScript ఒక **single-threaded language** (ఒక Call Stack మాత్రమే
    ఉంటుంది).\
-   Call Stack busy గా ఉంటే, setTimeout() callback → **Callback Queue**
    లో వెయిట్ చేస్తుంది.\
-   Call Stack ఖాళీ అయిన తర్వాతే అది రన్ అవుతుంది.

------------------------------------------------------------------------

## ✅ Example -- Blocking Code తో setTimeout()

``` js
console.log("Start");  

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End");  

let startDate = new Date().getTime();
let endDate = startDate;

// Busy wait for 10s → blocks main thread
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("while expires");
```

### Execution Flow:

1.  "Start" → వెంటనే ప్రింట్ అవుతుంది.\
2.  setTimeout(cb, 5000) → Web API లో టైమర్ స్టార్ట్ అవుతుంది.\
3.  "End" → వెంటనే ప్రింట్ అవుతుంది.\
4.  10 seconds busy loop (Call Stack block అవుతుంది).\
5.  టైమర్ 5s కి expire అయినా, callback Queue లో వెయిట్ చేస్తుంది.\
6.  10s తర్వాత Call Stack ఖాళీ అవుతుంది → "Callback" ఎగ్జిక్యూట్
    అవుతుంది.

### 👉 Final Output Order:

    Start
    End
    while expires
    Callback

------------------------------------------------------------------------

## ✅ setTimeout(fn, 0) Example

``` js
console.log("Start");

setTimeout(() => console.log("Timeout 0"), 0);

console.log("End");
```

### Output:

    Start
    End
    Timeout 0

📌 ఎందుకు ఇలా వస్తుంది?\
- 0 ms ఇచ్చినా, callback Callback Queue కి వెళ్తుంది.\
- Call Stack ఖాళీ అయిన తర్వాత మాత్రమే రన్ అవుతుంది.

------------------------------------------------------------------------

## 📖 Summary (తెలుగులో)

-   setTimeout() **minimum delay guarantee** ఇస్తుంది కానీ **exact time
    కాదు**.\
-   Call Stack బిజీగా ఉంటే, callback wait చేస్తుంది.\
-   long-running code (while loops వంటివి) వాడితే async tasks లేట్
    అవుతాయి.\
-   JavaScript single-threaded కాబట్టి **main thread block చేయకూడదు**.

⚡ **Rule: ఎప్పుడూ non-blocking code రాయాలి.**

------------------------------------------------------------------------

## 🎯 Interview Questions (తెలుగులో)

**Q1. setTimeout(fn, 5000) ఇచ్చిన 5s కి ఎగ్జాక్ట్ రన్ అవుతుందా?**\
👉 కాదు. కనీసం 5s తర్వాత రన్ అవుతుంది. అసలు execution Call Stack మీద
ఆధారపడి ఉంటుంది.

**Q2. setTimeout(fn, 0) వెంటనే రన్ అవుతుందా?**\
👉 కాదు. అది Callback Queue లోకి వెళ్ళి, Call Stack ఖాళీ అయిన తర్వాతే
రన్ అవుతుంది.

**Q3. టైమర్ expire అయినప్పుడు Call Stack busy అయితే ఏమవుతుంది?**\
👉 Callback Queue లో వెయిట్ చేస్తుంది. Stack ఖాళీ అయ్యాక మాత్రమే రన్
అవుతుంది.

**Q4. JavaScript concurrency model అంటే ఏమిటి?**\
👉 JavaScript single-threaded. Asynchronous tasks → Web APIs + Event
Loop + Queues ద్వారా handle చేస్తుంది.

**Q5. Main thread block చేస్తే ఎందుకు సమస్య?**\
👉 Async tasks (setTimeout, fetch, DOM events) డిలే అవుతాయి → App
unresponsive అవుతుంది.
