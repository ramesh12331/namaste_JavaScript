const radius = [3,1,2,4];

const area = function(radius){
    return Math.PI*radius*radius;
}

const calculate = function(radius,logic){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,area));
