// New KeyWord in JavaScript
//  New KeyWord is another way to create an object in JavaScript.
// It is used to create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.

// Here is an example of how to use the new keyword in JavaScript:
// Creating a new Date object
let currentDate = new Date();
console.log(currentDate); // Output: Current date and time
// Here, 'Date' is a built-in constructor function, and 'currentDate' is an instance of the Date object created using the 'new' keyword.

// Creating a new Array object
let fruits = new Array('Apple', 'Banana', 'Cherry');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']
// Here, 'Array' is a built-in constructor function, and 'fruits' is an instance of the Array object created using the 'new' keyword.

// Creating a user-defined object using a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person('John', 30);
let person2 = new Person('Alice', 25);
console.log(person1); // Output: Person { name: 'John', age: 30 }
console.log(person2); // Output: Person { name: 'Alice', age: 25 }
// Here, 'Person' is a user-defined constructor function, and 'person1' and 'person2' are instances of the Person object created using the 'new' keyword.

// Creating a new RegExp object
let pattern = new RegExp('ab+c');
console.log(pattern); // Output: /ab+c/
// Here, 'RegExp' is a built-in constructor function, and 'pattern' is an instance of the RegExp object created using the 'new' keyword.