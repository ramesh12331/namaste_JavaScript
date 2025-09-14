const arr = [5,1,3,2,6];

//Double 10,2,6,12
// Tripple 15,3,9,6,18
//Binary - ["101","1","11","10","110"]
const double = function (x){
  return  x*2;
}

const triple = function (x){
  return  x*3;
}

//  function binary(x){
//     return x.toString(2);
//  }




// const output = arr.map(binary);

//  ****or HOF****

// const output = arr.map(function binary(x){
//     return x.toString(2);
//  });

 //  ****or HOF Arrow functions****
//  const output = arr.map((x)=>{
//     return x.toString(2);
//  });
const output = arr.map((x)=> x.toString(2));
 
console.log(output)