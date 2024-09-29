// 11. На входе целое число n. Найдите сумму цифр числа с использованием рекурсии. Входные: 123 → Результат: 6 Входные: 456 → Результат: 15 Входные: 987 → Результат: 24

let str = String(123)
let sum = 0
let i = 0

function rec(str, i) {
    if (i === str.length) return sum
    sum += +str[i]
    return rec(str, i + 1)
}
const result = rec(str, i)
console.log(result);