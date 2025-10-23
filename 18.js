//2. Explicit conversion

// 1.Using Number() Method

let a = Number("10");
console.log(a);
a = Number(true);
console.log(a);
a = Number(null);
console.log(a);
a = Number("");
console.log(a); //0

// String Method

let b;
b = String(23);
console.log(b);
b = String(true);
console.log(b);
b = String(null);
console.log(b);
b = String(undefined)
console.log(b);

// Boolean Method

let c;
c = Boolean(null);
console.log(c);
c = Boolean(undefined);
console.log(c);
c = Boolean(2344)
console.log(c);
c = Boolean("0");
console.log(c);
