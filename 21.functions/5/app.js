// 5. На входе массив. Необходимо создать функцию проверки на то что в массиве только числа. Функция возвращает true, если в массиве только числа и false в противном случае

let arr = ['gfgf', 2, 3]

function doArr(a) {
    const result_every = a.every(function(el) {
        return !isNaN(el) ? true : false;
    })
    return result_every
}

doArr(arr)
console.log(doArr(arr));