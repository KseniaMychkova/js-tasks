// 8. На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве только строки. Вторая для получения суммы всех строчных элементов массива. Если результат функции проверки –true, то вызывать новую функцию, возвращающую конкатенацию всех строчных элементов массива

const arr = ['hi', 'hschool'];

function findString(arrTest) {
    const result_every = arrTest.every(function(el) {
        return typeof el == 'string' ? true : false;
    })
    return result_every
}

const result_findString = findString(arr);


function doConcat(arrTest) {
    if (result_findString == true) {
        const result_reduce = arr.reduce(function(sum, el) {
            return sum + ' ' + el;

        })
        return result_reduce
    }
}
const allElem = doConcat(arr);
console.log(allElem);