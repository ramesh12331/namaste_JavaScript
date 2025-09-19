let obj = {
    firstName : "Akshay",
    lastName : "Saini"
}

let printName = function (hometown,state,country){
    console.log(this.firstName + " " + this.lastName+ " " + hometown + " , " + state);
}

let printMyName = printName.bind(obj,"Dehradun","Uttarakhand")
printMyName("India");

Function.prototype.mybind = function(...args){
    let opt = this,
    params = args.slice(1);
    return function(...args2){
        opt.apply(args[0],[...params,...args2])
    }
}

let printMyName2 = printName.mybind(obj,"Dehradun","Uttarakhand");
printMyName2("India");