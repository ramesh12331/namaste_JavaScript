// function outer(){
//     var a=10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// var close=outer();
// // console.log(close);//return function
// // console.log(close());
// close();

// *********************

// Define outer function
function outer() {
    var a = 10;              // Step 1: Create variable 'a' in outer function scope
    
    // Define inner function (inside outer)
    function inner() {
        console.log(a);      // Step 2: inner function uses variable 'a' from outer scope
    }
    
    return inner;            // Step 3: Return the inner function itself (not executing yet)
}

// Call outer()
var close = outer();          // Step 4: outer() runs → returns inner function
                              // Now 'close' variable holds the function 'inner'

// console.log(close);        // Step 5: would print function definition of inner
// console.log(close());      // Step 6: executes 'inner', logs 10, returns undefined

close();                      // Step 7: Executes inner()
                              // Output → 10
