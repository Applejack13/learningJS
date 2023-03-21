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


