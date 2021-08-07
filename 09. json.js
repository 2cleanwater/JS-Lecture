'use strict';

// JSON
// JavaScript Object Noatation

// 1. Object to JSON
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"]

const wizard = {
    name: 'saruman',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} cna jump!`);
    },
};
json = JSON.stringify(wizard);
console.log(json);



// 2. JSON to Object
