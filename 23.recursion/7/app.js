// 7. Вычислить факториал числа используя рекурсию Входные: 4 → Результат: 24 Входные: 5 → Результат: 120 Входные: 3 → Результат: 6

let res = 1

function rec(n) {
    if (n < 1) return res
    res *= n

    return rec(n - 1)
}

const result = rec(1)
console.log(result);