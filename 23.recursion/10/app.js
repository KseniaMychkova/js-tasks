// 10. На входе строка s. Проверьте, является ли строка палиндромом (читается одинаково в обе стороны), используя рекурсию. Входные: "madam" → Результат: True Входные: "hello" → Результат: False Входные: "racecar" → Результат: True
let arr = 'madam'.split('')

function rec(arr) {
    if (arr.length == 0) return true
    if (arr[0] !== arr[arr.length - 1]) return false
    return rec(arr.slice(1, arr.length - 1))
}
const result = rec(arr);
console.log(result);