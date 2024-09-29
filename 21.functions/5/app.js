// 5. На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Функция возвращает true, если в массиве только числа и false в противном случае

// 1 способ
// let arr = ['gfgf', 2, 3]

// function doArr(a) {
//     const result_every = a.every(function(el) {
//         return !isNaN(el) ? true : false;
//     })
//     return result_every
// }

// const result = doArr(arr)
// console.log(result);

//2 способ
const doArr = (testArr) => {
    let test
    for (let el of testArr) {
        if (!isNaN(el)) {
            test = true
        } else {
            test = false
            break
        }
    }
    return test
}
const result = doArr([1, 5, 26, 'hy'])
console.log(result);