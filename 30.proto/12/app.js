// Напишите алгоритм для нахождения факториала числа

// const num = +prompt('Введите число')
// const arr = []
// for (let i = 1; i <= num; i++) {
//     arr.push(i)
// }
// const factorial = arr.reduce((mult, el) => {
//     return mult *= el
// }, 1)

// console.log(factorial);


function factorial(num) {
    if (num === 0)
        return 1
    return num * factorial(num - 1)
}

console.log(factorial(6));