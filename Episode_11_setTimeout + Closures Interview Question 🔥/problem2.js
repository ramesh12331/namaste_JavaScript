function x() {
    // Loop with 'let' → block scope
    for (let i = 1; i <= 5; i++) {

        // Each iteration gets a fresh 'i'
        setTimeout(function () {
            console.log(i); // Prints i after i seconds
        }, i * 1000);
    }

    // Runs immediately (synchronous)
    console.log("Namaste JavaScript");
}

// Call the function
x();

/*
------------------------------------------------------
📌 Execution Flow & Output
------------------------------------------------------
Immediately:
Namaste JavaScript

After 1 second:
1

After 2 seconds:
2

After 3 seconds:
3

After 4 seconds:
4

After 5 seconds:
5
------------------------------------------------------
✅ Final Output:
Namaste JavaScript
1
2
3
4
5
------------------------------------------------------
*/
