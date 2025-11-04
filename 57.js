// CRUD

let user={
    fname:"Bob",
    age:123,
    city:"XYZ"
}

user.phone = 1234567890
// console.log(user);

// console.log(user.fname)

user.age = 120
// console.log(user);

delete user.city
// console.log(user);

let person={
    isAlive:undefined,
    isSlepping:false
}

// Create
person.add = "Created"
console.log(person);

//Read
console.log(person.isSlepping);

//Update
person.isSlepping=true
console.log(person);

//Delete 
delete person.isAilve
console.log(person);