// Return Keyword in JavaScript is used to specify the value that a function should output when it is called.
// When a return statement is executed, the function stops executing and returns the specified value to the caller.

// Here is an example of how to use the return keyword in JavaScript:
function add(a, b) {
    return a + b; // The function returns the sum of a and b
}
console.log(add(2, 3)); // Output: 5

function greet(name) {
    return 'Hello, ' + name + '!'; // The function returns a greeting message
}
console.log(greet('Alice')); // Output: Hello, Alice!

// A function can have multiple return statements
function checkNumber(num) {
    if (num > 0) {
        return 'Positive'; // Returns 'Positive' if num is greater than 0
    } else if (num < 0) {
        return 'Negative'; // Returns 'Negative' if num is less than 0
    } else {
        return 'Zero'; // Returns 'Zero' if num is 0
    }
}
console.log(checkNumber(10));

console.log(checkNumber(-5));
console.log(checkNumber(0)); // Output: Positive, Negative, Zero

// If a function does not have a return statement, it returns undefined by default