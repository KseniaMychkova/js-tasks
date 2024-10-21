// На вход подается число. Необходимо каждое значение возвести в степень индекса и вычислить сумму. 12345=10+21+32+43+54

const num = prompt().trim()
const arr = num.split('')

let sum = 0

arr.forEach((el, i) => {
    return sum += el ** i
})

console.log(sum);