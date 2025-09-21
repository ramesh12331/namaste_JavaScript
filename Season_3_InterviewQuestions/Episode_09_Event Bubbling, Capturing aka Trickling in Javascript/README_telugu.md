# ⚡ JavaScript లో Event Bubbling & Capturing (Trickling)

DOM లో ఏదైనా Event చోటు చేసుకుంటే, అది కేవలం target element మాత్రమే ప్రభావితం చేయదు. అది DOM tree లో **phases** లో travel అవుతుంది. ఈ phases ని తెలుసుకోవడం చాలా ముఖ్యం, ఎందుకంటే అవి event ను ఎలా handle చేయాలో నిర్ణయిస్తాయి.

---

## 📌 1. Event Propagation Phases

1. **Capturing Phase (Trickling)** → Event **top → down** (document → element) ప్రయాణిస్తుంది.
2. **Target Phase** → Event target element వద్ద handle అవుతుంది.
3. **Bubbling Phase** → Event **bottom → up** (element → document) propagate అవుతుంది.

---

## 📌 2. Event Bubbling

* JavaScript లో **default behavior**.
* Event target నుండి పైకి ancestor elements వరకు propagate అవుతుంది.

---

## 📌 3. Event Capturing (Trickling)

* Optional phase (enable చేయాలి).
* Event **root నుండి target వరకు** travel అవుతుంది.

Capturing enable చేయడానికి:

```js
element.addEventListener("event", handler, true);
```

---

## 📌 4. Execution Order

| Phase     | దిశ         | ఉదాహరణ క్రమం                                   |
| --------- | ----------- | ---------------------------------------------- |
| Capturing | Top → Down  | Document → Body → Grandparent → Parent → Child |
| Target    | Target వద్ద | Child                                          |
| Bubbling  | Bottom → Up | Child → Parent → Grandparent → Body → Document |

---

## 📌 5. కోడ్ ఉదాహరణలు

### ✅ HTML Structure

```html
<div id="grandparent">
  <div id="parent">
    <div id="child"></div>
  </div>
</div>
```

---

### Example 1: Bubbling (Default / false)

```js
document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("Grandparent (Bubbling)");
}, false);

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent (Bubbling)");
}, false);

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child (Bubbling)");
}, false);
```

**`#child` పై click చేస్తే log**:

```
Child (Bubbling)
Parent (Bubbling)
Grandparent (Bubbling)
```

---

### Example 2: Capturing (`true`)

```js
document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("Grandparent (Capturing)");
}, true);

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent (Capturing)");
}, true);

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child (Capturing)");
}, true);
```

**`#child` పై click చేస్తే log**:

```
Grandparent (Capturing)
Parent (Capturing)
Child (Capturing)
```

---

### Example 3: Mixed (true vs false)

```js
document.querySelector("#grandparent").addEventListener("click", () => {
  console.log("Grandparent (Capturing)");
}, true);

document.querySelector("#parent").addEventListener("click", () => {
  console.log("Parent (Bubbling)");
}, false);

document.querySelector("#child").addEventListener("click", () => {
  console.log("Child (Default Bubbling)");
});
```

**`#child` పై click చేస్తే log**:

```
Grandparent (Capturing)
Child (Default Bubbling)
Parent (Bubbling)
```

---

### Example 4: Stop Propagation

```js
document.querySelector("#child").addEventListener("click", (e) => {
  console.log("Child clicked only!");
  e.stopPropagation(); // bubbling/capturing ఆగిపోతుంది
}, false);
```

---

### Example 5: stopImmediatePropagation

```js
const child = document.querySelector("#child");

child.addEventListener("click", (e) => {
  console.log("First handler runs");
  e.stopImmediatePropagation(); // same element పైని ఇతర handlers run అవ్వవు
}, false);

child.addEventListener("click", () => {
  console.log("Second handler (won’t run)");
}, false);
```

---

### Example 6: Event Delegation

```js
document.querySelector("#parent").addEventListener("click", (e) => {
  if (e.target.id === "child") {
    console.log("Child clicked via delegation");
  }
});
```

---

## 📊 6. Diagram

```
Capturing (true):   Document → HTML → Body → Grandparent → Parent → Child
Target Phase:       Child
Bubbling (false):   Child → Parent → Grandparent → Body → HTML → Document
```

---

## 📌 7. Interview Questions & Answers

**Q1. Event Bubbling అంటే ఏమిటి?**
👉 Event target నుండి పైకి propagate అవుతుంది.

**Q2. Event Capturing అంటే ఏమిటి?**
👉 Event root నుండి target వరకు trickle అవుతుంది.

**Q3. JavaScript లో default phase ఏది?**
👉 Bubbling.

**Q4. Capturing ఎలా enable చేయాలి?**
👉 `addEventListener("event", handler, true)` ఉపయోగించండి.

**Q5. Event Propagation ని ఎలా ఆపాలి?**
👉 `e.stopPropagation()` ఉపయోగించండి.

**Q6. stopImmediatePropagation అంటే ఏమిటి?**
👉 Propagation ఆపడానికి, అదేవిధంగా same element పైని handlers run కావకుండా చేస్తుంది.

**Q7. Event Delegation అంటే ఏమిటి?**
👉 Parent element కి ఒక listener attach చేసి, multiple children events ను handle చేయడం.

---

## 📊 8. Summary Table

| Concept                  | దిశ                                          | Default | Enable చేయడం                   | Example Use              |
| ------------------------ | -------------------------------------------- | ------- | ------------------------------ | ------------------------ |
| Bubbling                 | Bottom → Up                                  | ✅ Yes   | `false`                        | Most events              |
| Capturing (Trickling)    | Top → Down                                   | ❌ No    | `true`                         | Rare cases               |
| stopPropagation          | Bubbling/capturing ఆగిపోవడం                  | N/A     | `e.stopPropagation()`          | Parent click block చేయడం |
| stopImmediatePropagation | Propagation & same element handlers ఆగిపోవడం | N/A     | `e.stopImmediatePropagation()` | Advanced control         |

---

✅ ఇలా, JavaScript లో Event Bubbling, Capturing & Propagation ను examples, diagrams, summary తో సులభంగా అర్థం చేసుకోవచ్చు.
