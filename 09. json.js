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

json = JSON.stringify(wizard, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(wizard, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'gandalf' : value;
});
console.log(json);

// 2. JSON to Object
// parsel(json)
console.clear();
json = JSON.stringify(wizard);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);

wizard.jump(); // 값이 나옴!
obj.jump(); // 값이 안나옴!!

// stringify 할 땐 함수는 전달되지 않는다.
// 때문에 다시 parse 된 값에서 함수를 불러올 수 없다!

console.log(wizard.birthDate.getDate());
console.log(obj.birthDate);

