// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// outer()();

// *******************

function outer() {
    var a = 10;          // variable inside outer()

    function inner() {
        // inner function uses a from outer's scope
        console.log(a);  // prints 10
    }

    return inner;        // return the function inner (not executed yet)
}

// outer()() means:
// 1. Call outer() → returns inner
// 2. Immediately call inner()
outer()();  // Output: 10

/*
---------------------------------------------------------
📌 Closure Explanation
---------------------------------------------------------
- outer defines a variable a = 10
- inner is defined inside outer and uses variable a
- outer returns inner
- When outer()() is executed:
   -> outer() runs and returns inner
   -> then inner() is executed immediately
   -> inner still has access to a from outer (closure)
---------------------------------------------------------
*/
