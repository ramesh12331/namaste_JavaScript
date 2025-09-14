function x() {
    var i = 1; // Step 1: Declare variable i = 1

    // Step 2: setTimeout schedules a function to run after 3000 ms (3 sec)
    // This function is not executed immediately. It is sent to the Browser/Web API.
    setTimeout(function() {
        // Step 5: After 3 seconds, this function goes into the callback queue.
        // The Event Loop pushes it into the call stack when it's free.
        // Even though x() has finished executing, this inner function still
        // "remembers" variable i (closure).
        console.log(i); // Output: 1
    }, 3000);

    // Step 3: This line runs immediately (synchronous code)
    console.log("Namaste Javascript"); // Output first
}

// Step 4: Call x()
x();

/*
------------------------------------------------------
📌 Explanation Flow:
------------------------------------------------------
1. "Namaste Javascript" is logged immediately (synchronous).
2. setTimeout schedules a callback for 3 seconds later.
3. After 3 sec, callback executes and logs value of i → 1.

✅ Final Output:
Namaste Javascript
1   (after 3 seconds)
------------------------------------------------------
*/
