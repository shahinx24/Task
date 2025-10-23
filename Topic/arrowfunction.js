// Arrow function in JavaScript is a concise way to write functions using the "=>" syntax.
// Arrow functions are often used for shorter function expressions and do not have their own "this" context.

// Here is an example of how to use arrow functions in JavaScript:
let add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// Arrow function with a single parameter (no parentheses needed)
let square = x => x * x;
console.log(square(4)); // Output: 16

// Arrow function with no parameters (empty parentheses needed)
let greet = () => 'Hello, World!';
console.log(greet()); // Output: Hello, World!

// Arrow function with a block body (requires explicit return)
let multiply = (a, b) => {
    let result = a * b;
    return result;
};
console.log(multiply(3, 4)); // Output: 12

// Using arrow functions with array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]