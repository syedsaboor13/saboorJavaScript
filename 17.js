// Type Conversion
// Changing datatype from one type tp another

// Ex:let a = "10"==>
// convert 10 of string to 10 of number

// There are two types of conversions in JS
//1. Implicit conversion
//2. Explicit coversion 

//1.Implicit conversion ==> a=Automatic Conversion//

//1. Anything (any datatype) to string

// let result = 2 + "";
// // console.log(typeof result);

// let a = 1 + "hello"
// // console.log(a);

// let b = '2' + 4;
// // console.log(b);

// let c = 2 + 4;
// // console.log(c);

// let d = undefined + "3";
// console.log(d);

//num + str
// let x = 2 + "Two";
// console.log(x);

// //str + str
// let y = "Hello" + "world";
// console.log(y);

// //boolean + str
// let z = true + "Not";
// console.log(z);

// //null + str
// let p = 0 +"what";

// //undefined + str
// let q = undefined + 'hello'

//Anything to Number use only (-,*,/)

let a;
a = '5'+'3';
console.log(a);
a = '5' * 3;
console.log(a);
a = 10 / '2';
console.log(a);
a = 2 - 'Hi';
console.log(a); // NaN ===> Not an Number

// Anything to Boolean
// false - 0
// True - 1

let a1 = '5' - true;
let a2 = 2 + true;
let a3 = 0 + false;
console.log(a1);
console.log(a2);
console.log(a3);

// Null to Number
// null = 0

let b1 = 4+null;
console.log(typeof b1,b1);

// Undefined to null

let c1 = undefined*5;
let c2 = true+undefined;
console.log(c1);
console.log(c2);







