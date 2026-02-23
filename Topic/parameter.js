// Parameter in JavaScript functions are variables that act as placeholders for the values (arguments)
// that are passed to the function when it is called. Parameters allow functions to accept input and operate on that input.

// Here is an example of how to use parameters in JavaScript functions:

// A simple function with parameters
function greet(name, age) {
    return 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';
}
console.log(greet('Alice', 30)); // Output: Hello, my name is Alice and I am 30 years old.
console.log(greet('Bob', 25));   // Output: Hello, my name is Bob and I am 25 years old.
// here 'name' and 'age' are parameters of the 'greet' function

// Function with default parameters 
function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5));    // Output: 10 (b defaults to 2)
console.log(multiply(5, 3)); // Output: 15 (b is explicitly set to 3)
// Here, 'b' has a default value of 2 if no argument is provided

// Function with multiple parameters
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 10)); // Output: 50
console.log(calculateArea(7, 3));  // Output: 21
// Here, 'length' and 'width' are parameters used to calculate the area of a rectangle

// Function with parameters of different types
function describePerson(name, age, isStudent) {
    return name + ' is ' + age + ' years old and is ' + (isStudent ? 'a student.' : 'not a student.');
}
console.log(describePerson('Charlie', 22, true));  // Output: Charlie is 22 years old and is a student.
console.log(describePerson('Diana', 28, false));   // Output: Diana is 28 years old and is not a student.
// Here, 'isStudent' is a boolean parameter