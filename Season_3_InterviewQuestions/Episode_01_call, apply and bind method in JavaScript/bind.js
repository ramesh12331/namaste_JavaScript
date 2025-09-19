let obj = {
    firstName : "Akshay",
    lastName : "Sainiiii",
};

let printFullName = function (hometown,state){
        console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state);
    }
   let printName1 = printFullName.bind(obj, "Dehradun", "UttarKhand")
   console.log(printName1)//function
   printName1();

let obj2 = {
    firstName : "Sachin",
    lastName : "Tendulkar",
}
let printName2 = printFullName.bind(obj2, "Mumbai" , "Maharastra")
printName2()