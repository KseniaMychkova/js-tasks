// 16. На входе n – количество элементов массива. Далее производится заполнение массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива. Вторая для проверки, что в массиве только числа. Третья для формирования массива из всех четных чисел, возведенных в квадрат. Если результат функции проверки – true, то вызывать новую функцию, возвращающую массив из всех четных чисел, возведенных в квадрат

const doArr = () => {
    const n = 4;
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(prompt('Введите элементы массива'))
    }
    return arr
}

const checkArr = (arrTest) => {
    const result_everyTest = arrTest.every((el) => !isNaN(el));
    return result_everyTest;
}

const doSqua = () => {
    const array = doArr();
    const bool = checkArr(array);
    const newArr = [];

    if (bool === true) {
        array.forEach((el) => el % 2 === 0 ? newArr.push(el ** 2) : null);
    }
    return newArr
}

const globalResult = doSqua();
console.log(globalResult);