
// console.time("time");
// for (let i=1;i<=10; i++)
//     console.log(`5 x ${i} = ${5*i}`);
// console.timeEnd("time");


//forEach

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.time("time");

// numbers.forEach((n) => {
//     console.log(`5 x ${n} = ${5 * n}`);
// });

// console.timeEnd("time");

// map Method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.time("time");
const table = numbers.map((n) => {
    return `5 X ${n} = ${n * 5}`
})

console.log(table);

console.timeEnd("time");



