// for (let i =1; i<=10; i++){
//     console.log(`2 x ${i} = ${i * 2}`);
// }

// for(let a=1; a<=20; a++){
//     console.log(`5 X ${a} = ${a * 5}`)
// }

// for (let x=1; x<=100; x++ ){
//     console.log(`100 X ${x} = ${x * 100}`);
// }



// let i=1
// while(i<=100){
//     console.log(`100 X ${i} = ${i*100}`);
//     i++;
// }


// let x=1;
// do {
//     console.log(`100 X ${x} = ${x*100}`);
//     x++;
// } while(x<=100)


/* Break : it stops the condition or program
    Continue : it skips a step
*/


for (let i =1; i <=10; i++){
    console.log(i);
    if (i == 5){
        console.log("i have stopped");
        break;
    }
}

for (let i=1; i <=10; i++){
    if (i == 5){
        continue;
    }
    console.log(i);
}