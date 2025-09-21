# 🎬 జావాస్క్రిప్ట్ సిరీస్ – సమ్మరీ & డయాగ్రామ్స్

## ✅ Episode\_01: call, apply, bind

* **call** – ఒక function ను వెంటనే నిర్దిష్ట `this` కాంటెక్ట్ తో execute చేస్తుంది.
* **apply** – call లా, కానీ arguments array గా ఇస్తారు.
* **bind** – కొత్త function return చేస్తుంది, bound `this` తో, తర్వాత execute చేయవచ్చు.

**ఉదాహరణ:**

```javascript
const person = {name: 'Ramesh'};
function greet(greeting){
  console.log(`${greeting}, ${this.name}`);
}
greet.call(person, 'Hello');   // Hello, Ramesh
greet.apply(person, ['Hi']);   // Hi, Ramesh
const greetRamesh = greet.bind(person, 'Hey');
greetRamesh();                 // Hey, Ramesh
```

**సారాంశం:** సరైన object context తో functions execute చేయడానికి ఉపయోగపడుతుంది.

## ✅ Episode\_02: Currying

* ఒక function ను చిన్న functions గా మార్చడం, ఒక్కో argument ను ఒక్కొక్కసారి తీసుకునే విధంగా.

**ఉదాహరణ:**

```javascript
const add = a => b => a + b;
console.log(add(2)(3)); // 5
```

**సారాంశం:** కోడ్ modular & reusable అవుతుంది.

## ✅ Episode\_03: Polyfill for bind

* JavaScript లోని `bind()` ను manually implement చేయడం.
* సాధారణ interview ప్రశ్న.

## ✅ Episode\_04: Prototype & Prototypal Inheritance

* Prototype: Object reference linking.
* Inheritance: Objects ఇతర objects నుండి properties & methods inherit చేస్తాయి.

**ఉదాహరణ:**

```javascript
function Person(name){ this.name=name; }
Person.prototype.greet = function(){ console.log(`Hi, ${this.name}`); }
const ramesh = new Person('Ramesh');
ramesh.greet(); // Hi, Ramesh
```

**సారాంశం:** JavaScript లో OOP వంటి conduct కోసం ఉపయోగపడుతుంది.

## ✅ Episode\_05 & 06: Debouncing vs Throttling

* **Debouncing:** చివరి action తరువాత మాత్రమే execute అవుతుంది.
* **Throttling:** fixed interval లో execute అవుతుంది.

**డయాగ్రామ్:**

```
Debounce:  ---X----X----X---| Execute
Throttle:  -X---X---X---X---| Execute
```

## ✅ Episode\_08: Async vs Defer

* **Async:** Script parallel లో load అయ్యి, ready అయిన వెంటనే execute అవుతుంది.
* **Defer:** Script parallel లో load అవుతుంది, కానీ HTML parsing తరువాత execute అవుతుంది.

**డయాగ్రామ్:**

```
HTML Parsing ----> Async వెంటనే execute అవుతుంది
HTML Parsing ----> Defer HTML parsing తరువాత execute అవుతుంది
```

## ✅ Episode\_09: Event Bubbling & Capturing

* **Bubbling:** Child → Parent
* **Capturing:** Parent → Child

**డయాగ్రామ్:**

```
Capturing:  HTML -> Body -> Div -> Button
Bubbling:   Button -> Div -> Body -> HTML
```

## ✅ Episode\_10: Event Delegation

* Parent element కి listener attach చేసి, child events handle చేయడం.

## ✅ Episode\_11: sum(1)(2)(3)...(n)()

* Currying ఉపయోగించి infinite chainable sum function create చేయడం.

## ✅ Episode\_12: Recursive Thinking

**ఉదాహరణ:**

```javascript
function factorial(n){
  if(n===0) return 1;
  return n*factorial(n-1);
}
```

**సారాంశం:** Factorial, Fibonacci, మరియు complex problem solving కోసం ఉపయోగపడుతుంది.

## ✅ Episode\_13: Local Storage & Session Storage

* **localStorage:** Browser close అయినా data persistent.
* **sessionStorage:** Tab close అయినా data clear అవుతుంది.

## 📌 Overall Summary Diagram

```
JavaScript Concepts
 ├─ ఫంక్షన్ హ్యాండ్లింగ్
 │   ├─ call / apply / bind
 │   ├─ Currying / Polyfill
 │   └─ Recursive Thinking
 ├─ ఈవెంట్ & memory optimization
 │   ├─ Debounce / Throttle
 │   └─ Event Delegation
 ├─ బ్రౌజర్ conduct
 │   ├─ Async / Defer
 │   └─ LocalStorage / SessionStorage
 └─ OOP Concepts
     ├─ Prototype
     └─ Prototypal Inheritance
```

**సారాంశం:** ఈ concepts frontend developer interviews, machine coding rounds, మరియు real-world JS applications కోసం చాలా ఉపయోగపడతాయి.
