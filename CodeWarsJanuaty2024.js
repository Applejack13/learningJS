"use strict"

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
