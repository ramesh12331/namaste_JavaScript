let obj = {
    firstName : "Akshay",
    lastName : "Saini",
    printFullName : function (){
        console.log(this.firstName + " " + this.lastName);
    },
};
obj.printFullName();

let obj2 = {
    firstName : "Sachin",
    lastName : "Tendulkar",
}
//functio borrowing
obj.printFullName.call(obj2)