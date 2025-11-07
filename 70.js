

// Call Back Interval

/*
A Callback Function is a function passed as an argument to another function,
and is called ("called back") later inside that function.
*/

function greet (a,b){
    console.log("Hello"  +  a);
    b(); //b==aftergreeting
}

function aftergreeting(){
    console.log("Welcome to Code.live!");
}
greet("BOB", aftergreeting)

