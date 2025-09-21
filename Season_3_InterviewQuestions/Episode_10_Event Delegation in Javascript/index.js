document.querySelector("#category").addEventListener("click",(e)=>{
    // console.log("Category parent clicked")
    console.log(e.target);
    window.location.href = "/" + e.target.id
})