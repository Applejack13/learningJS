"use strict";

//
// function squareDigits(num) {
//   return +num
//     .toString()
//     .split("")
//     .map(Number)
//     .map((x) => x * x)
//     .join("")
// }

// console.log(typeof squareDigits(765))

//
// function tribonacci(signature, n) {
//   if (n == 0) {
//     return []
//   } else {
//     while (signature.length < n) {
//       signature.push(
//         signature[signature.length - 1] +
//           signature[signature.length - 2] +
//           signature[signature.length - 3]
//       )
//     }
//     return signature.slice(0, n)
//   }
// }

// console.log(tribonacci([1, 2, 3], 10))

//
// function countSmileys(arr) {
//   let count = 0
//   arr.map((x) => {
//     x.split("")
//     if (x.length == 2) {
//       if ((x[0] == ";" || x[0] == ":") && (x[1] == ")" || x[1] == "D")) {
//         count++
//       }
//     } else if (x.length == 3) {
//       if (
//         (x[0] == ";" || x[0] == ":") &&
//         (x[1] == "-" || x[1] == "~") &&
//         (x[2] == ")" || x[2] == "D")
//       ) {
//         count++
//       }
//     }
//   })
//   return count
// }

//the same solution:
// function countSmileys(arr) {
//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
//   }

// console.log(countSmileys([";D", ":-(", ":-)", ";~)"])) // should return 3;

//      Unsolved
// function toWeirdCase(string) {
//   let result = ""
//   string.split("").map((x, i) => {
//     if (i % 2 == 0) {
//       result += x.toUpperCase()
//     } else {
//       result += x.toLowerCase()
//     }
//   })

//   return result
// }

// console.log(toWeirdCase("Hello World"))
//how can I solve it (problem with space)

//
// function getDivisorsCnt(n) {
//     let count = 0;

//     for (let i = 1; i <= Math.sqrt(n); i++) {
//       if (n % i === 0) {
//         if (i * i === n) {
//           count++;
//         } else {
//           count += 2;
//         }
//       }
//     }

//     return count;
//   }

// console.log(getDivisorsCnt(12))

//
// function order(words) {
//   if (words === "") {
//     return words
//   }

//   const wordArr = words.split(" ")
//   const orderedWords = wordArr.sort((a, b) => {
//     const numA = parseInt(a.match(/\d/)[0])
//     const numB = parseInt(b.match(/\d/)[0])
//     return numA - numB
//   })

//   return orderedWords.join(" ")
// }

// console.log(order("is2 Thi1s T4est 3a"))

//
// function roundToNext5(n) {
//   if (n % 5 === 0) {
//     return n
//   } else if (n > 0) {
//     return n + (5 - (n % 5))
//   } else if (n < 0) {
//     return n - (n % 5)
//   }
//   return n
// }

// console.log(roundToNext5(-6)) // should return -5

//Pete, the baker
// function cakes(recipe, available) {
//   result = []

//   for (let key1 in recipe) {
//     if (recipe.hasOwnProperty(key1) == available.hasOwnProperty(key1)) {
//       let value = Math.floor(available[key1] / recipe[key1]).toFixed()
//       result.push(value)
//     } else {
//       result.push(0)
//     }
//   }

//   return Math.min(...result)
// }

// console.log(
//   cakes(
//     { flour: 1500, milk: 50, sugar: 200, eggs: 10, cinnamon: 1 },
//     {
//       flour: 150000,
//       milk: 6000,
//       sugar: 5000,
//       eggs: 200,
//       vanilla: 100,
//       cinnamon: 1000,
//     }
//   )
// )

//
// function sumOfMinimums(arr) {
//   let result = 0

//   for (let i = 0; i < arr.length; i++) {
//     result += Math.min(...arr[i])
//   }

//   return result
// }

// console.log(
//   sumOfMinimums([
//     [1, 2, 3, 4, 5],
//     [5, 6, 7, 8, 9],
//     [20, 21, 34, 56, 100],
//   ])
// )

//
// function sqInRect(lng, wdth) {
//   let result = []
//   if (lng !== wdth) {
//     while (lng !== wdth) {
//       if (lng > wdth) {
//         result.push(wdth)
//         lng -= wdth
//       } else {
//         result.push(lng)
//         wdth -= lng
//       }
//     }
//     result.push(lng)
//   } else return null

//   return result
// }

// console.log(sqInRect(5, 3))

//
// function perimeter(n) {
//   let result = 1,
//     first = 1,
//     second = 2

//   for (let i = 0; i < n; i++) {
//     if (i + 1 === n) {
//       result += first
//     } else {
//       result += first
//     }

//     let third = first + second
//     first = second
//     second = third
//   }

//   return result * 4
// }

// console.log(perimeter(30))

//
// function sumArray(array) {
//   if (array && array.length > 2) {
//     let min = Math.min(...array),
//       max = Math.max(...array);

//     return array.reduce((a, b) => a + b) - min - max;
//   } else {
//     return 0;
//   }
// }

// console.log(sumArray(null));
