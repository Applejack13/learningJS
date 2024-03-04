// //Ivan's 1st task
// const shoppingMallData = {
//   shops: [
//     {
//       width: 10,
//       length: 5,
//     },
//     {
//       width: 15,
//       length: 7,
//     },
//     {
//       width: 20,
//       length: 5,
//     },
//     {
//       width: 8,
//       length: 10,
//     },
//   ],
//   height: 5,
//   moneyPer1m3: 30,
//   budget: 50000,
// };

// function isBudgetEnough(data) {
//   const sumOfWidth = data.shops.reduce((acc, shop) => acc + shop.width, 0);
//   const sumOfLength = data.shops.reduce((acc, shop) => acc + shop.length, 0);
//   let result = sumOfWidth * sumOfLength * data.height;

//   if (data.budget - data.moneyPer1m3 * result >= 0) {
//     return "Бюджета достаточно";
//   } else {
//     return "Бюджета недостаточно";
//   }
// }

// 2nd
// const students = [
//   "Peter",
//   "Andrew",
//   "Ann",
//   "Mark",
//   "Josh",
//   "Sandra",
//   "Cris",
//   "Bernard",
//   "Takesi",
//   "Sam",
// ];

// function sortStudentsByGroups(arr) {
//   const sorted = arr.sort();
//   const a = [],
//     b = [],
//     c = [],
//     rest = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i < 3) {
//       a.push(arr[i]);
//     } else if (i < 6) {
//       b.push(arr[i]);
//     } else if (i < 9) {
//       c.push(arr[i]);
//     } else {
//       rest.push(arr[i]);
//     }
//   }
//   return [
//     a,
//     b,
//     c,
//     `Оставшиеся студенты: ${rest.length === 0 ? "-" : rest.join(", ")}`,
//   ];
// }

// 3rd
// function amountOfPages(summary) {
//   let result = "";
//   let n = 0;

//   for (let i = 1; i <= summary; i++) {
//     result += i;
//     if (result.length === summary) {
//       n = i;
//       break;
//     }
//   }

//   return n;
// }

// console.log(amountOfPages(185));

// 4th
// function isPangram(str) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const letters = new Set(str.toLowerCase().replace(/[^a-z]/g, ""));
//   return alphabet.split("").every((letter) => letters.has(letter));
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
// console.log(isPangram("Hello, world!")); // false

// 5th

// function deepCount(a) {
//   let count = 0;

//   for (let i = 0; i < a.length; i++) {
//     if (Array.isArray(a[i])) {
//       count++;
//       count += deepCount(a[i]);
//     } else {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(deepCount([1, 2, [3, 4, [5]]]));
