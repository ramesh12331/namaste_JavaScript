// function Counter(){
//     var count = 0;
//     this.incrementCounter = function (){
//         count++;
//         console.log(count);
//     }
//     this.dcrementCounter = function (){
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new Counter();

// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.dcrementCounter()

// ********************
function Counter() {
    var count = 0;  // private variable

    // Method to increment
    this.incrementCounter = function () {
        count++;                 // increase count
        console.log(count);      // log current count
    }

    // Method to decrement
    this.dcrementCounter = function () {
        count--;                 // decrease count
        console.log(count);      // log current count
    }
}

// Create new Counter object
var counter1 = new Counter();

counter1.incrementCounter(); // Output: 1
counter1.incrementCounter(); // Output: 2
counter1.dcrementCounter();  // Output: 1

/*
---------------------------------------------------------
📌 Closure + Constructor Pattern
---------------------------------------------------------
- count is private inside Counter (cannot access outside).
- incrementCounter() and dcrementCounter() form closures
  over count, so they can modify it.
- Each new Counter() object will have its own "count".
---------------------------------------------------------
*/
