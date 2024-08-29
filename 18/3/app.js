// Найдите произведение элементов массива[2,3,4, 5].
//  Методы: Используйтециклыfor, while, for...of.
//  Входные: [2, 3, 4, 5] → Результат: 120

const arr = [2, 3, 4, 5];
let result = 1;

// for (let i = 0; i < arr.length; i++) {
//     result *= arr[i]
// }
// console.log(result);


// let i = 0
// while (i < arr.length) {
//     result *= arr[i]
//     i++
// }
// console.log(result);

for (let el of arr) {
    result *= el
}
console.log(result);