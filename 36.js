// try catch in JavaScript

/*
the try....catch in statement in javaScript is used to handle runtime errror- it its your code keep runtime error -- it lets your code keep running even if something goes wrong

*/

// Basic Syntax

// try {
   
// }catch(error) {
//   console.log(error);
// }

try {
    let a =10;
    console.log(b);
}catch (error){
    // console.log(error);
    // console.log("Bro there is an error ");
    // console.log(error.name,error.message);
    console.log(error.stack);
}

