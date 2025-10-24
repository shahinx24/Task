// Array For Each is used to execute a provided function once for each array element.
// The forEach method does not return a new array; it simply executes the function for each element in the original array.

// Here is an example of how to use the forEach method in JavaScript:

// Creating an array of numbers
let numbers = [11, 22, 33, 44, 55];
// Using forEach to log each number to the console
numbers.forEach(function(num) {
    console.log(num);
});
// Output:
// 11
// 22
// 33
// 44
// 55

// i can print only one element with for each ?
numbers.forEach(function(num, index) {
    if(index === 2) { // Print only the element at index 2
        console.log(num ,+"at index : "+ index);
    }
});
// Output:
// 33 at index : 2

// Using forEach with arrow function
numbers.forEach(num => console.log(num * 2));
// Output:
// 22