// Object Destructuring in JavaScript
// Object destructuring is a convenient way to extract multiple properties from an object and assign them to variables.
// It allows you to unpack values from objects into distinct variables in a single statement.

// Here is an example of how to use object destructuring in JavaScript:
const person = {
    name: 'John',
    age: 30,
    occupation: 'Engineer'
};
// Destructuring the object
const { name, age, occupation } = person;
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(occupation); // Output: Engineer
// Here, 'name', 'age', and 'occupation' are variables that hold the corresponding values from the 'person' object.

// Destructuring with different variable names
const { name: fullName, age: yearsOld } = person;
console.log(fullName); // Output: John
console.log(yearsOld); // Output: 30
// Here, 'fullName' and 'yearsOld' are variables that hold the values of 'name' and 'age' from the 'person' object respectively.

// Destructuring with default values
const { name: firstName, gender = 'Male' } = person;
console.log(firstName); // Output: John
console.log(gender); // Output: Male
// Here, 'gender' is assigned a default value of 'Male' since it does not exist in the 'person' object.

// Nested object destructuring
const student = {
    name: 'Alice',
    age: 22,
    address: {
        street: '123 Main St',
        city: 'Los Angeles',
        state: 'CA'
    }
};
const { name: studentName, address: { city, state } } = student;
console.log(studentName); // Output: Alice
console.log(city); // Output: Los Angeles
console.log(state); // Output: CA
// Here, 'studentName', 'city', and 'state' are variables that hold the corresponding values from the nested 'student' object.
