let obj = {
    firstName : "Akshay",
    lastName : "Sainiiii",
};

let printFullName = function (hometown,state){
        console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state);
    }
    printFullName.call(obj, "Dehradun", "UttarKhand")

let obj2 = {
    firstName : "Sachin",
    lastName : "Tendulkar",
}
printFullName.call(obj2, "Mumbai" , "Maharastra")