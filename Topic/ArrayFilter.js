// Array Filter are used to create a new array with all elements that pass the test implemented by the provided function.
// The filter method does not modify the original array;
//  instead, it returns a new array containing the elements that meet the specified condition.

// Here is an example of how to use the filter method in JavaScript:
// Creating an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to create a new array with even numbers
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers);
// Output: [2, 4, 6, 8, 10]

// Creating an array of objects
let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 35 }
];
// Using filter to create a new array with people older than 25
let olderThan25 = people.filter(function(person) {
    return person.age > 25;
});
console.log(olderThan25);
// Output: [{ name: 'Bob', age: 30 }, { name: 'David', age: 35 }]