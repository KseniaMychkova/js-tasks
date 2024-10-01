// 1. На вход подается строка в виде числа. Необходимо написать регулярное выражение. Если строка состоит только из чисел, то вывести булевое true, в противном случае бросить исключение и обработать

let str = '125апп'

const checkStr = (str) => {
    try {
        if (/^[0-9]+$/gm.test(str)) console.log(true)
        else throw new Error('не подходит под условия')
    } catch (error) {
        return error
    }
}
const result = checkStr(str);
console.log(result);