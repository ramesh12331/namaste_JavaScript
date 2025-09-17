const p = new Promise((resolve,reject)=>{
    resolve("Promise Resolved Values!!");
});

//always returna a promise
async function getData(){
    return p;
}

// const data = getData();
// console.log(data) //Promise

const dataPromise = getData();
dataPromise.then((res)=>console.log(res))//Namaste