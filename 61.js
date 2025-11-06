// try ...catch...finally
// it's a way to handle errors in JavaScript so your program doesn't crash.

//syntax 

try{
    //code that might cause an error
} catch (error) {
    //code that always runs (error or not)
} finally {
    //code that always runs (error or not)
}

try{
    let output = 10/0
    console.log(output); //Infinity
    console.log(output + a);
} catch (error) {
    console.log("Error");
    console.log(error.name, error.message);
} finally {
    console.log("Hello I'll be there");
}

