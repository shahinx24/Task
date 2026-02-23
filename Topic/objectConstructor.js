// Object Constructor in JavaScript
// An object constructor is a special function used to create and initialize objects in JavaScript.
// It acts as a blueprint for creating multiple instances of similar objects.

// Here is an example of how to use an object constructor in JavaScript:
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
}
let car1 = new Car('Toyota', 'Camry', 2020, 'blue');
let car2 = new Car('Honda', 'Civic', 2019, 'red');
console.log(car1); // Output: Car { make: 'Toyota', model: 'Camry', year: 2020, color: 'blue' }
console.log(car2); // Output: Car { make: 'Honda', model: 'Civic', year: 2019, color: 'red' }

// Adding methods to the object constructor
Car.prototype.getDetails = function() {
    return `${this.year} ${this.make} ${this.model} in ${this.color}`;
};
console.log(car1.getDetails()); // Output: 2020 Toyota Camry in blue
console.log(car2.getDetails()); // Output: 2019 Honda Civic in red

// Creating another object constructor
function Person(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
}
let person1 = new Person('John', 30, 'Engineer');
let person2 = new Person('Alice', 25, 'Designer');
console.log(person1); // Output: Person { name: 'John', age: 30, occupation: 'Engineer' }
console.log(person2); // Output: Person { name: 'Alice', age: 25, occupation: 'Designer' }

// Adding methods to the Person object constructor
Person.prototype.introduce = function() {
    return `Hi, I'm ${this.name}, a ${this.age}-year-old ${this.occupation}.`;
};
console.log(person1.introduce()); // Output: Hi, I'm John, a 30-year-old Engineer.
console.log(person2.introduce()); // Output: Hi, I'm Alice, a 25-year-old Designer.