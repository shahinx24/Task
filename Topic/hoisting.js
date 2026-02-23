// Hosting in javascript
// Function declarations are hoisted to the top of their scope, meaning they can be called before they are defined in the code.

// Example of function hoisting
console.log(a);
var a=5;
// output : Undifined
//it become
var a;
console.log(a); //Undifined
a=5;
// var a is hosted - not the value a=5 only var a;
