'use strict';

// Q1. make a string out of an array
  {
    const fruits = ['apple', 'banana', 'orange'];

    // 내 풀이
    fruits.forEach((fruit) => console.log(fruit));
    // forEach에 대문자 꼭 사용하기!!!

    // 정답
    const result = fruits.join();
    console.log(result);


  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';

    // 내 풀이
    console.clear();
    const fruitsQ2 = [];
    fruitsQ2.push(fruits);
    console.log(fruitsQ2);
    
    // 정답
    const result = fruits.split(',');
    // 구분자를 전달하지 않으면 하나로 들어간다.
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];

    // 내 풀이
    console.clear();
    const arrayQ3 = [];
    for (let i = array.length+1; i!=0; i--){
      arrayQ3.push(array.pop());
    }
    console.log(arrayQ3);

    // 정답
    const result = array.reverse();
    // * 유의! reverse를 사용하면 기존의 array도 순서가 역순으로 변경된다.

  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];

    // 내 풀이
    console.clear();
    array.splice(0,2);
    
    const arrayQ4 = array;
    console.log(arrayQ4);

    // 정답
    const result = array.slice(2,5);
    // slice 는 원하는 부분만 return
    // end 부분은 배제되므로 +1 인 값을 사용

  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {

    // 내 풀이
    console.clear();

    // 정답
    const result = students.find(function(student, index){
      console.log(student, index);
      // 배열에 있는 모든 아이템이 호출된다.
      return student.score === 90;
    })
    // const result = students.find((student) => students.score === 90); 같이 생략 가능
  }
  
  // Q6. make an array of enrolled students
  {
    // 정답
    const result = students.filter((student) => student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    // 정답
    // 콜백 함수를 이용하여 하나씩 매칭하는 것이다.
    const result = students.map((student) => student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    // 정답
    console.clear();
    const result = students.some((student) => student.score < 50);
    // some = 일부 개체가 만족하는가
    console.log(result);

    const result2 = students.every((student) => student.score < 50);
    // every = 모든 개체가 만족해야한다.
    console.log(result2);
  }
  
  // Q9. compute students' average score
  {
    // 정답
    const result = students.reduce((prev, curr) => {
      console.log('-------') // 경계선
      console.log(prev);
      console.log(curr);
      return prev + curr.score;
      // reduce는 curr의 값을 prev에 저장해주는 역할을 한다. 
    }, 0);
    // prev 값을 0부터 시작한다.\=

    // const result = students.reduce((prev, curr) => prev + curr.score, 0);

  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    // 정답
    const result = students
      .map((student) => student.score)
      .filter((score) => score >= 50)
      .join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = student
      .map(student => student.score)
      .sort((a, b) => b - a)
      .join();
      console.log(result);
  }

