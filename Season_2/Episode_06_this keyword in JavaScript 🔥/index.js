"use strict"

//*** 1.this in global space ***
console.log(this) // globalObject - window,global
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

const student = {
    name : "Akshay",
    printName : function (){
        console.log(this.name)
    },
};
student.printName();

const student2 = {
    name:"Saini"
};
// call method
student.printName.call(student2)

// ******************************

// *** 5.this inside Arrow function ***
const object = {
    a:10,
    x:()=>{
        console.log(this)
    },
};
object.x();//globalObject - window

// *** 6.this inside Nested Arrow function ***
const Object2 = {
    a:20,
    x:function (){
        // enclosing lexical context
        const y=()=>{
            console.log(this)
        };
        y();
    },
};
Object2.x();

// *** 7.this inside DOM ***
    //this inside DOM elements => reference to HTMLelement