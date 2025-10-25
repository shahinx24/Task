// Array Methods in JavaScript
// Arrays come with a variety of built-in methods that allow you to manipulate and interact with the data they contain.
//  Here are some commonly used array methods:

// Creating an array
let fruits = ['Apple', 'Banana', 'Cherry'];

// Adding an element to the end of the array
fruits.push('Orange');
console.log(fruits);
 // Output: ['Apple', 'Banana', 'Cherry', 'Orange']

// Removing the last element from the array
let lastFruit = fruits.pop();
console.log(lastFruit);
 // Output: 'Orange'

// Finding the index of an element
let index = fruits.indexOf('Banana');
console.log(index);
 // Output: 1

// Removing an element by index
fruits.splice(index, 1);
console.log(fruits);
 // Output: ['Apple', 'Cherry']

// Iterating over the array
fruits.forEach(function(fruit) {
    console.log(fruit);
});
    // Output: 'Apple' 'Cherry'

// Mapping over the array to create a new array
let upperFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(upperFruits);
 // Output: ['APPLE', 'CHERRY']

// Filtering the array based on a condition
let filteredFruits = fruits.filter(function(fruit) {
    return fruit.startsWith('C');
});
console.log(filteredFruits);
// Output: ['Cherry']

// Array concat 
function concat3(string1, string2, string3, separator) {
    return string1.concat(separator, string2, separator, string3);
}
console.log(concat3('Hello', 'World', '2024', ' ,'));
// Output: 'Hello ,World ,2024'