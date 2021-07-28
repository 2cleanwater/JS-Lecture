 // class 는 붕어빵 틀과 같다. = template
 // object 는 앙꼬

 'use strict'

 // 1. Class declarations

 class Person {
     // constructor
     constructor(ThatName, ThatAge) {
         //fields
         this.name = ThatName;
         this.age = ThatAge;
     }

     // methods
     speak() {
         console.log(`${this.name}: hello!`);
     }
 }

 const wizard = new Person('saruman',50);
// 새로운 object를 만들 땐 new를 쓴다.
console.log(wizard.name); // saruman
console.log(wizard.age); // 50
wizard.speak(); // saruman : hello!

//===========================================================================================

// 2. Getter and Setters

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        //if (value < 0) {
        //    throw Error('Age can\'t be negative');
        //}
        //this._age = value;
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('saruman','the white',-1);
console.log(user1.age);

//===========================================================================================

// 3. Field (public, private)
// 나온지 얼마 안돼서 거의 안쓰임!

class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//===========================================================================================

// 4. Static properties and methods
// object와 상관없이 class에 연결되어 사용하고싶을 때
class Article {
    static publisher = 'saruman';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //undefined
// object로 불러오면 불러와지지 않는다.
console.log(Article.publisher);
// class로 불러와야 불러와진다.

//===========================================================================================

// 5. Inheritance
// a way for one class to extend another class.
class shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'blue');
rectangel.draw();
// extends를 이용하여 항목을 상속받을 수 있다.

class Triangle extends Shape {
    draw() {
        super.drwa();
        // 부모생성자를 호출하는 super
        console.log('❤');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const triangle = new Triangle(20,20,'red');
// 상속 받은 후 함수를 수정하여 적용할 수 있다.

//===========================================================================================

// 6. Class checking : instanceOf
// 인자가 class에서 상속받은 것인지 확인하는 true/false 값 출력

console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true (모든 object는 Object에서 상속받은 것이다. )

