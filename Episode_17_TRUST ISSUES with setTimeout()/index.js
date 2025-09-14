// console.log("Start");


// setTimeout(function cb(){
//     console.log("Call back");
// },5000);

// console.log("End");

// let startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate<startDate+10000){
//     endDate = new Date().getTime();
// }

// console.log("while expires");

// *************
console.log("Start");  
// Prints "Start"

// Schedules callback after 5s (but won't run until main thread is free)
setTimeout(function cb() {
    console.log("Call back");
}, 5000);

console.log("End");  
// Prints "End" immediately

let startDate = new Date().getTime();
let endDate = startDate;

// Busy wait for 10s → blocks main thread
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("while expires");
// Prints after 10s

// SUMMARY:
// 1. "Start" → printed
// 2. "End" → printed
// 3. While loop blocks for 10s
// 4. "while expires" → printed
// 5. setTimeout callback ("Call back") runs only after blocking ends
// Final order: Start → End → while expires → Call back
