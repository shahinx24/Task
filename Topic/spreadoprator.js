// Spread Oprator in JavaScript is used to expand or spread iterable objects like arrays and strings into individual elements.
// It is represented by three consecutive dots (...).

// Here is an example of how to use the spread operator in JavaScript:
// Using spread operator to expand an array
let numbers = [1, 2, 3];
let expandedNumbers = [...numbers, 4, 5, 6];
console.log(expandedNumbers); // Output: [1, 2, 3, 4, 5, 6]

// Using spread operator to copy an array
let originalArray = ['a', 'b', 'c'];
let copiedArray = [...originalArray];
console.log(copiedArray); // Output: ['a', 'b', 'c']

// Using spread operator to merge arrays
let array1 = [1, 2];
let array2 = [3, 4];
let mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4]

// Using spread operator with function arguments
function sum(a, b, c) {
    return a + b + c;
}
let nums = [1, 2, 3];
console.log(sum(...nums)); // Output: 6

// Using spread operator with strings
let str = 'Hello';
let charArray = [...str];
console.log(charArray); // Output: ['H', 'e', 'l', 'l', 'o']

// Using spread operator to convert NodeList to Array
let nodeList = document.querySelectorAll('div');
let nodeArray = [...nodeList];
console.log(nodeArray); // Output: Array of div elements

// Note: The spread operator can only be used with iterable objects like arrays, strings, maps, and sets.