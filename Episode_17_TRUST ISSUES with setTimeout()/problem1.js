// console.log("Start");


// setTimeout(function cb(){
//     console.log("Call back");
// },0);

// console.log("End");

// *****************

console.log("Start");  
// Prints "Start" immediately

setTimeout(function cb() {
    console.log("Call back");
}, 0);
// Schedules callback with 0ms delay
// BUT it still goes into the callback queue
// It will only run AFTER the current call stack is empty

console.log("End");  
// Prints "End" immediately (before the callback)

// SUMMARY:
// 1. "Start" → printed
// 2. "End" → printed
// 3. Event loop checks callback queue → executes "Call back"
// Final order: Start → End → Call back
