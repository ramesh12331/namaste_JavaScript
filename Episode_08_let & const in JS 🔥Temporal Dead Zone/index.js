// console.log(a)//Uncaught ReferenceError: Cannot access 'a' before initialization ** This is the TEMPORAL DEAD ZONE
// console.log(b)//undefined

// let a=5;//Uncaught SyntaxError: Identifier 'a' has already been declared
// let a = 10;
// var b = 100;
// var b = 1000;//it does not give an error

// console.log(b)

// *********About Const*********
console.log(a) //ReferenceError: Cannot access 'a' before initialization
let a;

// const b;//Uncaught SyntaxError: Missing initializer in const declaration
// b=1000; //wrong

const b=100;
b=2;//TypeError: Assignment to constant variable.

a=10;
console.log(a)