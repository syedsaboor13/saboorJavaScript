// Object Method 

// 1.Object.entries Method
/*
Object.entries() in JavaScript is a built-in method that returns an array of key-value pair fromm an object.
*/


let person = {
    fname:"Alexzander",
    age:2000,
    isAilve:true
}
let output = Object.entries(person)
// console.log(output);


//Example with nested Arrays

// let arr = [["fname","Alexzander"],["age",2000],["isAilve",true]]
// //  index     00       01          10    11       20      21
// console.log(arr[1][1]);
// console.log(arr[1]);



//2.Object.keys()
/*
returns an array of keys (property names of the object)
*/

let user={
    fname:"Bob",
    age:123,
    city:"XYZ"
}
let output1 = Object.keys(user)
// console.log(output1);

//3.Object.values()
/*
Returns an array of values from the object.
*/

let user1={
    fname:"Bob",
    age:123,
    city:"XYZ"
}
// console.log(Object.values);


//4.Object.freeze()
/*
Freezes an object so that:
you cannot add, remove, or change properties.
It makes the object completely immutable.
*/

let object = {
    fname:"Slime",
    age:123,
    phone:1234567
}
console.log(object);
Object.freeze(object)

//now you cant do CRUD Oprations
object.create = "Created"

//5.Object.isFrozen()
/*
Checks if the Object is frozen or not
It gives value in boollean
*/

let person1= {
    fname:"Slime",
    age:123,
    phone:1234567
}
Object.freeze(person1)
console.log(Object.isFrozen(person1)); 


