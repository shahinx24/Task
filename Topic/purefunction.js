// Pure Function in JavaScript

// A pure function is a function that, given the same input, will always return the same output 
// and does not have any side effects (i.e., it does not modify any external state or variables). 
// Pure functions are predictable and easier to test, making them a fundamental concept in 
// functional programming.

// Here is an example of how to create and use pure functions in JavaScript:

// A simple pure function that adds two numbers
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 (same input, same output)

// A pure function that calculates the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
console.log(factorial(5)); // Output: 120 (same input, same output)

// A pure function that returns a new array with each element doubled
function doubleArray(arr) {
    return arr.map(function(num) {
        return num * 2;
    });
}   
let numbers = [1, 2, 3];
let doubledNumbers = doubleArray(numbers);
console.log(doubledNumbers); // Output: [2, 4, 6]
console.log(doubleArray(numbers)); // Output: [2, 4, 6] (same input, same output)

// Note: Pure functions do not modify the input data
console.log(numbers); // Output: [1, 2, 3] (original array remains unchanged)