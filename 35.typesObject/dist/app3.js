// На входе динамичный массивчисел. Используя reduce выведите сумму чисел массива
let arr_3 = [];
for (let i = 0; i < 5; i++) {
    arr_3.push(+prompt('Введите число'));
}
let result = arr_3.reduce((sum, el) => {
    return sum += el;
}, 0);
console.log(result);
