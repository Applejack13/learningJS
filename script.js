// "use sctict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }

}

if (personalMovieDB.count < 10) {
    console.log('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы - киноман');
} else {
    console.log('Ошибка!');
}

console.log(personalMovieDB);


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


let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage('Hello World!');
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc (4, 3));
// console.log(calc (5, 6));

//function declaration 
function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// function expression 
const logger = function() {
    console.log('Hello');
};

logger();

// line function 
const calc = (a, b) => a + b;

