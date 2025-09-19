// ---------------------- Example Setup ----------------------
let obj = {
    firstName : "Akshay",
    lastName : "Saini"
}

// A function that prints fullname + location details
let printName = function (hometown, state, country) {
    // `this` refers to the object passed (obj)
    console.log(this.firstName + " " + this.lastName + " " + hometown + " , " + state);
}

// ---------------------- Using Built-in bind() ----------------------
// bind() sets `this` permanently to obj and pre-fills arguments
let printMyName = printName.bind(obj, "Dehradun", "Uttarakhand");

// Call the function with the remaining argument
printMyName("India");  
// Output: Akshay Saini Dehradun , Uttarakhand


// ---------------------- Custom mybind() Polyfill ----------------------
Function.prototype.mybind = function(...args) {
    // Store reference of the original function (printName in this case)
    let opt = this; //// printName function save అవుతుంది

    // First element of args is `this` context, rest are pre-filled arguments
    let params = args.slice(1);//// context తప్ప మిగిలిన arguments తీసుకుంటుంది

    // Return a new function which accepts later arguments
    return function(...args2) {
        // Call the original function with `apply`
        // args[0] = context (obj)
        // Combine pre-filled params + newly passed args
        opt.apply(args[0], [...params, ...args2])
    }
}

// ---------------------- Using Custom mybind ----------------------
let printMyName2 = printName.mybind(obj, "Dehradun", "Uttarakhand");

// Call with remaining argument
printMyName2("India");  
// Output: Akshay Saini Dehradun , Uttarakhand


// ---------------------- ✅ Summary ----------------------
/*
1. bind() creates a copy of a function with a fixed `this` context.
2. It can also pre-fill some arguments (partial application).
3. Our custom mybind() does the same by:
   - Saving the function reference.
   - Extracting context + pre-filled arguments.
   - Returning a new function that merges pre-filled and later arguments
     and calls original function using apply().
*/
