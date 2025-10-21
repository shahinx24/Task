// for in loop in JavaScript
// The for...in loop is used to iterate over the enumerable properties of an object.
//  It allows you to loop through the keys of an object and access their corresponding values.

// Here is an example of how to use the for...in loop in JavaScript:

// Creating an object
let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
// Using for...in loop to iterate over the object properties
for (let key in person) {
    console.log(key + ': ' + person[key]);
}
// key is the property name, and person[key] gives the value associated with that property.

// Output:
// name: John
// age: 30
// city: New York