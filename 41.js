//20. forEach() Method

// Purpose : Executes a function for each element
// Return value : undefined
// Chainable : NO
// Chainable Original Array : NO
// Common Use : Logging,Saving Data

//ex ; forEach just : just loops - doesnt return anything.

let numbers = [1, 2, 3, 4, 5];

// for(let i=0; i< numbers.length; i++ )

console.log(numbers);
numbers.forEach((ele) => {
    console.log(ele*100);
});

console.log(numbers);

let names =["kaif","Sabboor","rayyan","Kamran"]

names.forEach((x) =>{
    console.log(x);
});

