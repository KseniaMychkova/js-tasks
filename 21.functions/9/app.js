// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая для получения массива с удвоеннымизначенями каждого элемента. Если результат функции проверки –true, то вызывать новую функцию, возвращающую массив с удвоенными элементами

const arr = [1, 2, 3, 4, 5];

function doCheck(arrTest) {
    const result_every = arr.every(function(el) {
        return !isNaN(el) ? true : false;
    })
    return result_every
}
const resultCheck = doCheck(arr);

function doMult(arrTest) {
    if (resultCheck == true) {
        const resultMap = arrTest.map(function(el) {
            return el *= 2
        })
        return resultMap;
    }

}
const globalResult = doMult(arr);
console.log(globalResult);