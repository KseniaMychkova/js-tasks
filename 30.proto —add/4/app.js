// 4. У тебя есть массив чисел numbers, и тебе нужно найти сумму всех чисел в массиве.


const arr = [2, 8, 9, 2, 1]

const sumArr = arr.reduce((sum, el) => {
    return sum += el
}, 0)

console.log(sumArr);