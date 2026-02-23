// "this" Keyword in JavaScript
// The "this" keyword in JavaScript refers to the object that is executing the current function.
// Its value can change depending on the context in which it is used.

// Example 1: "this" in a method
let person = {
    name: 'Alice',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
person.greet(); // Output: Hello, Alice
// Here, "this" refers to the "person" object.

// Example 2: "this" in a regular function
function showThis() {
    console.log(this);
}
showThis(); // Output: [object Window] (in browsers) or [object global] (in Node.js)
// Here, "this" refers to the global object (Window in browsers, global in Node.js).

// Example 3: "this" in an event handler
document.getElementById('myButton').addEventListener('click', function() {
    console.log(this); // Output: <button id="myButton">Click me</button>
}   );
// Here, "this" refers to the button element that was clicked.

// Example 4: "this" in a constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}
let myCar = new Car('Toyota', 'Corolla');
console.log(myCar.make); // Output: Toyota
// Here, "this" refers to the newly created object instance.

// Example 5: "this" with arrow functions
let obj = {
    value: 42,
    getValue: () => {
        console.log(this.value);
    }
};
obj.getValue(); // Output: undefined
// Here, "this" does not refer to the "obj" object because arrow functions do not have their own "this" context.

// To summarize, the value of "this" depends on how a function is called, and it can refer to different objects in different contexts.