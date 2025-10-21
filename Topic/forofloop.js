// For of Loop in JavaScript
// The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, and more.
// It allows you to loop through the values of these objects directly, without needing to access them via an index or key.

// Here is an example of how to use the for...of loop in JavaScript:

// Creating an array
let fruits = ['Apple', 'Banana', 'Cherry'];

// Using for...of loop to iterate over the array elements
for (let fruit of fruits) {
    console.log(fruit);
}
// Output:
// Apple
// Banana
// Cherry

// You can also use the for...of loop with other iterable objects, such as strings:
let message = 'Hello';
for (let char of message) {
    console.log(char);
}
// Output:
// H
// e
// l
// l
// o