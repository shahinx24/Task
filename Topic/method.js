// Method is a function associated with an object or class that performs a specific task or operation related to that object or class.
//  Methods are used to define behaviors and functionalities for objects in programming languages like JavaScript.


// Here is an example of how to use methods in JavaScript:
// Defining an object with methods
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    // Method to get full name
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    // Method to check if the person is an adult
    isAdult: function() {
        return this.age >= 18;
    }
};
// Using the methods
console.log(person.getFullName()); // Output: John Doe
console.log(person.isAdult()); // Output: true
// here 'getFullName' and 'isAdult' are methods of the 'person' object

// Defining a class with methods
class Rectangle {
    constructor(width, height) {    
        this.width = width;
        this.height = height;
    }
    // Method to calculate area
    getArea() {
        return this.width * this.height;
    }
    // Method to calculate perimeter
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
// Creating an instance of the Rectangle class
let rect = new Rectangle(5, 10);
// Using the methods
console.log(rect.getArea()); // Output: 50
console.log(rect.getPerimeter()); // Output: 30
// here 'getFullName' and 'isAdult' are methods of the 'person' object
// and 'getArea' and 'getPerimeter' are methods of the 'Rectangle' class

// Adding methods to an existing object using prototype
function Circle(radius) {
    this.radius = radius;
}
Circle.prototype.getCircumference = function() {
    return 2 * Math.PI * this.radius;
};
let circle = new Circle(7);
console.log(circle.getCircumference()); // Output: 43.982297150257104
// here 'getCircumference' is a method added to the Circle object using prototype
