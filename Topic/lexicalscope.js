// Lexical Scope in JavaScript refers to the way variable scope is determined by the structure of the code.
// In lexical scoping, a function's scope is defined by its physical placement in the source code.
// This means that inner functions have access to variables declared in their outer (enclosing) functions,
// even if the outer function has finished executing.

// Here is an example of how lexical scope works in JavaScript:
function outerFunction() {
    let outerVar = 'I am from the outer function';
    
    function innerFunction() {
        let innerVar = 'I am from the inner function';
        console.log(outerVar); // Accessing variable from outer function
        console.log(innerVar); // Accessing variable from inner function
    }
    innerFunction();
    // console.log(innerVar); // Unaccessible here, will throw an error
}
outerFunction();

// Another example demonstrating lexical scope with nested functions
function grandParentFunction() {
    let grandParentVar = 'I am from the grandparent function';
    function parentFunction() {
        let parentVar = 'I am from the parent function';
        function childFunction() {
            let childVar = 'I am from the child function';
            console.log(grandParentVar); // Accessing variable from grandparent function
            console.log(parentVar);      // Accessing variable from parent function
            console.log(childVar);       // Accessing variable from child function
        }
        childFunction();
    }
    parentFunction();
}
grandParentFunction();

// Understanding lexical scope is essential for working with closures and managing variable accessibility in JavaScript.