// Object in javaScript
// An object is a collection of properties, and a property is an association between a name (or key) and a value.
// Object is a collection of key-value pairs where keys are strings (or Symbols) and values can be of any data type.

// Creating an object
const person = {
    name: 'John',
    age: 30,
    isStudent: false
};
console.log(person); // Output: { name: 'John', age: 30, isStudent: false }
// Accessing object properties
console.log(person.name); // Output: John
console.log(person['age']); // Output: 30

// Adding a new property
person.city = 'New York';
console.log(person); // Output: { name: 'John', age: 30, isStudent: false, city: 'New York' }
// Modifying an existing property
person.age = 31;
console.log(person); // Output: { name: 'John', age: 31, isStudent: false, city: 'New York' }
// Deleting a property
delete person.isStudent;
console.log(person); // Output: { name: 'John', age: 31, city: 'New York' }

// Object with methods
const calculator = {
    add: function(a, b) {
        return a + b;
    }
};
console.log(calculator.add(5, 3)); // Output: 8

// Nested objects
const student = {
    name: 'Alice',
    age: 22,
    address: {
        street: '123 Main St',
        city: 'Los Angeles',
        state: 'CA'
    }
};
console.log(student.address.city); // Output: Los Angeles