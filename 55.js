

// Reduce Method
/*
the reduce() method runs a function on each element of an array to reduce it to a single value (like sum, product, or combined result).
*/

//1. Accumulator => stories the previous step
//2. Currentvalue => current array element
//3. initialvalue => starting value

// let numbers = [10,20,30,40,50];

// let total = numbers.reduce((acc,cur) => {
//     return acc+cur;
// }, 0 );

// console.log(total);

// let numbers1 = [10,20,30,40,50];

// let total1 = numbers.reduce((acc,cur) => {
//     return acc*cur;
// }, 1 );

// console.log(total1);

// acc   acc + curr total

let str = ["h","e","l","l","o"]

let total2 = str.reduce((acc,cur) => acc+cur ; 0 );
console.log(total2);

