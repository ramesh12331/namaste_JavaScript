//Promise.all

const p1 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P1 seconds"),3000);
     setTimeout(()=>reject("P1 seconds"),3000);
}); 

const p2 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P2 seconds"),2000);
    setTimeout(()=>reject("P2 Fails"),1000);
});

const p3 = new Promise((resolve,reject)=>{
    // setTimeout(()=>resolve("P3 seconds"),1000)
    setTimeout(()=>reject("P3 Fail"),2000)

});

Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    // console.log(err);
    console.error(err);
    console.log(err.errors[0])
})