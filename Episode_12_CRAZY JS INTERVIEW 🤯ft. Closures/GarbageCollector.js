// function a(){
//     var x=0;
//     var z=10;//garbage memory
//     return function b(){
//         console.log(x);
//     }
// }

// var y=a();
// y();

// *********************
function a() {
    var x = 0;      // preserved by closure (used inside b)
    var z = 10;     // not used -> garbage collected

    return function b() {
        console.log(x); // closure keeps x alive
    }
}

var y = a();  // a() returns b
y();          // Output: 0

/*
---------------------------------------------------------
📌 Closure + Garbage Collection
---------------------------------------------------------
- Function b closes over variable x
- So x remains in memory (closure keeps it alive)
- Variable z is never used by b
- After a() finishes, z becomes unreachable
- Garbage collector can safely free z
---------------------------------------------------------
*/
