# 🎬 JavaScript Series – Short Conclusion & Summary

## ✅ Episode\_01: call, apply, bind

* call – Functionను ఒక object contextలో వెంటనే invoke చేస్తుంది.
* apply – call లాంటిదే కానీ arguments array రూపంలో ఇస్తాం.
* bind – Functionని కొత్త functionగా తిరిగి ఇస్తుంది, later call చేయవచ్చు.

## ✅ Episode\_02: Currying

* ఒక functionను చిన్న functions గా మార్చి ఒక్కో argument తీసుకోవడం.
* Reusability + customization సులభం అవుతుంది.

## ✅ Episode\_03: Polyfill for bind

* JavaScript లోని bind() method ని మనమే implement చేయడం.
* Interviewలో favorite question.

## ✅ Episode\_04: Prototype & Prototypal Inheritance

* Prototype: Objects కి parent reference.
* Inheritance: ఒక object properties & methods ని inherit చేసుకోవడం.

## ✅ Episode\_05: Debouncing

* ఒక function repeatedly trigger కాకుండా, last action తర్వాత మాత్రమే run అవుతుంది.
* Example: Search box suggestions.

## ✅ Episode\_06: Throttling

* ఒక functionను నిర్దిష్ట సమయంలో ఒకసారి మాత్రమే run అవ్వడానికి పరిమితం చేస్తుంది.
* Example: Scroll events optimization.

## ✅ Episode\_07: Debouncing vs Throttling

* Debounce → చివరి action తర్వాత run అవుతుంది.
* Throttle → నిర్దిష్ట intervalలో run అవుతుంది.

## ✅ Episode\_08: Async vs Defer

* async → Script parallel load అవుతుంది, load అయిన వెంటనే run అవుతుంది.
* defer → Script parallel load అవుతుంది, కానీ HTML parsing అయ్యాక run అవుతుంది.

## ✅ Episode\_09: Event Bubbling & Capturing (Trickling)

* Bubbling → Event child నుండి parent వరకు propagate అవుతుంది.
* Capturing → Event parent నుండి child వరకు propagate అవుతుంది.

## ✅ Episode\_10: Event Delegation

* Parent element మీద listener పెట్టి, child elements events handle చేయడం.
* Efficient + memory friendly.

## ✅ Episode\_11: sum(1)(2)(3)(4)...(n)()

* Function currying ఉపయోగించి infinite chaining sum function create చేయడం.

## ✅ Episode\_12: Recursive Thinking

* ఒక function తనను తాను call చేసుకోవడం.
* Example: Factorial, Fibonacci series.

## ✅ Episode\_13: Local Storage & Session Storage

* localStorage → Persistent data (browser close అయిన తర్వాత కూడా ఉంటుంది).
* sessionStorage → Tab close అయ్యాక data delete అవుతుంది.

# 📌 Overall Summary

ఈ 13 Episodes లో JavaScript Core Concepts + Advanced Topics ని కవర్ చేసాం:

* Function handling (call, apply, bind, currying, polyfills)
* Memory optimization (debounce, throttle, delegation)
* Browser behavior (async, defer, storage APIs)
* Event system (bubbling, capturing, delegation)
* Problem solving (recursion, sum chaining)

👉 ఇవన్నీ Machine Coding Rounds + Frontend Interviews లో చాలా ఉపయోగపడతాయి.
