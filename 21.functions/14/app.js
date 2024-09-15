// 14. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая для поиска максимального значения в массиве. Если результат функции проверки – true, то вызывать новую функцию, возвращающую максимальное значение массива

const arr = [1, 2, 3, 10, 4];

const doNum = (arrTest) => {

    const result_every = arrTest.every((el) => !isNaN(el));
    return result_every
}
const arrCheck = doNum(arr);

const doMax = (arrTest) => {
    return arrCheck == true ? Math.max(...arrTest) : 'Error';
}

const resultMax = doMax(arr);

console.log(resultMax);