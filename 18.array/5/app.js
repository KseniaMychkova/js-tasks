// Выведите все четные числаот 0 до 100.
//  Методы: Используйтециклfor.
//  Входные:- →Результат: [0, 2, 4, ..., 100]
//  

// for (let i = 0; i < 101; i++) {
//     if (i % 2 === 0) {
//         console.log(i);

//     }
// }
// Найдитe сумму чисел от 1 до 100.
//  Методы: Используйте цикл while.
//  Входные:- →Результат: 5050

let i = 1;
let result = 0;
while (i < 101) {
    result += i
    i++
}
console.log(result);