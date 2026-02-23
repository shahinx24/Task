// Rest Parameter in JavaScript allows a function to accept an indefinite number of arguments as an array.
// It is represented by three dots (...) followed by the name of the array that will hold the rest of the arguments.

// Here is an example of how to use rest parameters in JavaScript:
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(10, 20, 30, 40, 50)); // Output: 150

// Rest parameters can be used alongside regular parameters
function multiply(factor, ...values) {
    return values.map(value => value * factor);
}
console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
console.log(multiply(3, 4, 5, 6)); // Output: [12, 15, 18]

// Rest parameters must be the last parameter in the function definition
function createArray(firstElement, ...restElements) {
    return [firstElement, ...restElements];
}
console.log(createArray(1, 2, 3, 4)); // Output: [1, 2, 3, 4]
console.log(createArray('a', 'b', 'c')); // Output: ['a', 'b', 'c']

// Note: Rest parameters are different from the "arguments" object.
// The "arguments" object is not a real array, while rest parameters are true arrays.
function showArguments() {
    console.log(arguments); // Output: [object Arguments]
}
showArguments(1, 2, 3);
function showRestParameters(...args) {
    console.log(args); // Output: [1, 2, 3]
}
showRestParameters(1, 2, 3);
// Rest parameters can also be used in combination with destructuring
function displayInfo(name, ...[age, city]) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
displayInfo('Alice', 30, 'New York'); // Output: Name: Alice, Age: 30, City: New York
displayInfo('Bob', 25, 'Los Angeles'); // Output: Name: Bob, Age: 25, City: Los Angeles

// Rest parameters provide a flexible way to handle functions with variable numbers of arguments in JavaScript.