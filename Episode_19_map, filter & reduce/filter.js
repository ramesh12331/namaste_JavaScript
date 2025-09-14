const arr = [5,1,3,2,6];

// filter odd values

// function isOdd(x){
//     return x%2;
// }

// ************
// function isEven(x){
//     return x%2 === 0;
// }

// *********
// function greaterThan4(x){
//     return x>4;
// }


// ***HOF filter***
// const output = arr.filter(greaterThan4);

// *** OR HOF filter***
// const output = arr.filter(function greaterThan4(x){
//     return x>4;
// });

// *** OR HOF filter Arrow functions***
const output = arr.filter((x)=> x>4);

console.log(output)