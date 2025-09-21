document.querySelector("#grandparent").addEventListener("click",(e)=>{
        console.log("Garndparent Clicked!");
        e.stopPropagation()
    },true);

    document.querySelector("#parent").addEventListener("click",()=>{
        console.log("parent clicked");
        
    },true);

    document.querySelector("#child").addEventListener("click",()=>{
        console.log("child click");
    },true);