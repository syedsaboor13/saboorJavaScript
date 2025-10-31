// console.time("time");
// for (let i=1;i<=1000; i++)
//     console.log(`5 x ${i} = ${5*i}`);
// console.timeEnd("time");

//21ms

// forEach

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const number = Array.from({ length: 1000}, (_, i) => i+1);
// console.time("time");

// number.forEach((n) => {
//     console.log(`5 x ${n} = ${5 * n}`);
// });

// console.timeEnd("time");


//30ms


const number = Array.from({ length: 1000}, (_, i) => i+1);
console.time("time");
const table = number.map((n) => {
    return `5 X ${n} = ${n * 5}`
})

console.log(table);

console.timeEnd("time");