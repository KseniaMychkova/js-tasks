// 2. У тебя есть массив чисел numbers, и тебе нужно отфильтровать только чётные числа. Создай новый массив evenNumbers, который будет содержать только чётные значения из numbers.

const arr = [1, 2, 3, 4, 5, 6, 7]

const evenNumbers = arr.filter(el => {
    if (el % 2 === 0) return true
})
console.log(evenNumbers);