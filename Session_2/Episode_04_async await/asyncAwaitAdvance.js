const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Values!!");
    },5000)
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Values!!");
    },10000)
});

//await can only be used inside an async function
async function handlePromise() {
    console.log("Hello World");
    const val = await p1;
    console.log("Namaste Javascript");
    console.log(val)

    const val2 = await p2;
    console.log("Namaste Javascript2");
    console.log(val2)
   
}
handlePromise()