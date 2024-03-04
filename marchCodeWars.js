"use strict";

//

// function solution(number) {
//   let sum = 0;

//   if (number <= 0) {
//     return 0;
//   } else {
//     for (let i = 1; i < number; i++) {
//       if (i % 3 === 0) {
//         sum += i;
//       } else if (i % 5 === 0) {
//         sum += i;
//       } else if (i % 3 === 0 && i % 5 === 0) {
//         sum += i;
//       }
//     }
//   }

//   return sum;
// }

// console.log(solution(10));

//
// var countBits = function (n) {
//   return n
//     .toString(2)
//     .split("")
//     .filter((x) => x === "1").length;
// };

// console.log(countBits(1234));

//ChatGPT
// function duplicateEncode(word) {
//   let res = "";
//   let wordLower = word.toLowerCase();
//   let charCounts = {};

//   for (let char of wordLower) {
//     charCounts[char] = (charCounts[char] || 0) + 1;
//   }

//   for (let char of wordLower) {
//     res += charCounts[char] > 1 ? ")" : "(";
//   }

//   return res;
// }

// console.log(duplicateEncode("Success"));

//
// function toCamelCase(str) {
//   let res = str.replace(/[-_](.)/g, (match, char) => char.toUpperCase());
//   return res;
// }

// console.log(toCamelCase("Tello-world"));

//
function findEvenIndex(arr) {
  let res = 0;
  //
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 3]));
