// Array Sort are used to sort the elements of an array in place and return the sorted array.
//  The default sort order is ascending, built upon converting the elements into strings.
// The sort method modifies the original array and also returns a reference to the same array.

// Here is an example of how to use the sort method in JavaScript:

// Creating an array of numbers
let numbers = [40, 100, 1, 5, 25, 10];

// Sorting the array in ascending order
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);
// Output: [1, 5, 10, 25, 40, 100]

// Creating an array of strings
let fruits = ['Banana', 'Apple', 'Cherry', 'Mango'];

// Sorting the array in alphabetical order
fruits.sort();
console.log(fruits);
// Output: ['Apple', 'Banana', 'Cherry', 'Mango']

// Sorting the array in reverse alphabetical order
fruits.sort(function(a, b) {
    return b.localeCompare(a);
});
console.log(fruits);
// Output: ['Mango', 'Cherry', 'Banana', 'Apple']


// Note: When sorting numbers, it's important to provide a compare function to ensure numerical sorting.
// Sorting the array numers descendingly
numbers.sort(function(a, b) {
    return b - a;
});
console.log(numbers);
// Output: [100, 40, 25, 10, 5, 1]

// Sorting the array numbers back to ascending order
numbers.sort(function(a, b) {
    return a - b;
});
console.log(numbers);