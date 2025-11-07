// Timer Function

/* 
Timer function let you schedule code exeution -either after a delay or repeatedly at intervals.
They are part of the web API's (in bronwersters) or node.js global timers (in backend JS) 
*/

// 1. setTimeout()

// console.log("step 1");

// setTimeout(()=>{
//     console.log("step 2");
// },5000)

// console.log("step 3");

// setTimeout(()=>console.log("step 4"),0)

//2. setInterval()

/*
The setInterval() method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
it continues running until you stop it using clearInterval().
*/

// setInterval(() => {
//     console.log("Hello CFI");
// },2000)

//clearInterval

let count =10;

const timer = setInterval(() => {
    console.log("Hello CFI");
    console.log(count);
    count--;
    if(count==0){
        console.log("Stopped");
        clearInterval(timer)
    }
},500)

