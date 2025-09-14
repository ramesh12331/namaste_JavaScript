// var a = 100;
// {
// var a =10;
// let b =20;
// const c =30;
// // Here let and const are hoisted in Block scope,
// // While, var is hoisted in Global scope.
// }

// console.log(a);// 10, instead of the 100 we were expecting. So block "a" modified val of global "a" as well. In console, only b and c are in block space. a initially is in global space(a = 100), and when a = 10 line is run, a is not created in block space, but replaces 100 with 10 in global space itself.
// console.log(b); // Uncaught ReferenceError: b is not defined

// ******************

// var b = 100;
// {
// var a =10;
// let b =20;
// const c =30;
// console.log(b);//20
// }

// console.log(b); // console.log(a);// 10, instead of the 100 we were expecting. So block "a" modified val of global "a" as well. In console, only b and c are in block space. a initially is in global space(a = 100), and when a = 10 line is run, a is not created in block space, but replaces 100 with 10 in global space itself.

// *************

// shadowing
let a = 20;
function x(){
    var a=20;
}