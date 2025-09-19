let obj = {
    firstName : "Akshay",
    lastName : "Sainiiii",
};

let printFullName = function (hometown,state){
        console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state);
    }
    printFullName.apply(obj, ["Dehradun", "UttarKhand"])

let obj2 = {
    firstName : "Sachin",
    lastName : "Tendulkar",
}
printFullName.apply(obj2, ["Mumbai" , "Maharastra"])