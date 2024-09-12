// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая для получения только четных элементов массива. Если результат функции проверки – true, то вызывать новую функцию, возвращающую массив с четными элементами массива


const arr = [1, 2, 3, 4, 5];

function doCheck(arrTest) {
    const result_every = arr.every(function(el) {
        return !isNaN(el) ? true : false;
    })
    return result_every
}
const resultCheck = doCheck(arr);

function doEven(arrTest) {
    if (resultCheck == true) {
        const resulFilter = arrTest.filter(function(el) {
            return el % 2 === 0 ? true : false;
        })
        return resulFilter;
    }

}
const globalResult = doEven(arr);
console.log(globalResult);