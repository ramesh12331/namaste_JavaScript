// ***Function statement or Function Declaration***
function a(){
    console.log("Hello");
}
a();

// ***Function Expression***
//Assigning a function to a variable
var b = function (){ 
    console.log("Hello");
};
b();

// ***Anonymous Function***
// A function without a name.
// function (){

// }
// this is going to throw Syntax Error - Function Statement requires function name.

// ***Named Function Expression***

var b = function xyz(){
    console.log("b called");
}

b();//b is called
xyz();//throw reference error

//***Parameters vs Arguments***
var b = function(param1,param2){
    // labels/identifiers are parameters
    console.log("b called");
};
b(arg1,arg2);// arguments - values passed inside function call

// ***first class function ***