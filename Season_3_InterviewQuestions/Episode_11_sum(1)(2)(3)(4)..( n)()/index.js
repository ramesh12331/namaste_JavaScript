// if else

// let sum = function(a){
//     return function(b){
//         if(b){
//             return sum(a+b)
//         }
//         return a;
//     }
// }
// console.log(sum(1)(2)(3)(4)())


// ***************

// ternary operator

// let sum = function(a){
//     return function(b){

//        return b? sum(a+b) : a;
       
//     }
// }
// console.log(sum(1)(2)(3)(4)())

// ******************************
// ES6 Syntax
// let sum = (a)=>{
//     return (b)=>{

//        return b? sum(a+b) : a;
       
//     }
// }
// console.log(sum(1)(2)(3)(4)())

// ********************************

// remove return
let sum = (a)=>(b)=>b? sum(a+b) : a;
       
    

console.log(sum(1)(2)(3)(4)())

