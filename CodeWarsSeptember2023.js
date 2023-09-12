//Next bigger number with the same digits(GPT)
// function nextBigger(number) {
//   // Преобразование числа в строку
//   let numStr = number.toString()
//   let numArr = numStr.split("")

//   // Находим индекс первой цифры, которая нарушает убывающий порядок
//   let i = numArr.length - 2
//   while (i >= 0 && numArr[i] >= numArr[i + 1]) {
//     i--
//   }

//   // Если такую цифру нашли, ищем следующую большую цифру справа от нее
//   if (i >= 0) {
//     let j = numArr.length - 1
//     while (numArr[j] <= numArr[i]) {
//       j--
//     }

//     // Меняем местами цифры на позициях i и j
//     ;[numArr[i], numArr[j]] = [numArr[j], numArr[i]]
//   } else {
//     // Если не нашли цифру для обмена, значит, это самое большое число
//     // в данной перестановке цифр, возвращаем -1
//     return -1
//   }

//   // Сортируем цифры справа от позиции i в порядке возрастания
//   let left = i + 1
//   let right = numArr.length - 1
//   while (left < right) {
//     ;[numArr[left], numArr[right]] = [numArr[right], numArr[left]]
//     left++
//     right--
//   }

//   // Собираем строку обратно и преобразуем в число
//   let nextNumber = parseInt(numArr.join(""))

//   return nextNumber
// }

// // Пример использования
// let currentNumber = 54321
// let nextPermutation = getNextPermutation(currentNumber)
// console.log(nextPermutation) // Выводит следующее большее число в перестановке цифр или -1

// console.log(nextBigger(2017))

//I love big nums and I cannot lie
// function biggest(nums) {
//   if (nums.every((i) => i === 0)) return "0"

//   let res = nums.sort((a, b) => {
//     let strA = a.toString()
//     let strB = b.toString()

//     return (strB + strA).localeCompare(strA + strB)
//   })

//   return res.join("")
// }

// console.log(biggest([0, 0, 0])) // 0

//
