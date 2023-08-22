//Creating a nested object representing  a person and 
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001"
    },
    occupation: "Engineer"
};
//Access properties of the main object
console.log(person.firstName); //Output: John
console.log(person.lastName); //Output: Doe
console.log(person.age);     // Output: 30  
console.log(person.occupation); //Output: Engineer

//Access properties of the nested object
console.log(person.address.street); //Output: 123 Main Street
console.log(person.address.city);  //Output: New York
console.log(person.address.state);  //Output: NY
console.log(person.address.zipCode); //Output: 10001