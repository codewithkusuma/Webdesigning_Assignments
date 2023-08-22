//Creating an object using object literal notation
const person = {
    firstName: "John",
    lastName: "Doe",
    age : 30,
    occupation: "Engineer",

    // Method inside the object
    sayHello: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`);
    },
};

// Accessing object properties
console.log(person.firstName); // Output: John
console.log(person.lastName); //Output: Doe
console.log(person.age);     //Output: 30
console.log(person.occupation); //Output: Engineer

//calling the method of the object
person.sayHello(); //Output: Hello my name is John Doe. I am 30