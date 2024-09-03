// Найдите максимальное значение в статичном массиве, используя цикл for.
// Входные: [5, 12, 7, 9, 14] → Результат: 14

const arr = [5, 12, 7, 9, 14];
let a = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > a) {
        a = arr[i];
    }
}
console.log(a);