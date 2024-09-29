// 7. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только числа. Вторая для получения суммы всех элементов массива. Если результат функции проверки – true, то вызывать новую функцию, возвращающую сумму всех элементов массива

//1 способ
// const arr = [1, 2, 5]

// function doNum(arrTest) {
//     const result_doNum = arrTest.every(function(el) {
//         return !isNaN(el) ? true : false;
//     })
//     return result_doNum
// }
// const generalResult = doNum(arr);

// function doSum(arrSum) {
//     if (generalResult == true) {
//         const result_doSum = arrSum.reduce(function(sum, el) {
//             return sum + el
//         }, 0)
//         return result_doSum
//     }
// }
// const generalResultSum = doSum(arr);

// console.log(generalResultSum);

// 2 способ

const checkArr = (arrTest) => {
    let test
    for (let el of arrTest) {
        if (!isNaN(el)) {
            test = true
        } else {
            test = false
            break
        }
    }
    return test
}
const result_test = checkArr([1, 7, 25]);

const doSum = (arrToSum) => {
    let sum = 0
    if (result_test === true) {
        for (let el of arrToSum) {
            sum += el
        }
    }
    return sum
}
const result = doSum([1, 7, 25]);
console.log(result);