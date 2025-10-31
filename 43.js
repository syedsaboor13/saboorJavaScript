// 21. map Method()

// map Method
// Transforms each elements and
// returns a new array

// Return Value : New Array
// Chainable : Yes
// Changes Original : Yes
// Common Use Case : Create new Array

// ex: Creates a New array with modified values and
// return in a new array by default

let numbers = [1, 2, 3, 4, 5]
//forEach
// numbers.forEach((x) =>{
//     console.log(x);
// });

console.log(numbers); // 12345
let final = numbers.map ((x) => x *2);
console.log(final);  // 246810
console.log(numbers);

// Mutating vs Non-Mutating

// 1. push 
// 2. pop
// 3. shift
// 4. unshift
// 5. splice
// 6. sort
// 7. reverse
// 8. forEach (with ForeFully)

// Non-Mutating

// 1. map
// 2. filter
// 3. slice 
// 4. concat 
// 5. reduce