function x() {
    // Step 1: for loop runs from i = 1 to i = 5
    for (var i = 1; i <= 5; i++) {
        
        // Step 2: Schedule a setTimeout for each value of i
        // Delay = i * 3000 ms
        setTimeout(function() {
            // Step 6: This function executes AFTER the delay
            // But since 'var' has FUNCTION scope, not block scope,
            // all these callbacks share the SAME 'i'.
            // By the time they run, the loop has already finished (i = 6).
            console.log(i); // Will print 6 each time
        }, i * 3000);
    }

    // Step 3: This runs immediately after the loop (synchronous code)
    console.log("Namaste JavaScript");
}

// Step 4: Call the function
x();

/*
------------------------------------------------------
📌 Execution Flow
------------------------------------------------------

1. The for loop runs quickly, setting up 5 timers:
   - 1st timer after 3 sec
   - 2nd timer after 6 sec
   - 3rd timer after 9 sec
   - 4th timer after 12 sec
   - 5th timer after 15 sec

2. But because 'var' is function-scoped, there is only ONE 'i'.
   After the loop finishes, i = 6.

3. All the scheduled callbacks reference the SAME 'i' (closure).
   When they execute, they print i = 6 each time.

------------------------------------------------------
✅ Final Output
------------------------------------------------------
Namaste JavaScript       // printed immediately
6                        // after 3 sec
6                        // after 6 sec
6                        // after 9 sec
6                        // after 12 sec
6                        // after 15 sec
------------------------------------------------------
*/
