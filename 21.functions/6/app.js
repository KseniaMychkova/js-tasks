// 6. На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива. Вторая для нахождения количества элементов массива

let n = +prompt('Введите количество элементов массива');
const arr = [];

function doArr(arrLength) {
    for (let i = 0; i < n; i++) {
        arr.push(prompt('Введите элеенты массива'));
    }
}
doArr(arr)

function doCount(arrLength) {
    return arrLength.length;
}
const result = doCount(arr)
console.log(result);