// 15. На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что в массиве только числа. Третья для получения произведения всех элементов массива. Если результат функции проверки – true, то вызывать новую функцию, возвращающую произведение всех элементов массива

let n = prompt('Введите количество элементов массива');
const arr = [];

const doArr = (pushArr) => {
    for (let i = 0; i < n; i++) {
        pushArr.push(prompt('Введите элементы массива'))
    }
}
doArr(arr)

const arrCheck = (arrTest) => {
    const result_every = arrTest.every((el) => !isNaN(el) ? true : false);
    return result_every
}
const result = arrCheck(arr);

const dotMult = (resultMult) => {
    if (result === true) {
        const result_reduce = resultMult.reduce((mult, el) => mult *= el, 1)
        return result_reduce
    }


}
const globalResult = dotMult(arr);

console.log(globalResult);