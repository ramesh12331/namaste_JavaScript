"use strict"

//*** 1.this in global space ***
console.log(this)
// ******************************

//*** 2.this inside a function ***

function x(){
    console.log(this)
}
x();//undefined in strict mode
window.x();//window
// ******************************

//*** 3.this inside a object's method ****
// An object 'obj' is created with two properties:
// 1. 'a' → a key with value 10
// 2. 'x' → a function (method) inside the object
const obj = {
    a: 10,
    x: function () {
        // 🔎 What happens when obj.x() runs?
        // obj.x() means the method 'x' is called by 'obj'.
        // In JavaScript, when a function is called as an object's method,
        // 'this' refers to the object itself.
        // So inside 'x', 'this' → obj.

        console.log(this);  // 🖨 Output: { a: 10, x: [Function: x] }
        // 👉 It prints the entire obj, because 'this' inside 'x' points to 'obj'.
    },
};

// Calling the method 'x' using obj
obj.x();

// ✅ Summary:
// 'this' depends on how a function is called.
// Here, since 'x' is called as obj.x(), 'this' → obj

// ******************************

// *** 4.call apply bind methods (sharing methods) ***

// We create an object 'student' with two properties:
// 1. 'name' → a string value "Akshay"
// 2. 'printName' → a method (function) that logs this.name
// ================
// const student = {
//     name: "Akshay",
//     printName: function () {
//         // 'this' refers to the object that calls this method
//         console.log(this.name);
//     },
// };
// ===========
// Here, 'student' object is calling 'printName' method
// So, inside printName → 'this' = student
// Output: "Akshay"
// ================
// student.printName();
// ================

// Create another object 'student2' with only a 'name' property
// ================
// const student2 = {
//     name: "Saini"
// };
// ================

// 🔎 Using 'call' method:
// 'call' allows us to borrow a function from one object
// and explicitly set 'this' to another object when invoking it.
// ==============
// student.printName.call(student2);
// =============
// In this case:
// - We borrow 'printName' from 'student'
// - We set 'this' inside printName = student2
// - So it prints student2.name → "Saini"


// ✅ Summary:
// 1. 'this' depends on how a function is called.
// 2. Normal call (student.printName()) → 'this' = student → Output: "Akshay"
// 3. Using .call(student2) → 'this' = student2 → Output: "Saini"
// 4. 'call' helps us reuse methods across different objects by setting 'this'.

//+++++++++++++++++++++++++++++++++
// Object 'student' with name and a method
const student = {
    name: "Akshay",
    printName: function (city, country) {
        // 'this' refers to the object we bind/borrow this function to
        console.log(this.name + " from " + city + ", " + country);
    },
};

// Another object 'student2'
const student2 = {
    name: "Saini"
};

// -------------------- CALL --------------------
// 'call' invokes the function immediately
// Syntax: function.call(thisArg, arg1, arg2, ...)
// Here: we borrow printName from student and run it on student2
student.printName.call(student2, "Delhi", "India");  
// Output: "Saini from Delhi, India"


// -------------------- APPLY --------------------
// 'apply' is same as 'call', but arguments are passed as an array
// Syntax: function.apply(thisArg, [arg1, arg2, ...])
student.printName.apply(student2, ["New York", "USA"]);
// Output: "Saini from New York, USA"


// -------------------- BIND --------------------
// 'bind' does NOT call the function immediately
// Instead, it returns a NEW function with 'this' permanently set
// Syntax: function.bind(thisArg, arg1, arg2, ...)

// Bind printName to student2
const boundFunc = student.printName.bind(student2, "London", "UK");

// Now call the returned function
boundFunc();
// Output: "Saini from London, UK"


// ✅ Summary:
// 1. call → invokes function immediately, arguments passed one by one.
//    Example: student.printName.call(student2, "Delhi", "India");
// 2. apply → invokes function immediately, arguments passed as an array.
//    Example: student.printName.apply(student2, ["New York", "USA"]);
// 3. bind → returns a new function with 'this' bound, can be called later.
//    Example: const fn = student.printName.bind(student2, "London", "UK"); fn();
//
// 👉 All three are used to control the value of 'this' explicitly.


// ******************************