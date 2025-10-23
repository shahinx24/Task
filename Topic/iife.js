// Self invoking function or IIFE (Immediately Invoked Function Expression) in JavaScript
// An IIFE is a function that is defined and executed immediately after its creation.
// It is commonly used to create a new scope and avoid polluting the global namespace.

// Here is an example of how to create and use an IIFE in JavaScript:
(function() {
    // Code inside this function is executed immediately
    let message = 'Hello from IIFE!';
    console.log(message); // Output: Hello from IIFE!
})();

// IIFE with parameters
(function(name) {
    console.log('Hello, ' + name + '!'); // Output: Hello, John!
})('John');

// IIFE that returns a value
let result = (function(a, b) {
    return a + b;
})(5, 10);
console.log(result); // Output: 15

// IIFE to create a private scope
let counter = (function() {
    let count = 0; // private variable
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;

            return count;
        }
    };
})();

console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1