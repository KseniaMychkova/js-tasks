// 8. Вычислите сумму массива чисел статичного массива используя рекурсию
// Входные: [1, 2, 3, 4] → Результат: 10 Входные: [10, 20, 30] → Результат: 60
let i = 0
let sum = 0

function rec(array, i) {
    if (i == array.length) return sum
    sum += array[i]
    i++
    return rec(array, i)
}
console.log(rec([10, 20, 30], i));