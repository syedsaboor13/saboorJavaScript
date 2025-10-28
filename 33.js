// Objects in Java Script

// Non Primitive ==> you can Store multiple data types

// object uses key value pair 
// left side is key
// right side is value
// to access value use the key
// ex: fname: 
// after every value add an comma


let person = {
    fname:"Saboor",
    phone: 9704717707,
    age: 18,
    isAlive:true,
    isSleeping:null,
    health:undefined
}
console.log(person);

// How to access object keys
//1. dot notation

console.log(person.isAlive);
console.log(person.health);

//2. using bracket nonatation

console.log(person["fname"]);


