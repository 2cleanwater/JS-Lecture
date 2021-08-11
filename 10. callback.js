'use strict';

// javascript is synchronous.
// Excute the code block by order after hoisitng.
// hoisting : var, function declaration이 가장 위로 올라가게 되는것.

console.log('1');
setTimeout(function () {
    console.log('2');
}, 1000);
console.log('3');

// 결과값 : 1 3 (1초뒤) 2
// Synchronous callback (예측 가능한 콜백함수)
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// 결과값 : 1 3 hello 2

// Asynchronous callback (예측 불가능한 콜백함수)

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// 결과값 : 1 3 hello 2 async callback

// Callback Hell example

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=> {
            if (
                (id === 'saruman' && password === 'white') ||
                (id === 'gandalf' && password === 'gray')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(()=> {
            if (user === 'saruman') {
                onSuccess({ name : 'saruman', role: 'master'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}


const userStorage = new UserStorage();
const id = prompt('enter yout id');
const password = prompt('enter your password');
// prompt = 메세지가 팝업되면서 입력을 받을 수 있다.
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                    );
            },
            error => {
                console.log(error);
            }
            );
        },
    error => {console.groupCollapsed(error)}
    );

// 가독성이 떨어지고 에러를 처리하기 힘들다!