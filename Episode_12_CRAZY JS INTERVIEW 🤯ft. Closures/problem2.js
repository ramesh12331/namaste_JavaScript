// function outest(){
//     var c=20;
//     function outer(str){
//         let a=10;
//         function inner(){
//             console.log(a,c,str);
//         }
//         return inner;
//     }
//     return outer;
// }
// outest()("Hello There")();

// ***********************
// Outermost function
function outest() {
    var c = 20;                // Variable in outest() scope
    
    // Function inside outest()
    function outer(str) {
        let a = 10;            // Variable in outer() scope
        
        // Inner function inside outer()
        function inner() {
            // inner() has access to 'a' (outer), 'c' (outest), and 'str' (outer parameter)
            console.log(a, c, str);
        }
        
        return inner;          // Return the inner function
    }
    
    return outer;              // Return outer (not executed yet)
}

// Step 1: Call outest()
outest()("Hello There")();

/*
Execution Breakdown:

1. outest() is called
   - Creates c = 20
   - Returns function outer (definition, not execution yet)

2. outest()("Hello There")
   - Calls outer("Hello There")
   - Inside outer:
        - str = "Hello There"
        - a = 10
        - Defines inner()
        - Returns inner function

3. outest()("Hello There")()
   - Now inner() is called
   - inner() can access:
        - a = 10 (from outer scope)
        - c = 20 (from outest scope)
        - str = "Hello There" (outer parameter)
   - Prints → 10 20 "Hello There"
*/
