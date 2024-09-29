// 2. Отобразите в строке через пробел четные числа от 5 до 0 по убыванию используя рекурсию Входные: 5 → Результат: 4 2 0
let i = 5

function rec() {
    if (i === 0) return 0
    if (i % 2 === 0) {
        console.log(i);
    }

    i--

    return rec()
}

const result = rec()
console.log(result);