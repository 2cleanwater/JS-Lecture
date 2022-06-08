'use strict';

{
    let name = 'saruman';
    console.log(name);
    name = 'gandalf';
    console.log(name);
}
// {}block 밖에선 name에 접근할 수 없다.

console.log(globalName);

// block scope : block 밖에서 글로벌한 변수를 지정, 접근할 수 있다. (최소화 하는 것이 좋음)

//* hoisting : 어디에 선언하든 항상 제일 위로 선언을 끌어올려주는 것

// var 선언를 사용하면 안되는 이유 :
//      1. hoisting이 가능하여 선언을 하지 않아도 변수를 집어 넣을 수 있다.
//      2. block scope가 불가능하다.

//==================================================================================================

const daysInWeek = 7;

// const = 값이 변하지 않는 변수
// 사용해야 하는 이유 : 
//      1. 보안상의 이유
//      2. 쓰레드의 안정화, 동시에 한 값에 접근하는 것의 위험도를 줄여줌
//      3. 실수의 최소화

//==================================================================================================

// number : 숫자
// string : 문자 
//      1. template literals (string) : ~에 있는 `로 사용하면 문구가 합쳐져서 나온다.
const hellobob = `hi ${brendan}!`;
// null VS undefined 차이 
//      ㄴ> null은 비어있다. undefined는 선언되지 않았다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
// 같은 symbol을 사용해도 변수가 다르기 때문에 같지 않다.
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true
// 같은 값을 갖게 하려면 .for을 써서 적용해줘야한다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol2}`);
// symbol의 값을 출력하려면 .description을 꼭 붙여 줘야 합니다.

//==================================================================================================

let text = 'hello';
console.log(text.charAt(0)); // h
consol.log(`value : ${text}, tpye : ${typeof text}`); // value : hello, type : string
text = 1;
consol.log(`value : ${text}, tpye : ${typeof text}`); // value : 1, type : number
text = '7' + 5
consol.log(`value : ${text}, tpye : ${typeof text}`); // value : 75, type : string
text = '8' / '2'
consol.log(`value : ${text}, tpye : ${typeof text}`); // value : 4, type : number

// 이러한 Dynamic typeing 때문에 type script가 나오게 됐음.

//==================================================================================================

const saruman = { name: 'saruman', age: 2000};
saruman.age = 2001;

// object : 변수가 가르키고 있는 포인터는 잠겨있지만 그것의 elements들은 잠겨있지 않아 변경이 가능하다. 

