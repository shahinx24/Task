// Object Literal in JavaScript
// An object literal is a comma-separated list of name-value pairs wrapped in curly braces {}.
// It is a simple and convenient way to create objects in JavaScript.

// Creating an object literal
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue'
};
console.log(car); // Output: { make: 'Toyota', model: 'Camry', year: 2020, color: 'blue' }
// Accessing object properties
console.log(car.make); // Output: Toyota
console.log(car['model']); // Output: Camry
// here, 'make', 'model', 'year', and 'color' are properties of the 'car' object and literal syntax is used to define it.

// Adding a new property
car.owner = 'Alice';
console.log(car); // Output: { make: 'Toyota', model: 'Camry', year: 2020, color: 'blue', owner: 'Alice' }

// Modifying an existing property
car.color = 'red';
console.log(car); // Output: { make: 'Toyota', model: 'Camry', year: 2020, color: 'red', owner: 'Alice' }

// Deleting a property
delete car.year;
console.log(car); // Output: { make: 'Toyota', model: 'Camry', color: 'red', owner: 'Alice' }

// Object literal with methods
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log(calculator.add(10, 5)); // Output: 15
console.log(calculator.subtract(10, 5)); // Output: 5

// Nested object literals
const student = {
    name: 'Bob',
    age: 21,
    address: {
        street: '456 Elm St',
        city: 'Chicago',
        state: 'IL'
    }
};
console.log(student.address.city); // Output: Chicago
console.log(student); // Output: { name: 'Bob', age: 21, address: { street: '456 Elm St', city: 'Chicago', state: 'IL' } }