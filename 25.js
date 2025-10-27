// Switch Case in JS


/*  What is a switch statement?
A switch statement is used to campare one value agaiest multiple possible cases
it's often cleaner thaan writing if...else if conditions.

Basic syntax

js
switch (expression) {
    case value1:
        // code block if expression === value2
        break;

    case value2:
        //code block if expression === value2
        break;


    default
// code block if no case 
}
*/

let day = "Sunday";

switch (day) {
    case "Sunday":
        console.log("its a Sunday");
        break;
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "Wednesday":
        console.log("Wednesday");
        break;
    case "saturday":
        console.log("Its a Saturday");
        break;
    default:
        console.log("Please Enter the correct day");
        break;

}


let day2 = "Mondays"

if (day2 == "Monday") {
    console.log("Its monday");
}
else if (day2 == "Wednesday") {
    console.log("Its Wednesday ");
}
else if (day2 == "Friday"){
    console.log("Its Friday");
}
else if (day2 == "Sunday"){
    console.log("its a sunday");
}else {
    console.log("Enter Correct Day" );
}
