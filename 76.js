

/* JSON Methods in javaScript

JavaScript provides two main global methods under the JSON objects :

1. JSON.stringify() convets object => JSON string

2. JSON.parse()
Converts a JSON string -> JavaScript object 
*/

let person = {
    fname:"Bob",
    age: 20,
    isAlive: true,
    isSleeping: null
}

console.log(person);
console.log(typeof person); //Obj

let final = JSON.stringify(person);
console.log(final);
console.log(typeof final);

let jsonPerson = `("fullName":"BOb" ,"age" : 20, "isAlive" : true , "isSleeping" : null)`
console.log(jsonPerson);
console.log(typeof jsonPerson);

let convertToObject = JSON.parse(jsonPerson)
console.log(convertToObject);
console.log(typeof convertToObject);

