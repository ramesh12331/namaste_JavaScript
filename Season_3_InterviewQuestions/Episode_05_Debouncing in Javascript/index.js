// Debouncing in JavaScript

let count = 0;

const getData = () =>{
    console.log("Fetching Data....", count++)
}

const debounce = function(fn,d){
    return function(){
        let timer;
        let context = this;
        args = arguments;
        clearInterval(timer)
        timer = setTimeout(()=>{
            getData.apply(context,arguments)
        },d)
    }
}

const betterFunction = debounce(getData,300);