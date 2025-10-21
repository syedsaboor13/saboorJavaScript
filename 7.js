// Function Scope           VAR     LET     CONST
// Inside of Function        ✅     ✅      ✅
// Outside if Function       ❌     ❌      ❌    

// declaration
function hello() {
    const a = 10;
}
console.log(a);
