# 🔑 JavaScript లో Prototype మరియు Prototypal Inheritance

JavaScript అనేది **class-based language** కాదు. ఇది **prototype-based language**. అంటే, objects అనేవి **prototypes** ద్వారా ఒకదానినుండి మరొకదానికి properties మరియు methods ను inherit చేసుకుంటాయి.  

---

## 📌 Prototype అంటే ఏమిటి?

- ప్రతి JavaScript object లో ఒక hidden property ఉంటుంది → **`[[Prototype]]`** (దాన్ని `__proto__` ద్వారా access చేయవచ్చు).  
- ఇది ఇంకో object కి reference గా ఉంటుంది.  
- దాని ద్వారా objects ఇతర properties మరియు methods ను పొందుతాయి.  

```js
let obj = { 
  name: "Ramesh" 
};

console.log(obj.__proto__); 
// Object యొక్క prototype కనబడుతుంది
```

---

## 📌 Prototypal Inheritance అంటే ఏమిటి?

ఒక object, మరో object నుండి properties/methods inherit చేసుకోవడాన్ని **Prototypal Inheritance** అంటారు.  

```js
let person = {
  greet: function () {
    console.log("Hello!");
  }
};

let student = {
  name: "Akshay"
};

// student తన prototype గా person ను inherit చేసుకుంది
student.__proto__ = person;

student.greet(); // Output: Hello!
```

---

## 📌 Prototype Chain అంటే ఏమిటి?

- Object లో property/method లభించకపోతే, JavaScript దాని prototype లో వెతుకుతుంది.  
- అక్కడా దొరకకపోతే, మరుసటి prototype లో వెతుకుతుంది.  
- చివరికి `null` వరకు వెతుకుతుంది. దీన్నే **Prototype Chain** అంటారు.  

```js
let obj = {};

console.log(obj.toString()); // Object.prototype లో దొరికింది
console.log(obj.__proto__.__proto__); // null (చివరి)
```

---

## 📌 ఎందుకు `__proto__` అని పిలుస్తాం?

- `__proto__` అనేది ఒక object యొక్క prototype కి ఉన్న reference.  
- ఇది ఒక object ను దాని prototype తో **link** చేస్తుంది.  
- దీనిని “dunder proto” (double underscore proto) అని కూడా పిలుస్తారు.  

---

## 📌 JavaScript లో Inheritance అంటే ఏమిటి?

- **Inheritance** అంటే → ఒక object లోని properties/methods ను ఇంకో object ఉపయోగించగలగడం.  
- JavaScript లో ఇది **prototypes** ద్వారా జరుగుతుంది.  

---

## 📌 Syntax (ఉదాహరణ)

```js
// Constructor function
function Person(name) {
  this.name = name;
}

// Prototype లో method add చేయడం
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

let p1 = new Person("Ramesh");
p1.sayHello(); 
// Output: Hello, my name is Ramesh
```

---

## 📊 Summary Table

| Concept                | వివరణ |
|-------------------------|--------|
| Prototype               | Object నుండి inherit అయ్యే base object |
| Prototypal Inheritance  | ఒక object, మరో object నుండి properties/methods పొందడం |
| Prototype Chain         | Property/method కోసం వెతికే శ్రేణి |
| `__proto__`             | Object → Prototype కి ఉన్న link |
| Inheritance in JS       | Prototypes ద్వారా properties/methods sharing |

---

## 🎯 ఇంటర్వ్యూ Questions & Answers

### Q1. Prototype అంటే ఏమిటి?
👉 Prototype అనేది ఒక object, దానినుండి ఇతర objects properties/methods ను పొందుతాయి.  

---

### Q2. Prototypal Inheritance అంటే ఏమిటి?
👉 ఒక object, ఇంకో object యొక్క prototype నుండి properties/methods inherit చేసుకోవడం.  

---

### Q3. Prototype Chain అంటే ఏమిటి?
👉 Property/method దొరకకపోతే, JavaScript prototype లో వెతుకుతుంది → null వరకు వెతుకుతుంది.  

---

### Q4. `__proto__` మరియు `prototype` లో తేడా?
- **`__proto__`** → Object కి సంబంధించిన hidden link (runtime లో).  
- **`prototype`** → కేవలం constructor functions పై ఉంటుంది. inheritance set చేయడానికి వాడతారు.  

---

### Q5. ఎందుకు `__proto__` అంటారు?
👉 ఎందుకంటే ఇది object ను దాని prototype తో కలిపే hidden internal property.  

---

### Q6. JavaScript లో inheritance అంటే ఏమిటి?
👉 ఒక object లో ఉన్న properties/methods ను మరొక object వాడుకోగలిగే విధానాన్ని inheritance అంటారు. JavaScript లో ఇది **prototype ఆధారంగా** జరుగుతుంది.  

---

✅ ఇప్పుడు నీకు **Prototype, Prototypal Inheritance, Prototype Chain, Inheritance** అన్నీ క్లియర్ అయ్యాయి 🚀  
 