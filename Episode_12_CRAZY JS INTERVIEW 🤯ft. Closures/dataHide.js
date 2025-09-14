// function counter(){
//     var count = 0;
//     return function incrementCounter(){
//         count++;
//         console.log(count);
//     }
// }
// var counter1=counter();
// counter1();
// counter1();
// counter1();

// *******************
function counter() {
    var count = 0;  // private variable (not accessible outside)

    // inner function forms closure over "count"
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}

// counter() returns incrementCounter
var counter1 = counter();

// Each call updates the same "count" variable
counter1(); // Output: 1
counter1(); // Output: 2
counter1(); // Output: 3

/*
---------------------------------------------------------
📌 Closure Explanation
---------------------------------------------------------
- counter() runs once and creates count = 0
- It returns the function incrementCounter
- incrementCounter "remembers" count (closure)
- Every call to counter1() updates the same count
---------------------------------------------------------
*/
