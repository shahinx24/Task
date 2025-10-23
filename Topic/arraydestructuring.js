// Array Destructuring is a convenient way to extract values from arrays and assign them to variables in JavaScript.
// It allows you to unpack values from arrays into distinct variables in a concise manner.

// Here is an example of how to use array destructuring in JavaScript:

// Basic array destructuring
let rgb = [255, 0, 2];
let [red, green, blue] = rgb;
console.log(red);   // Output: 255
console.log(green); // Output: 0
console.log(blue);  // Output: 2

// Skipping elements during destructuring
let numbers = [1, 2, 3, 4, 5];
let [first, , third] = numbers;
console.log(first); // Output: 1
console.log(third); // Output: 3

// Using default values in destructuring
let coords = [10];
let [x, y = 0] = coords;
console.log(x); // Output: 10
console.log(y); // Output: 0
