// Array Reduce are used to execute a reducer function on each element of the array, resulting in a single output value.
// The reduce method processes each element of the array (from left to right) and accumulates a single result based on the logic defined in the reducer function.

// Here is an example of how to use the reduce method in JavaScript:
// Creating an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Using reduce to calculate the sum of all numbers in the array
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);
// Output: 15

// Using reduce to find the maximum value in the array
let max = numbers.reduce(function(accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
}, numbers[0]);
console.log(max);
// Output: 5

// Using reduce to function values
function averageOf4Numbers(nr1, nr2, nr3, nr4) {
    let numbers = [nr1, nr2, nr3, nr4];
    let sum = numbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);
}
    return sum / numbers.length;

let average = averageOf4Numbers(11, 9, 28, 20.25);
console.log(average);
// Output: 17.5625