// Factoral in JS

// 5! = 5x4x3x2x1
// 4! = 4x3x2x1

// let result = 1
// for (let i = 5; i > 0; i--){
//     // result = result * i
//     result *= i;
//     console.log(result);
// }

function fac(n){
    let final = 1;
    for (let i = 5; i > 0; i--){
        final *= i;
    }
    return final
}

let ans = fac(4)
console.log(ans);


//With recursion 

function factorial (a){
    if (a == 0) return 1; 
    return a*factoral( a-1);
}
factorial(5)

let output =factorial(0)
console.log(output);

