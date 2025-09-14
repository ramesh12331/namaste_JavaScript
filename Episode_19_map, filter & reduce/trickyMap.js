const users = [
    {firstName:"akshay",lastName:"sainy",age:26},
    {firstName:"donald",lastName:"trump",age:75},
    {firstName:"elon",lastName:"mask",age:50},
    {firstName:"deepika",lastName:"padukone",age:26},
]

//list of full name

const output = users.map((x)=>x.firstName + " " +x.lastName);
console.log(output)

// ***reduce***

//acc = {26:2,75:1,50:1}

const reduceOutPut = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{});

console.log(reduceOutPut);

// ***filter***

const filterOutPut = users.filter((x)=>x.age<30).map(x=>x.firstName);
console.log(filterOutPut);