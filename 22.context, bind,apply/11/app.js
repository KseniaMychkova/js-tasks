// 11. На входе динамичный массив; число n с клавиатуры. Необходимо написать функцию, возвращающую элементы массива, которые больше указанного числа. [1, 9, 45, 11, 10], 10 -> 45, 11

let n = prompt('Введите число')

const doNum = (arr) => {
    for (let el of arr) {
        el > n ? console.log(el) : null;
    }
}
doNum([1, 9, 45, 11, 10])