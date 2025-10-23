// Recrursion in JavaScript

// Recursion is a programming technique where a function calls itself in order to solve a problem.
// In JavaScript, recursion can be used for tasks such as calculating factorials, traversing data structures, and more.

// Here is an example of a simple recursive function to calculate the factorial of a number:
function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial of (n - 1)
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// Another example of recursion is calculating the nth Fibonacci number:
function fibonacci(n) {
    // Base case: return n if it is 0 or 1
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    // Recursive case: sum of the two preceding Fibonacci numbers
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // Output: 8

// Recursion can also be used to traverse nested data structures, such as trees or objects:
function sumNestedArray(arr) {
    let sum = 0;

    for (let element of arr) {
        if (Array.isArray(element)) {
            // If the element is an array, call the function recursively
            sum += sumNestedArray(element);
        } else {
            // If the element is a number, add it to the sum
            sum += element;
        }
    }

    return sum;
}
let nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(sumNestedArray(nestedArray)); // Output: 21
// Note: Be cautious when using recursion, as excessive recursive calls can lead to stack overflow errors.t