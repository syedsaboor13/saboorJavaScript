

// Math Methods

/*
In JS , the math object provides a set of built-in mathematical methods and contants for performing common math operations - like rounding numbers, gene

*/


let n1 = -5; 
// console.log(Math.abs(n1));  // Returns abosolute

let n2 = -356.1234
// console.log(Math.round(n2));  // rounds to nearest integer

let n3 = 12.123
// console.log(Math.ceil(n3));  // Rounds up

let n4 = -45.65
// console.log(Math.floor(n4));   // Rounds down

let n5 = -54.345
// console.log(Math.trunc(n5));  // Removes Decimal part

let n6 = -54.456
// console.log(Math.sign(n6));  //returns 1, -1, or 0 (sign of number)


// 2. Random Numbers


let min =1 
let max =100

let randomNumber =Math.floor(Math.random() * (max +1 -min) + min);
console.log(randomNumber);
