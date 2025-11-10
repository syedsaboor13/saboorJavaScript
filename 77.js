

// Dates in JavaScript

/*
JavaScript Date and Time
In JS, date and time are represented by the date object. The Data objects provides the date and time
information and also provides various methods.

A JS date defines the EcmaScript epoch that represents milliseconds since 1 jan 1970 UTC. This date and time is the same as the UNIX epoch (predominant base value for computer-recorded date and time values).

Creating Data Objects
There are four ways to Create a date object.

new Date ()
new Date (milliseconds)
new Date (Date String)
new Date (year, Month, day, hours, minutes, seconds, milliseconds)

JS has a built-in Date objects to handle dates and times

*/

// const currentDate = new Date();
// console.log(currentDate);

// const date1 =new Date ("2025-11-10T11:23:45.348Z")
// console.log(date1);

// const date2 = new Date(2025, 11, 10, 19, 14, 29);
// console.log(date2);

// const date3 = new Date(1762800000000)
// console.log(date3);

const now = new Date();
console.log(now);


// Date Methods
// Fetch Specific things from current date

// 0. getMilliSeconds()
let onlyMillSeconds = now.getMilliseconds();
console.log(onlyMillSeconds);

// 1. getfullyear()
let fullyear = now.getFullYear()
console.log(fullyear); 

// 2. getMonth() =>0 Jan ...till 11
let month =now.getMonth()
console.log(month);

// 3. getDate() => 1- 31
let date = now.getDate()
console.log(date);

// 4. getDay()
let day = now.Day()
console.log(day);

// 5.


// How to get till Now Milliseconds

console.log(d.getTime());

// let now - new Date();

let tillNowMilliseconds = Date.now();
console.log(tillNowMilliseconds);

let tillNow = +new Date();
console.log(tillNow);

