// "use sctict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


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



const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log("Nice!")
} else {
    console.log("We'll leave")
};


let johnReport, alexReport, samReport, mariaReport = 'done';


