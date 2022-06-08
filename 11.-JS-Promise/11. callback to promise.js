'use strict';

//=================================================================================================================

// promise Heaven

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if (
                    (id === 'saruman' && password === 'white') ||
                    (id === 'gandalf' && password === 'gray')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });    
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if (user === 'saruman') {
                    resolve({ name : 'saruman', role: 'master'});
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter yout id');
const password = prompt('enter your password');
userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);