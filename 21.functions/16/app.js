// 16. На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что в массиве только числа. Третья для формирования массива из всех четных чисел, возведенных в квадрат. Если результат функции проверки – true, то вызывать новую функцию, возвращающую массив из всех четных чисел, возведенных в квадрат

let n = prompt('Введите количество элементов');
const arr = [];

const doArr = (a) => {
    for (let i = 0; i < n; i++) {
        a.push(prompt('Введите элементы массива'));
    }
    return a
}
const resultArr = doArr(arr)

const check = (checkArr) => {
    const result_every = checkArr.every((el) => isNaN(el) ? false : true);
    return result_every
}
const result_check = check(resultArr);


const squa = (arrToMult) => {
    let arrNew = []
    arrToMult.forEach((el) => el % 2 === 0 ? arrNew.push(el ** 2) : null);
    return arrNew
}
const result_squa = squa(resultArr)

console.log(result_squa);