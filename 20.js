// If-else Condidional Statements

/*

if...else is used to run code conditionally - only
when a Specific expression evaluates to true.



There are three types of if else statements

1.if statements
2.if .....else statement
3.if ... else if ... else

*/


// if 
let age =23;
if (age>=18) {
    console.log("Hello Adults");
}
console.log("Hi Child");



//if ....else
let voter =13
if (voter>=18) {
    console.log("you can vote");
} else {
    console.log("You cannot vote");
}


//if ...else if ....else
//if ===> 1st condition
//else if ===> 2nd to nth condition
//else ===> false condition

let marks = 84;
if (marks>=90) {
    console.log("A+");
}else if (marks>=80){
    console.log("A");
}else if (marks>=70){
    console.log("B+");
}else if (marks>=60){
    console.log("B");
}else if (marks>=50){
    console.log(C);
}else if (marks>=40){
    console.log(D);
}else{
    console.log("you Failed");
}

// if temp is greater than 35 --->its Hot
// if is greater then 25 ---> its nice and normal
// or else its cold

let temp = 43;
if (temp>35){
    console.log("its Hot");
} else if (temp>=25){
    console.log("Its nice and normal");
} else {
    console.log("Its Cold");
}



