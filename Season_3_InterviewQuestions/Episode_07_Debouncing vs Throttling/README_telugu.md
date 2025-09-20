# ⏳ Debouncing vs Throttling in JavaScript

Debouncing మరియు Throttling అనేవి **Performance Optimization Techniques**.  
ఇవి ఎక్కువ frequency లో వచ్చే events (scroll, resize, input typing, mouse move) వల్ల functions ఎక్కువసార్లు run కాకుండా నియంత్రించడానికి ఉపయోగిస్తారు.

---

## 📌 Debouncing అంటే ఏమిటి?

- Debouncing అనేది ఒక function ను **చివరి event trigger అయిన తర్వాత కొంత delay తరువాత మాత్రమే** run చేయడం.  
- సాధారణంగా **search box, form validations, resize events** లో ఉపయోగిస్తారు.

### ✅ Syntax (Debounce)
```js
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}
```

---

## 📌 Throttling అంటే ఏమిటి?

- Throttling అనేది ఒక function ను **నిర్దిష్టమైన time interval కి ఒకసారి మాత్రమే** run చేయడం.  
- ఎంత events trigger అయినా, function ప్రతి interval కి ఒకసారి మాత్రమే execute అవుతుంది.  
- సాధారణంగా **scroll, resize, mouse move, API rate limiting** లో ఉపయోగిస్తారు.

### ✅ Syntax (Throttle)
```js
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
```

---

## 📊 Debouncing vs Throttling (తేడాలు)

| Feature    | Debouncing                                    | Throttling                        |
| ---------- | --------------------------------------------- | --------------------------------- |
| Definition | చివరి event trigger అయిన తర్వాత మాత్రమే run అవుతుంది | ప్రతి fixed interval కి run అవుతుంది |
| Use Case   | Search bar, form validations                  | Scroll, resize, mouse events      |
| Tools Used | `setTimeout`, `clearTimeout`                  | Timestamp లేదా `setTimeout`        |
| Example    | User టైప్ ఆపిన తర్వాత మాత్రమే API call         | User scroll చేస్తున్నప్పుడు ప్రతి 500ms కి API call |

---

## 📌 నిజజీవిత Examples

### 🔎 Example 1: Search Bar (E-commerce)
- **Debouncing** → User typing ఆపిన 300ms తర్వాత API call అవుతుంది.  
- **Throttling** → User continuous గా టైప్ చేసినా, ప్రతి 500ms కి ఒక API call అవుతుంది.  

### 🖥️ Example 2: Window Resize
- **Debouncing** → User resize ఆపిన తర్వాత ఒకసారి మాత్రమే function run అవుతుంది.  
- **Throttling** → Resize జరుగుతున్నంత వరకు ప్రతి 200ms కి function run అవుతుంది.  

### 🎮 Example 3: Shooting Game
- **Debouncing** → Player trigger button నొక్కడం ఆపిన తర్వాత gun fire అవుతుంది.  
- **Throttling** → Player continuous గా trigger నొక్కినా, ప్రతి 500ms కి ఒక్కసారి bullet fire అవుతుంది.  

---

## 📊 Visualization

### Debouncing Diagram
```
Event:   |----|----|----|        |----|
Delay:                     [300ms]
Execute:                          ✅
```
👉 చివరి event తర్వాత మాత్రమే execute అవుతుంది.  

### Throttling Diagram
```
Event:   |----|----|----|----|----|----|
Execute: ✅         ✅         ✅
```
👉 Regular intervals లో execute అవుతుంది.  

---

## ⚡ Web Performance Optimization

- **Debouncing** → Unnecessary API calls తగ్గించడానికి (search, input validation).  
- **Throttling** → Continuous computations నియంత్రించడానికి (scroll, resize, animation).  

ఇవి రెండూ **user experience & speed** improve చేయడానికి సహాయపడతాయి.  

---

## ❓ Interview Questions & Answers

### Q1. Debouncing అంటే ఏమిటి?
👉 ఒక function చివరి event trigger అయిన తర్వాత, delay తర్వాత మాత్రమే run అవ్వడం.  

### Q2. Throttling అంటే ఏమిటి?
👉 ఒక function ప్రతి fixed interval కి ఒక్కసారి మాత్రమే run అవ్వడం.  

### Q3. Difference ఏమిటి?
👉 Debouncing → User ఆపే వరకు wait చేసి, తర్వాత ఒక్కసారి run అవుతుంది.  
👉 Throttling → Continuous events లో కూడా ప్రతి interval కి run అవుతుంది.  

### Q4. ఏది బెటర్?
👉 Use case మీద ఆధారపడి ఉంటుంది:  
- **Debounce** → Search, form validations.  
- **Throttle** → Scroll, resize, gaming.  

### Q5. Polyfill రాయగలమా?
👉 అవును, Debounce మరియు Throttle కి మనమే functions రాయగలం (syntax పై ఇచ్చాం).  

---

## ✅ Summary Table

| Concept  | Debouncing                   | Throttling                 |
| -------- | ---------------------------- | -------------------------- |
| Executes | చివరి event తర్వాత మాత్రమే     | ప్రతి fixed interval లో     |
| Best Use | Search, form validation      | Scroll, resize, animations |
| Tool     | `setTimeout`, `clearTimeout` | Timestamp / `setTimeout`   |

---

🚀 ఇలా మీరు **Debouncing vs Throttling** ని అర్థం చేసుకొని, syntax, examples, diagrams, interview Q&A తో పూర్తి grip సంపాదించవచ్చు.
