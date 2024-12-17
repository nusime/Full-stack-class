/**Create an object perosn with properties: name, age and address(which is another object with street and city)
   Log the name and the street properties to the console
 */

let person = {
    name: 'Ana',
    age: 27,
    address: {
        city: 'Harar',
        street: 'Shewa ber'
    }
};
console.log(person.name);
console.log(person.address.street);