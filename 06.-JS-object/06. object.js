// Objects

// 1. Literals and properties

const obj1 = {}; // object literal
const obj2 = new Object(); // object constructor

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const wizard = {name : 'saruman', age : 50};
print(wizard);

wizard.hasJob = true;
console.log(wizard.hasJob); // true

delete wizard.hasJob;
console.log(wizard.hasJob); // undefined

// object 항목을 추가 제거 할 수 있을만큼 flexible 

//===========================================================================================

// 2. Computed properties
// key 는 언제나 string type이어야한다. ex) 'name' 
// 실시간으로 원하는 값을 받아오고싶을 때 사용

console.log(wizard.name);
console.log(wizard['name']);
wizard['hasJob'] = ture;
console.log(wizard.hasJob);


function printValue(obj, key) {
    console.log(obj.key); // undefined
    console.log(obj['key']); // saruman
    // 동적으로 key를 받아오고 싶을 때 사용되는 것의 예시
}

printValue(wizard, 'name');

// 3. Property value shorthand

const person1 = { name: 'saruman', age: 50};
const person2 = { name: 'gnadalf', age: 40};
const person3 = { name: 'radagast', age: 30};
const person4 = makePerson('frodo', 500);
const person5 = Person('gimli', 20);
console.log(person4);

function makePerson(name, age) {
    return {
        name = name,
        age,
        // key = value 이름이 같다면 생략이 가능하다!!!
    };
}

// 4. Constructor function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}
// class의 constructor 처럼 사용이 가능하다.

// 5. in operator : property existence check (key in obj)
console.log('name' in wizard); // true
console.log('random' in wizard); // false

