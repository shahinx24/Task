// scope in javaScript

// Scope in JavaScript refers to the accessibility or visibility of variables and functions 
// in different parts of the code. JavaScript has three types of scope: global scope, 
// function scope, and block scope.

// 1. Global Scope: Variables declared outside of any function or block have global scope
// and can be accessed from anywhere in the code.

let globalVar = 'I am a global variable';
function showGlobalVar() {
    console.log(globalVar); // Accessible here
}
showGlobalVar();
console.log(globalVar); // Accessible here too

// 2. Function Scope: Variables declared within a function are only accessible within that function.
function myFunction() {
    let functionVar = 'I am a function variable';
    console.log(functionVar); // Accessible here
}
myFunction();
// console.log(functionVar); // Unaccessible here, will throw an error

// 3. Block Scope: Variables declared with let or const within a block (e.g., inside
// curly braces {}) are only accessible within that block.
if (true) {
    let blockVar = 'I am a block variable';
    console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Unaccessible here, will throw an error

// Understanding scope is crucial for managing variable lifetimes and avoiding naming conflicts in JavaScript.