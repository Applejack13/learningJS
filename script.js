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


