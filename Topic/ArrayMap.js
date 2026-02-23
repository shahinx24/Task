// Array Map are used to create a new array by applying a function to each element of an existing array.
// The map method does not modify the original array; instead, it returns a new array containing the results of the function applied to each element.

// Here is an example of how to use the map method in JavaScript:

// Creating an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Using map to create a new array with each number squared
let squaredNumbers = numbers.map(function(num) {
    return num * num;
});
console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]

// Creating an array of strings
let fruits = ['Apple', 'Banana', 'Cherry'];

// Using map to create a new array with the length of each fruit name
let fruitLengths = fruits.map(function(fruit) {
    return fruit.length;
});
console.log(fruitLengths);
// Output: [5, 6, 6]