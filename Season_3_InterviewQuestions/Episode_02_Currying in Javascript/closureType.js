let multiply = function (x){
    return function(y){
        console.log(x*y)
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(3);

let multiplyByThree = multiply(3);
multiplyByThree(10);