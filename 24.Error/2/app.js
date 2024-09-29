// 2. На входе массив значений. Необходимо его обработать. Если в массиве есть хотя бы 1 строка, бросить исключение.

let arr = [1, 2, 7]

function check(checkArr) {
    try {
        const result_every = checkArr.every(el => {
            if (typeof el === 'string') throw new Error('В массиве есть строка')
            else return true
        })
        return result_every

    } catch (error) {
        return error
    }

}
const result = check(arr)
console.log(result);