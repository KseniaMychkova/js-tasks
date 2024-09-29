// 6. На входе массив array. Посчитайтеколичество элементов массива используя рекурсию Входные: [1, 2, 3, 4] → Результат: 4 Входные: [10, 20, 30] → Результат: 3 Входные: [1, [2, [3]], 4] → Результат: 3

let sum = 0

function rec(array) {
    if (sum == array.length) return sum
    sum++
    return rec(array)
}
const result = rec([1, [2, [3]], 4])
console.log(result);