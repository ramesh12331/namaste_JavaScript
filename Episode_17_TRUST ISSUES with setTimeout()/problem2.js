// console.log("Start");

// function cb(){
//     console.log("Call back");
// }

// setTimeout(cb,0);

// console.log("End");

// *************

console.log("Start");  
// Prints "Start" immediately

function cb() {
    console.log("Call back");
}
// Defines a callback function

setTimeout(cb, 0);
// Schedules cb() with 0ms delay
// Even though delay = 0, it goes to the callback queue
// It will only execute AFTER the main thread (call stack) is empty

console.log("End");  
// Prints "End" immediately (before the callback)

// SUMMARY:
// 1. "Start" → printed
// 2. "End" → printed
// 3. Event loop takes cb() from callback queue → prints "Call back"
// Final order: Start → End → Call back
