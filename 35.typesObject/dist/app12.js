// Создайте массив чисел и найдите сумму элементов, находящихся на нечетных позициях (индексах) массива.
const arr_12 = [1, 1, 3, 1, 8, 1, 8];
let sum_12 = 0;
for (let i = 0; i < arr_12.length; i++) {
    if (i % 2 !== 0)
        sum_12 += arr_12[i];
}
console.log(sum_12);
