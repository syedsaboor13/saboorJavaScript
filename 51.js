//22. filter () Method

/*
the filter() method creates a new array filled with elements that pass a test (a condition you define in a function).
*/

//it does not change the original array

let arr = [1,2,3,4,5,6,7,8,9,10]
let output = arr.filter((x)=> x > 5)
console.log(output);

let arr1=[10,20,30,40,50]
let output1 = arr.filter((x)=> x > 30)
console.log(output1);

let student = ("suhail",20 , null , true, undefined,false )
let classRoom = [
{
    name:"SyedSaboor",
    age:81,
    college:"MJ"
},
{
    name:"Ibrahim",
    age:21,
    college:"SLDI"
},
{
    name:"Malik",
    age:21,
    college:"DRDO"
},
{
    name:"kalf",
    age:41,
    college:"Drop"
}
];

let output2 = classRoom.filter((a) => a.age<40);
console.log(output2);