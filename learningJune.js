"use strict"

//Dates

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }

// let end = new Date();

// alert(`Цикл отработал за ${end - start} миллисекунд`);

//functions-constructors

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     } 
// }

// User.prototype.exit = function () {
//     console.log(`User ${this.name} was leaving`);
// }

// const ivan = new User('Ivan, 26');
// const alex = new User('Alex, 23');

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);


// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// }
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     } 
// }

// function sayName() {
//     console.log(this);
//     console.log(this.name);

// }

// const user = {
//     name: 'John'
// };

// sayName.call(user);
// sayName.apply(user);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Обычня функция: this = window, но если use strict = undefined
// 2) Контекст у метода объектов - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручгая привязка this: call, apply, bind 


// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'yellow'; 
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         }
//         say();
//     }
// }

// obj.sayNumber(); 

// const double = a => a * 2;

// console.log(double(4));


//classes

// class Rectangle {
//     constructor (height, weigth) {
//         this.height = height;
//         this.weigth = weigth;
//     }

//     calcArea() {
//         return this.height * this.weigth;
//     }
// }

// class ColoredRectangleWithtext extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Text: ${this.text}, color: ${this.bgColor}`);
//     } 
// }

// const div = new ColoredRectangleWithtext(25, 10, "Hello, Vadym!", 'yellow');

// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());


//rest/spred-operator
// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// }

// log('basic', 'test', 'operator', 'usage');

// function calcOrDouble(number, basis = 2) {
//     console.log(number * basis);
// }

// calcOrDouble(2, );


//
    const persone = {
        name: 'Vadym',
        tel: '+380977437080',
        parents: {
            mom: 'Olga',
            dad: 'Oleg'
        }
    };

// deep copy
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);