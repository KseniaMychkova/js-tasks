// 9. Реализуйтепоиск максимального числа статичного массива используя рекурсию Входные: [1, 2, 3, 4] → Результат: 4 Входные: [10, 5, 8] → Результат: 10
let i = 0
let max = 0

function rec(arr) {
    if (i === arr.length) return max
    if (max < arr[i]) {
        max = arr[i]
    }
    i++
    return rec(arr)
}
console.log(rec([1, 2, 3, 15, 4]));