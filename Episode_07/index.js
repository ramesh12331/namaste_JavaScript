// ****Example_1*********

// function a(){
// console.log(b)
// }
// var b = 10;
// a();

// ****Example_2*********

// function a(){
//     c()
// function c(){
//     console.log(b)
// }
// }
// var b=10;
// a();

// ****Example_3*********

function a(){
    var b=10;
    function c(){
        console.log(b);
    }
}
a();