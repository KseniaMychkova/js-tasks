// На входе число. Необходимо создать функцию, возвращающую факториал числа 4! = 1 * 2 * 3 * 4

const arr = [1, 2, 3, 4];

function doFaс(arrFac) {
    const result_reduce = arrFac.reduce(function(mult, el) {
        return mult *= el;
    }, 1)
    return result_reduce
}

const result = doFaс(arr);
console.log(result);