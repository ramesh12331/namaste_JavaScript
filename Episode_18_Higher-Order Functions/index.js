const radius = [3,1,2,4];

const calculateArea = function (radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));

const calculateCircumference = function(){
    const output = [];
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));

const calculateDiameter = function(radius){
    const output = [];
    for(let i=0;i<radius.length;i++){
       output.push(2*radius[i]);
    }
    return output;
}
console.log(calculateDiameter(radius))