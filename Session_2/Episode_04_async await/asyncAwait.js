const p = new Promise((resolve,reject)=>{
    resolve("Promise Resolved Values!!");
});

//await can only be used inside an async function
async function handlePromise() {
    const val = await p;
    console.log(val)
}
handlePromise()