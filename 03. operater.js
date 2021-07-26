// 1. string concatenation
console.log('my' + 'cat'); // my cat
console.log('1' + 2); // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log('\t hello \n \'world\' ')

//==========================================================================================

// 2. Numeric operators
console.log(1 + 1); // add // 2
console.log(1 - 1); // substract // 0
console.log(1 / 1); // divide // 1
console.log(1 * 1); // multiple // 1

//==========================================================================================

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1; // 3
// preIncrement = counter; // 3
// 먼저 counter를 계산하고 값을 할당한다.
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
// 먼저 값을 할당하고 counter를 계산한다.
console.log(`postIncrement : ${preIncrement}, counter : ${counter}`);

//==========================================================================================

// 4. Assignment operators

let x = 3;
let y = 6;
x += y; // x = x+ y;
x -= y;
x *= y;
x /= y;

//==========================================================================================

// 5. Comparsion operators

console.log(10 < 6); // less than

//==========================================================================================

// 6. Logical operators :  || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// || (or)는 True가 나오는 즉시 중단된다. ex) value1 = true; 인 경우 value 2와 check()는 연산하지 않는다.
// 때문에 연산이 길어지는 check() 같은 함수를 뒷쪽에 놓아야 쓸모없는 연산을 줄일 수 있다.

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// && (and)는 False가 나오는 즉시 중단된다.

// ex) nullableObject && nullableObject.something 같은 방식으로 많이 쓰인다.
// 값이 null이라 flase가 뜨게 되면 연산을 중지한다.
function check() {
    for (let i = 0; i <10; i++) {
        //쓸모없는 연산
    }
    return true;
}

// !(not)
console.log(!value1);

//==========================================================================================


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// == 는 타입을 변경해서 검사한다. 
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive == numberFive); // false
console.log(stringFive != numberFive); // true

// object equality by refernce
// object는 레퍼런스 방식으로 저장된다. 각 데이터가 저장되어있는 주소를 넣어놓는 것
const saruman1 = { name : 'saruman' };
const saruman2 = { name : 'saruman' };
const saruman3 = saruman1;
console.log(saruman1 == saruman2); // false
console.log(saruman1 === saruman2); // false
console.log(saruman1 === saruman3); // true

//==========================================================================================

// equlity - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // ture
console.log('' === false); // false
console.log(null == undefined); // ture
console.log(null === undefined); // false

//==========================================================================================

// 8. Conditional operators: if
// if, else if, else
const name = 'saruman';
if (name === 'frodo') {
    console.log('give me the ring');
}
else if (name === 'gandalf') {
    console.log('are you white?');
}
else {
    console.log('your army is ready');
}

//==========================================================================================

// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === 'saruman' ? 'yes' : 'no');
// console.log(1' ? '2' : '3'); 1이 true면 2, false면 3
// 가독성이 떨어지기 때문에 간단할 때 사용하는게 좋다.

//==========================================================================================

// 10. Switch statement
// use for multiple if checks
// use for enum-like (열거형) value check
// use for multiple type checks in TS
// if else 가 반복될 경우 switch를 쓰는 게 가독성이 좋다.

const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'chrome':
    case 'firefox':
        console.log('welcome');
        break;
    default:
        console.log('same');
        break;
}

//==========================================================================================

// 11. Loops
// while loop, while the condition is executed first,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
} // 3 2 1

// do while loop, body code is executed first,
// then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// do while : 0

// for loop, for(begin; condition; step)
for (let i = 3; i > 0; i--) {
    // inline variable declaration 이라고 한다. (지역변수)
    console.log(`for: ${i}`);
}

//nested loops
for (let i = 0; i < 10; i++) {
    for ( let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// quiz
// 1. iterate from 0 to 10 and print only even numbers(use continue)

// 정답 :
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`${i}`);
}

// 내가 푼 답 :  
for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(`${i}`);
    }
    continue;
}
// 틀렸던 부분 : for문에서 ; 대신 ,를 사용한다.
// 내가 푼 방식에선 continue가 굳이 없어도 된다고 한다.

// 2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

// 내가 푼 답 : 
for (let i = 0; i < 11; i++) {
    console.log(`${i}`);
    if (i == 8) {
        break;
    }
}

// 정답 : 
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}
