// Anonymous function in JavaScript is a function that is defined without a name.
// These functions are often used as arguments to other functions or assigned to variables.

// Here is an example of how to use anonymous functions in JavaScript:
// Assigning an anonymous function to a variable
let greet = function(name) {
    return 'Hello, ' + name + '!';
};
console.log(greet('Alice')); // Output: Hello, Alice!

// Using an anonymous function as a callback
setTimeout(function() {
    console.log('This message is displayed after 2 seconds');
}, 2000);

// Using an anonymous function in array methods
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(function(num) {
    return num * num;
}); 
console.log(squares); // Output: [1, 4, 9, 16, 25]

// Using an anonymous function with event listeners
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button was clicked!');
}); 
// Note: In modern JavaScript, arrow functions are often used as a more concise syntax for anonymous functions.

// Here is an example using arrow functions:
let add = (a, b) => a + b;
console.log(add(3, 5)); // Output: 8