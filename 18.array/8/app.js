// Создайте новый массив, заполненный только числами из исходного массива смешанных
//  элементов.
//  Методы: Используйтециклfor.
//  Входные: ["apple", 3, "orange", 2] → Результат: [3, 2]
//  Методы: Используйтециклwhile.
//  Входные: [2, 5, 9, 15, 0, 4] → Результат: [5, 9 15, 0]



// const arr = ["apple", 3, "orange", 2];
// let array = [];
// for (let i = 0; i < arr.length; i++) {
//     if (isNaN(arr[i])) {
//         continue;
//     }
//     array.push(arr[i]);
// }
// console.log(array);



const arr = [2, 5, 9, 15, 0, 4];
let array = [];


let i = 0
while (i < arr.length) {
    if (isNaN(arr[i])) {
        continue;
    }
    array.push(arr[i])
    i++
}
console.log(array);