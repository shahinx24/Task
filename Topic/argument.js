// Argument in javascript

function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8
console.log(add(10, 15)); // Output: 25
// Here, 5 and 3 are arguments passed to the 'add' function

function introduce(name, age) {
    return 'My name is ' + name + ' and I am ' + age + ' years old.';
}
console.log(introduce('John', 28)); // Output: My name is John and I am 28 years old.
console.log(introduce('Emma', 22)); // Output: My name is Emma and I am 22 years old.
// Here, 'John' and 28 are arguments passed to the 'introduce' function

function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(5, 10)); // Output: 50
console.log(calculateArea(7, 3));  // Output: 21
// Here, 5 and 10 are arguments passed to the 'calculateArea' function

function describePerson(name, age, isStudent) {
    return name + ' is ' + age + ' years old and is ' + (isStudent ? 'a student.' : 'not a student.');
}
console.log(describePerson('Alice', 20, true));  // Output: Alice is 20 years old and is a student.
console.log(describePerson('Bob', 25, false));   // Output: Bob is 25 years old and is not a student.
// Here, 'Alice', 20, and true are arguments passed to the 'describePerson' function