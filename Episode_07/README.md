# Scope, Scope Chain & Lexical Environment in JavaScript

## 📌 What is Scope?

-   **Scope** defines where variables and functions are accessible.\
-   It is directly related to the **Lexical Environment**.\
-   **Lexical Environment = Local Memory + Reference to Outer
    Environment**.

------------------------------------------------------------------------

## 📌 Example 1: Global Variable Access

``` js
function a() {
  console.log(b); // 10
}
var b = 10;
a();
```

👉 Function `a()` can access global variable `b`.

------------------------------------------------------------------------

## 📌 Example 2: Nested Function Access

``` js
function a() {
  c();
  function c() {
    console.log(b); // 10
  }
}
var b = 10;
a();
```

👉 Even nested functions can access global variables.

------------------------------------------------------------------------

## 📌 Example 3: Local Variable Shadowing Global

``` js
function a() {
  c();
  function c() {
    var b = 100;
    console.log(b); // 100
  }
}
var b = 10;
a();
```

👉 Local variable `b` overrides (shadows) global `b`.

------------------------------------------------------------------------

## 📌 Example 4: Global vs Local Access

``` js
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // 10
  }
}
a();
console.log(b); // ❌ ReferenceError
```

👉 Functions can access outer variables, but global scope **cannot
access local variables**.

------------------------------------------------------------------------

## 📌 Key Points to Remember

1.  **Local scope \> Global scope** (local variable wins → shadowing).\
2.  Functions can access variables from their **outer environment**
    (Lexical Scope).\
3.  Global scope cannot access local function variables.\
4.  **Scope Chain** = Variable lookup chain → Local → Parent → Global.

------------------------------------------------------------------------

## 📖 Simple Summary

-   **Scope** → Defines accessibility of variables.\
-   **Lexical Environment** → Memory + reference to parent scope.\
-   **Scope Chain** → How JS looks up variables step by step.\
-   Local variables shadow global variables if same name.\
-   Global scope cannot access inside function variables.

------------------------------------------------------------------------

## 🎯 Interview Questions & Answers

**Q1. What is Scope in JS?**\
👉 Scope defines where variables and functions can be accessed.

**Q2. What is Lexical Environment?**\
👉 It is the local memory + a reference to the parent environment.

**Q3. What is Scope Chain?**\
👉 The process of resolving variables by looking into local → parent →
global environments.

**Q4. Can functions access outer variables?**\
👉 ✅ Yes, functions can access variables from their parent scope.

**Q5. Can global scope access local variables?**\
👉 ❌ No, local variables are private to their function.

**Q6. What happens if the same variable exists in both local and global
scope?**\
👉 Local variable takes precedence (variable shadowing).

------------------------------------------------------------------------

# Scope Chain in JavaScript (తెలుగులో)

## 📌 Scope అంటే ఏమిటి?

Scope అంటే ఒక variable లేదా function ఎక్కడ వరకు access చేయగలమో దానిని
Scope అంటారు.\
JavaScript లో Scope అనేది Lexical Environment మీద ఆధారపడి ఉంటుంది.

## 📌 Lexical Environment అంటే ఏమిటి?

Lexical Environment = Local Memory + Reference to Parent Environment\
అంటే ఒక function లో ఉన్న variables + బయట ఉన్న scope కు reference.

## 📌 Scope Chain అంటే ఏమిటి?

1.  ఒక variable ను JS ముందు local scope లో వెతుకుతుంది.\
2.  దొరకకపోతే → parent scope లో వెతుకుతుంది.\
3.  చివరికి కూడా దొరకకపోతే → ReferenceError వస్తుంది.\
4.  ఈ వెతికే process ని Scope Chain అంటారు.

------------------------------------------------------------------------

## 📌 Example 1: Accessing Global Variable

``` js
function a() {
  console.log(b); // 10
}
var b = 10;
a();
```

👉 Function a తన local scope లో b కనుగొనలేక global scope లో వెతికి 10
ప్రింట్ చేసింది.

## 📌 Example 2: Nested Function Accessing Global

``` js
function a() {
  c();
  function c() {
    console.log(b); // 10
  }
}
var b = 10;
a();
```

👉 Nested function c కూడా global scope లోని b యాక్సెస్ చేసింది.

## 📌 Example 3: Local Variable Overrides Global

``` js
function a() {
  c();
  function c() {
    var b = 100;
    console.log(b); // 100
  }
}
var b = 10;
a();
```

👉 Local variable b = 100 ఉండటంతో అది global b = 10 ని override చేసింది.

## 📌 Example 4: Function Local Variable Not Accessible Outside

``` js
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b); // 10
  }
}
a();
console.log(b); // ❌ ReferenceError
```

👉 Function లో ఉన్న b ని బయట నుండి యాక్సెస్ చేయలేం.

------------------------------------------------------------------------

## 📖 Simple Summary (తెలుగులో)

-   Scope → variable/function ఎక్కడ వాడగలమో.\
-   Lexical Environment → local memory + parent reference.\
-   Scope Chain → JS ఒక variable ను కనుగొనడానికి local → parent → global
    వరకూ వెతుకుతుంది.\
-   Local variable ఎప్పుడూ priority పొందుతుంది.\
-   Global variable ను function యాక్సెస్ చేయగలదు కానీ బయట నుండి local
    variable ను యాక్సెస్ చేయలేం.

------------------------------------------------------------------------

## 🎯 Interview Questions & Answers (తెలుగులో)

**Q1. Scope అంటే ఏమిటి?**\
👉 ఒక variable లేదా function ని ఎక్కడ ఉపయోగించగలమో దానినే Scope అంటారు.

**Q2. Lexical Environment అంటే ఏమిటి?**\
👉 Local memory + parent reference కలిపిందే Lexical Environment.

**Q3. Scope Chain ఎలా పనిచేస్తుంది?**\
👉 JS మొదట local scope లో వెతుకుతుంది → parent scope → చివరగా global
scope.

**Q4. Local మరియు Global variable conflict వస్తే ఏది ప్రాధాన్యం?**\
👉 Local variable ఎప్పుడూ priority పొందుతుంది.

**Q5. Global Execution Context కి local variables యాక్సెస్ అవుతాయా?**\
👉 ❌ కాదు. Local variables బయట నుండి యాక్సెస్ చేయలేము.
