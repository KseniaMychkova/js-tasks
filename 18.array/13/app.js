// Сформируйте массив из 10 значений prompt. Создайте строку из элементов массива, разделённых
//  дефисами.
//  Метод: Используйте цикл for.
//  Входные: [1, 2, 3, 4, 5, 6, 7, 8, 9] → Результат: '-1-2-3-4-5-6-7-8-9-'
//  Входные: [2, 4, 6] → Результат: '-2-4-6-'
//  Входные: [0] → Результат: '-0-’

let n = prompt('Введите количество элеметов массива');
const arr = [];

// for (let i = 0; i < n; i++) {
//     arr.push(prompt('Введите элементы массива'))
// }
// console.log(arr.join('-'));

// let i = 0
// while (i < n) {
//     i++
//     arr.push(prompt('Введите элементы массива'))
// }
// console.log(arr.join('-'));

let i = 0
do {
    arr.push(prompt('Введите элементы массива'))
    i++
}
while (i < n)
console.log(arr.join('-'));