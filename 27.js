// 2. Function with parameters
// Parameters ==> passed as variables
// Arguments --> Passed as values

// let a =10;
// let b =20;

function saySaboor(a, b , c) {
    console.log(a + b + c);
}

saySaboor(10, 20 , 30)

// a,b are parameters
// 10, 20 are arguments

function whoAmI(FullName){
    console.log(`I am ${FullName} from CFI`);
}

whoAmI("Suhail")

// let phone = "09876542345"
// let aadharCard = "123456543"
// let age = 18
// let name = "saboor"

function details(phone, aadharCard, age , name) {
console.log(`phone number is ${phone}`);
console.log(`aadharcard number is ${aadharCard}`);
console.log(`age is ${age}`);
console.log(`name is ${name}`);
}
details("23456", "12345", 18, "saboor");
