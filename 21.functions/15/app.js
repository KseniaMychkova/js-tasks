// 15. На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что в массиве только числа. Третья для получения произведения всех элементов массива. Если результат функции проверки – true, то вызывать новую функцию, возвращающую произведение всех элементов массива

let n = prompt('Введите количество элементов');
let arr = [];

const doArr = (someArr) => {
    for (let i = 0; i < n; i++) {
        someArr.push(prompt('Введите элементы массива'))
    }
    return someArr
}

const checkArr = (arrToCheck) => {
    const result_every = arrToCheck.every((el) => !isNaN(el) ? true : false);
    return result_every
}
const doMultArr = (arrToMult) => {
    const result_check = checkArr(result_arr);
    if (result_check == false) return 'Error';
    const result_reduce = arrToMult.reduce((res, el) => res *= el)
    return result_reduce
}
const result_arr = doArr(arr)
const result_mult = doMultArr(result_arr);
console.log(result_mult);