// 14. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая для поиска максимального значения в массиве. Если результат функции проверки – true, то вызывать новую функцию, возвращающую максимальное значение массива

const arr = [1, 3, 56, 10, 'k'];

const check = (testArr) => {
    let res
    for (let el of testArr) {
        if (!isNaN(el)) {
            res = true
        } else {
            res = false;
            break
        }
    }
    return res
}
const result_check = check(arr)

const max = (maxNum) => {
    let resultMax = 0
    if (result_check === false) return 'Error'
    for (let el of maxNum) {
        resultMax < el ? resultMax = el : null;
    }

    return resultMax
}
const result = max(arr);
console.log(result);