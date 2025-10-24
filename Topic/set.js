// Set in javascript

// Creating a Set
const mySet = new Set();
console.log(mySet); // Output: Set(0) {}

// Adding values to a Set
mySet.add(1);
mySet.add(5);
mySet.add('Hello');
console.log(mySet); // Output: Set(3) { 1, 5, 'Hello' }

// Checking the size of a Set
console.log(mySet.size); // Output: 3
// Checking if a value exists in a Set
console.log(mySet.has(1)); // Output: true
console.log(mySet.has(3)); // Output: false

// Deleting a value from a Set
mySet.delete(5);
console.log(mySet); // Output: Set(2) { 1, 'Hello' }

// Iterating over a Set
mySet.forEach(value => {
    console.log(value);
});
// Output:
// 1 
// Hello

// Delete Duplicate in an Array using Set
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
