// 1. На входе значение. Необходимо его обработать. Если это число и оно не является четным, бросить исключение
let n = 26


function main(a) {
    try {
        if (isNaN(a)) throw new Error('не число')
        if (n % 2 !== 0) throw new Error('не четное число');
        return 'четное'
    } catch (error) {
        return error
    }
}
let result = main(n)
console.log(result);