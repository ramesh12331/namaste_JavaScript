// function x(){
//     var a=7;
//     function y(){
//         console.log(a)
//     }
//     // y();//7
//     return y;
// }
// var z=x();
// console.log(z);//value of z is entire code of function y.
// z(); //7

// ******************

// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

function z() {
    var b = 900; // Step 1: Create b = 900
                 // z is the outermost function, not a closure itself
                 // but variables inside z (like b) can be closed over

    function x() {
        var a = 7; // Step 2: Create a = 7
                   // x is defined inside z
                   // x can access b (outer scope)
                   // 👉 So x forms a closure over b

        function y() {
            // Step 3: y is defined inside x
            // y can access:
            //   a → from x (its parent scope)
            //   b → from z (outer parent scope)
            // 👉 So y is also a closure (closes over a and b)

            console.log(a, b); // Step 4: Prints 7 900
        }

        y(); // y is invoked immediately (not returned)
             // 👉 Practically behaves like a normal inner function here
             // but conceptually still a closure (because it has access to a & b)
    }

    x(); // Call x() inside z
}

// Call z()
z(); // Output: 7 900

/*
---------------------------------------------------------
📌 Important Note on Closures
---------------------------------------------------------

Closure = function + its surrounding lexical environment.

👉 A function becomes a closure only when it is returned or 
   passed around and still remembers its parent variables 
   even after the parent function has finished.

👉 In this code, y is invoked immediately, not returned.
   So, practically it behaves like a normal inner function.
   But conceptually, y is still a closure because it has 
   access to outer scopes (a, b).

---------------------------------------------------------
✅ Answer Summary
---------------------------------------------------------

z → normal function (outermost).

x → closure (closes over variable b).

y → closure (closes over variables a and b),
     though in this code it’s just called immediately,
     not returned.
---------------------------------------------------------
*/
