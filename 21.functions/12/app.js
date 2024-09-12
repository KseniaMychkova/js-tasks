// На входе строка. Необходимо создать функцию, возвращающую true, если это слово палиндром и false в противном случае

let str = 'anna'


function doPalindrom(strTest) {
    let newStr = str.split('').reverse().join('');
    let result
    if (str == newStr) {
        result = true
    } else {
        result = false
    }
    return result
}
const palindTest = doPalindrom(str)
console.log(palindTest);