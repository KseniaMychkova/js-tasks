// Дан статичный массив чисел.
// Напишите программу, которая с помощью цикла
// for и оператора
// continue подсчитывает сумму всех положительных чисел в массиве, пропуская отрицательные числа.
// Входные: [1, -2, 3, -4, 5, -6] Результат: Сумма положительныхчисел: 9
// Входные: [-1, -2, -3, -4, -5] Результат: Сумма положительныхчисел: 0

const arr = [-1, -2, -3, -4, -5];
let result = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        continue;
    } else {
        result += arr[i];
    }
}
console.log(result);