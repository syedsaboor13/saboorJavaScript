// return keyword with functions

function sumNumbers(a, b) {
  a + b;
}
let final = sumNumbers(2, 5);
console.log(final); //undifined

function sum(a, b) {
  let x = a + b;
  console.log(x);
  return x;
}
let total = sum(2, 4);
console.log(total * 2);

/*
 Note :
1. use return to pass the value
2. U cannot write anything after return
*/


