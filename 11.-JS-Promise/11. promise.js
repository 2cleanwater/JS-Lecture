'use strict';

// Promise is a javascript object for asynchronous operation.

// state : pending -> fulfilled or rejected
//  producer vs consumer

// 1. Producer

// 새로운 promise가 만들어 질 때 executor 가 바로 작동한다. ****

const promise = new Promise((resolve, reject) => {
    // doing some heavy work (networkm read files)
    console.log('doing something...');
    setTimeout(() => {
        //resolve('saruman');
        reject(new Error('no network'));
    }, 2000);
});

//======================================================================================================================

// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error); 
    })
    .finally(() => {
        console.log('finally');
    })
// then은 함수가 제대로 작동했을 때 resolve 라는 콜백함수를 통해서 전달된 값을 전달한다.
// catch는 reject 실패한 error를 받아온다.
// finally는 성공 실패 여부와 관계 없이 최종으로 출력되는 것이다.

//======================================================================================================================

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

//======================================================================================================================

// 4. Error Handling

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('CCChicken'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => EGGG`), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => YaMMy`), 1000);
    });

getHen()
.then(hen => getEgg(hen))
.catch(error => {
    return 'Breeeead';
})
.then(cook) // 한가지 변수만 받아오는 경우 이처럼 생략이 가능하다.
.then(meal => console.log(meal))
.catch(console.log);
// 결과값 : 3초뒤 CCChicken => EGGG => YaMMy
