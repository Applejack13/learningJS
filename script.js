"use sctict";

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }



// // if (num < 49) {
// //     console.log('Error!');
// // } else if (num > 100) {
// //     console.log('Too much');
// // } else {
// //     console.log('Ok!');
// // }

// // (num === 50) ? console.log('Ok!') : console.log('Error!');


// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Nope');
//     break;
//     case 100:
//         console.log('Nope');
//     break;
//     case 51:
//         console.log('Right!');
//     break;
//     default:
//         console.log('Not at this time');
//     break;
// }




// let hamburger = 5;
// let fries = 0;

// if (hamburger && fries) {
//     console.log("I'm full")
// };


// const hamburger = 3;
// const fries = 12;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'dfgkjdfhg');

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log("Nice!")
// } else {
//     console.log("We'll leave")
// };


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log("Nice!")
// } else {
//     console.log("We'll leave")
// };


// let num = 50;

// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // } 
// // while (num < 55);

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
        
//     }
// }

// let result = '';
// const length = 44;

// for (let i = 1; i < length; i++) {
    
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);  
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) continue first; 
//             console.log(`Third level: ${k}`);  
//         }
//     }
// }


// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
// }

// showFirstMessage('Hello World!');
// console.log(num);

// // function calc(a, b) {
// //     return (a + b);
// // }

// // console.log(calc (4, 3));
// // console.log(calc (5, 6));

// //function declaration 
// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// // function expression 
// const logger = function() {
//     console.log('Hello');
// };

// logger();

// // line function 
// const calc = (a, b) => a + b;


// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// promotion(convert(500, usdCurr));

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return;
//     }
//     console.log('Done');
// }

// test();

// function doNothing() {}
// console.log(doNothing() === undefined);


// first task
// const name = "Vadym";

// function sayHello() {
//     return 'Hello, ' + name + '!'
// };

// console.log(sayHello());

// // second task
//     function returnNeighboringNumbers(num) {
//         return [num - 1, num, num + 1];
//     }

//    console.log(returnNeighboringNumbers(62));

// // third task

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// console.log(getMathResult(11, 8));


// // Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }    
//     // Не трогаем
//     console.log(result);
//     return result;
// }


// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
    
    
//     // Не трогаем
//     console.log(data);
//     return data;
// }



// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i <= data.length ;i++) {
//         result[i - 1] = data[data.length - i];
//     }
    
//     // Не трогаем
//     console.log(result);
//     return result;
// }


// build a tree:
// let result = '';
// const length = 15;

// for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);


// // volume and area of ​​a cube

// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)){
//         return 'При вычислении произошла ошибка';
//     }

//     let volume = 0,
//         area = 0;
        
//         volume = length * length * length;
//         area = 6 * (length * length);
    
//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea(11);


// // tickets code
// function getCoupeNumber(num) {
//     if (!Number.isInteger(num) || typeof(num) !== 'number' || num < 0) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (num === 0 || num > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(num / 4);    
// }

// getCoupeNumber(4);


// function first() {
//     setTimeout(function() {
//     console.log(1);
// }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//         console.log(`i'm learning ${lang}`);
//         callback();
//     }

// learnJS('javaScritp', function() {
//     console.log("I finished this lesson")
// });


// const options = {
//     name : 'test',   
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('test');
//     }

// }

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options.name);

// let counter = 0;


// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//        for (let i in options[key]) {
//         console.log(`Свойство ${i} имеет значение ${options[key][i]} `);
//         counter++;
//     }
//     } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]} `);
//     counter++;
//     }
// }

// console.log(counter);


// const arr = [1, 2, 3, 4, 5];

// arr.sort(compareNum);
// console.log(arr); 

// function compareNum(a, b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);



// arr.pop();
// arr.push(10)

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('');
// const products = str.split();
// products.sort();
// console.log(products.join('; '));


//trying to do the task with arr.(not finished)
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };


// function showExperience(plan) {
//     const {age} = plan;
//     const {languages} = plan.skills;
//     let str = `Мне ${age} и я владею языками: `;

//     languages.forEach(function(lang) {
//         str += `${lang.toUpperCase()}`
//     });

//     return str;
// }

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp; 
// }

// showExperience();


// function getTimeFromMinutes(time) {
//     if (!Number.isInteger(time) || typeof(time) !== 'number' || time < 0) {
//         return 'Ошибка, проверьте данные';

//     }

//     const hours = Math.floor(time / 60);
//     const minutes = time % 60;  

//     let hoursStr = '';

//     switch (hours) {
//         case 0 :
//             hoursStr = 'часов';
//             break;
//         case 1 :
//             hoursStr = 'час';
//             break;
//         case 2 :
//         case 3 :
//         case 4 :
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }


// getTimeFromMinutes(1400);


// function findMaxNumber(a, b, c, d) {
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//             return 0;
//         } else {
//            return Math.max(a, b, c, d);
//         }
// }

// findMaxNumber();

// const soldier = {
//     healht: 400,
//     armor: 100
// };

// const john = Object.create(soldier); 

// const john = {
//     healht: 100
// };

//old format
// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);


//fibonacci-numbers

// function fib(num) {
//     if (num <= 0 || !Number.isInteger(num) || typeof(num) !== 'number') {
//         return '';
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// fib(13);


// let number = 5; debugger

// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6;

// logNumber(); debugger


// function createCounter() {
//     let counter = 0;

//     const myFunction = function() { debugger
//         counter += 1; debugger
//         return counter; debugger
//     }

//     return myFunction;
// }
// debugger 
// const increment = createCounter(); debugger
// const c1 = increment(); debugger
// const c2 = increment(); debugger
// const c3 = increment(); debugger

// console.log(c1, c2, c3);


// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow)); // Выведет "Открыто"


// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));


// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors[0] = [{name: '', age: ''}];
//     return copy;
// }

// transferWaitors(restorantData);

// function repeatString(str, n) {
//     n = parseInt(n); // преобразуем строку в число
//     let result = '';
//     for (let i = 0; i < n; i++) {
//       result += str;
//     }
//     return result;
//   }
  
//   repeatString('HA', '55');
  

// function calculate(x, y, operator) {
//     x = parseInt(x);
//     y = parseInt(y);

//     if (operator == '*') {
//       return  x * y;
//     } else if (operator == '/') {
//         return x / y;
//     } else if (operator == '-') {
//         return x - y; 
//     } else if (operator == '+') {
//         return x + y;
//     }

//     return `${x} ${operator} ${y}`
// }

// console.log(calculate(44, 5, '+'));


// const arr = [464654, 6548484164, 4644, 684984684654, 44989765]

// function maxNum(arr) {
//     if (!arr || arr.length === 0) {
//         return 'Array is empty';
//     }
//     return Math.max.apply(null, arr);
// }

// console.log(maxNum(arr));


// function isPalindrome(str) {
//     let check = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         check += str[i];
//     }

//     if(str == check) {
//     return true;
//     }
//     return false;
// }

// console.log(isPalindrome('racecar'));


// factorial 
// function factorial(n) {
//     let result = 1;
//     while (n) {
//         result *= n--;
//     }
    
//     return result;
// }

// console.log(factorial(3));



// function isPrime(n) {
//     if (n <= 1) {
//         return false;
//     }

//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isPrime(10));


const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');


// btn.onclick = function() {
//     alert("It's working");
// };

// btn.addEventListener('mouseenter', () => {
//     alert("It's working");
// });

// let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // e.target.remove();
    // alert("It's working");
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click' , (event) => {
    event.preventDefault();

    console.log(event.target);
});


// console.log(document.body); 
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('.first-button').parentElement);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }

//     console.log(node);
// }


// const arr = [2, 3, 4, 5, 6, 8, 10, 14];

// function squareOfNumbers(arr) {
//   const result = [];
//   arr.forEach(element => result.push(element ** 2));
//   return result;
// }

// console.log(squareOfNumbers(arr));
// Output: [4, 9, 16, 25, 36, 64, 100, 196]


// const arr3 = ['milk', 'juice', 'apples', 'cereal', 'tomatoe', 'bread'];

// function arrToUpperCase() {
//     const result = [];
//     arr3.forEach(element => result.push(element.toUpperCase()));
    
//     return result;

// }

// console.log(arrToUpperCase());


// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }


// console.log(pow(2, 2));
// pow(2, 3);
// pow(2, 4);  

// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Peter',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Anna',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10  
//         }]
//     }
// };

// function getTotalProgressByItaration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;    
//             }
//         }
//     }
// }

//     return total / students;
// }


// console.log(getTotalProgressByItaration(students));


// function getTotalProgressByrecursion (data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArray = getTotalProgressByrecursion(subData);
//             total[0] += subDataArray[0];
//             total[1] += subDataArray[1];
//         }

//         return total;
//     }
// }

// const result = getTotalProgressByrecursion(students);

// console.log(result[0]/result[1]);


//factorial with using recursion
// function factorialWithRecursion(num) {
//     if (num < 0) {
//       return undefined;
//     } else if (num === 0 || num === 1) {
//       return 1;
//     } else if (!Number.isInteger(num) || typeof(num) !== 'number') {
//       return undefined;
//     } else {
//       return num * factorialWithRecursion(num - 1);
//     }
//   };
  
// console.log(factorialWithRecursion(5));


//factorial
// function factorial(n) {
//     let result = 1;
//     while (n) {
//         result *= n--;
//     }
    
//     return result;
// }

// console.log(factorial(6));


// Click on touchscreens
window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) =>{
        e.preventDefault();

        console.log('Start');
    });
    
    box.addEventListener('touchmove', (e) =>{
        e.preventDefault();

        console.log('Move');
    });
    
    box.addEventListener('touchend', (e) =>{
        e.preventDefault();

        console.log('End');
    });
});


// const shops = [
//     {rice: 500},
//     {oil: 200},
//     {bread: 50}
// ];

// const budget = [5000, 15000, 25000];

// const map = new Map([
//     [{paper: 400}, 8000]
// ]);

// shops.forEach((shop, i) => {
//     map.set(shop, budget[i])
// });


// console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;
// map.keys

// const newestArr = [1, 4, 5, 7, 88, 46, 48, 997, 4, 87, 88];

// const set = new Set(newestArr);

// function unique(newestArr) {
//     return Array.from(new Set(newestArr))
// };

// console.log(unique(newestArr));

// set.add(45)
//    .add(997);

// console.log(set);

// const bigint = 654651321354684321321679879874654654n;
// const samebigint = BigInt(654651321354684321321679879874654654);

// console.log(bigint);
// console.log(samebigint);

const newButtons = document.querySelectorAll('button'),
      newWrapper = document.querySelector('.wrapper');

// console.log(newButtons[4].classList.length);
// console.log(newButtons[1].classList.item(0));
// console.log(newButtons[1].classList.add('red'));
// console.log(newButtons[1].classList.remove('first-button'));
// console.log(newButtons[1].classList.toggle('first-button'));

// if (newButtons[1].classList.contains('red')) {
//     console.log('red');
// }

newButtons[0].addEventListener('click', () => {
    // if (!newButtons[1].classList.contains('red')) {
    //     newButtons[1].classList.add('red');
    // } else {
    //     newButtons[1].classList.remove('red');
    // }
    newButtons[1].classList.toggle('red');
});

newWrapper.addEventListener('click', (e) =>{
    if (e.target && e.target.matches('button.red')) {
        console.log('Hello');
    }
});

// newButtons.forEach(createNewBtns => {
//     createNewBtns.addEventListener('click', () => {
//         console.log('Hello!!!')
//     });
// });

const createNewBtns = document.createElement('button');
createNewBtns.classList.add('red');
newWrapper.append(createNewBtns);

