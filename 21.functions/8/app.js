// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только строки. Вторая для получения суммы всех строчных элементов массива. Если результат функции проверки –true, то вызывать новую функцию, возвращающую конкатенацию всех строчных элементов массива

const arr = ['hi', 'hschool'];

//1 способ
// function findString(arrTest) {
//     const result_every = arrTest.every(function(el) {
//         return typeof el == 'string' ? true : false;
//     })
//     return result_every
// }

// const result_findString = findString(arr);


// function doConcat(arrTest) {
//     if (result_findString == true) {
//         const result_reduce = arr.reduce(function(sum, el) {
//             return sum + ' ' + el;

//         })
//         return result_reduce
//     }
// }
// const allElem = doConcat(arr);
// console.log(allElem);

//2 способ
const check = (testArr) => {
    let res;
    for (let el of testArr) {
        if (typeof el === 'string') {
            res = true
        } else {
            res = false;
            break
        }
    }
    return res
}
const result_check = check(arr)

const doConcat = (arrToConcat) => {
    let concat = ''
    if (result_check === true) {
        for (let el of arrToConcat) {
            concat += el + " "
        }
    }
    return concat
}
const result = doConcat(arr);
console.log(result);