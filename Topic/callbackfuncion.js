// Call Back Function in JavaScript

// A callback function is a function that is passed as an argument to another function 
// and is executed after some operation has been completed. Callback functions are 
// commonly used for asynchronous operations, event handling, and array methods.

// Here is an example of how to use callback functions in JavaScript:
// A simple function that takes a callback function as an argument
function fetchData(callback) {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(function() {
        let data = 'Sample Data';
        // Calling the callback function with the fetched data
        callback(data);
    }, 2000);
}

// Using the fetchData function with a callback
fetchData(function(data) {
    console.log('Data received:', data);
});
// Output after 2 seconds: Data received: Sample Data

// Using callback functions with array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Using callback functions with event listeners
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button was clicked!');
});
// Note: In modern JavaScript, arrow functions are often used as a more concise syntax for callback functions.

// Here is an example using arrow functions:
document.getElementById('anotherButton').addEventListener('click', () => {
    alert('Another button was clicked!');
});
// Using arrow functions with array methods
let tripled = numbers.map(num => num * 3);
console.log(tripled); // Output: [3, 6, 9, 12, 15]

// Callback functions are essential in JavaScript for handling asynchronous operations and events effectively.