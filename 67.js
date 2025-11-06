/*

JavaScript ES6 (also known as ECMAScript 2015 or ECMAscript) is the sixth edition of JavaScript introduced in june 2015.

ECMAscript (European computer Manufactures Association Script) is the Standard Speavification of JAvaScript to ensure compatability in all browers and environments.

This tutorial provides a summary of comonly used feetures and syntax improvements of ES6

*/

// 1. let and const

let a = 10;
console.log(a);

a= 20
console.log(a);

const phone = 123456789
console.log(phone);

phone = 098765431
console.log(phone);

// 2. Arrow Function

let test = () => {
    console.log("hello");
}

test()

// 3.Templet leturaualrs
let name = "bob"
console.log(`Hi my name is ${name}`);

//4. Defaut parameters

//5. Destructurting Assignment

let person = {
    fName:"BOB",
    age:100,
    isAlive = true
};

let {fName, age , isAlive} =person;
console.log(fName, age, isAlive);

// let a = person.fname
// console.log(b)

let person2 = ["Suhail", age , true, null, undefined];

//let fname = person[0]
// console.log(fName);

let [a , b , c, d] = person2
console.log(a,b,c,d);
