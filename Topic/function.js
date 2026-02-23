// Function to calculate the factorial of a number
function factorial(n) {
    if (n < 0) {
        return 'Factorial is not defined for negative numbers';
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(-3)); // Output: Factorial is not defined for negative numbers

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) { 
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// Example usage:
console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false