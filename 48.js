/*
recursion is when a function calls itsself to solve a smaller version of the same problem - Untill it reaches a base case (a stopping point)
*/

// function hello (){
//     for(let i =1;i ;i++){
//     console.log("Hello CFI");
//     hello()
//     } console.log(i);
// }

// hello();


// function call (num){
//     console.log("num value =", num);
//     if (num ==3)return console.log("stopped");

//     console.log("Calling the function");
//     call(num-1)
// }

// call(5)


let i =1 ;
function test(){
   i = i + 1;
  console.log(i);
    test()
}
test()