// 14. Пользователь вводит два массива чисел. Используя оператор spread, объедините эти два массива в один. 
// Входные: [1, 2, 3] и [4, 5, 6] → Результат: [1, 2, 3, 4, 5, 6] 
// Входные: [7, 8] и [9, 10, 11] → Результат: [7, 8, 9, 10, 11]
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const arrResult = [...arr, ...arr2]
console.log(
    arrResult
);