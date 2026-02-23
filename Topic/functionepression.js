// Fnction Expression in javaScript

// A function expression is a way to define a function in JavaScript using an expression. 
// It can be anonymous (without a name) or named. Function expressions are often used 
// when you want to create a function and assign it to a variable or pass it as an argument 
// to another function.

// Here is an example of how to use function expressions in JavaScript:
// Anonymous function expression assigned to a variable
let greet = function(name) {
    return 'Hello, ' + name + '!';
};
console.log(greet('Bob')); // Output: Hello, Bob!

// Named function expression assigned to a variable
let factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
};
console.log(factorial(5)); // Output: 120

// Using function expression as a callback
setTimeout(function() {
    console.log('This message is displayed after 1 second');
}, 1000);

// Using function expression in array methods
let numbers = [1, 2, 3, 4, 5]; 
let cubes = numbers.map(function(num) {
    return num * num * num;
});
console.log(cubes); // Output: [1, 8, 27, 64, 125]