// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая для получения суммы всех элементов массива. Если результат функции проверки – true, то вызывать новую функцию, возвращающую сумму всех элементов массива


const arr = [1, 2, 5]

function doNum(arrTest) {
    const result_doNum = arrTest.every(function(el) {
        return !isNaN(el) ? true : false;
    })
    return result_doNum
}
const generalResult = doNum(arr);

function doSum(arrSum) {
    if (generalResult == true) {
        const result_doSum = arrSum.reduce(function(sum, el) {
            return sum + el
        }, 0)
        return result_doSum
    }
}
const generalResultSum = doSum(arr);

console.log(generalResultSum);