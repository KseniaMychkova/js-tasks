// 13. На входе строка. Необходимо создать функцию, возвращающую true, если это слово анаграмма и false в противном случае

const str = 'конус'
const str2 = 'сукно'

const result = (a, b) => a.split('').sort().join('') == b.split('').sort().join('') ? true : false;

const strCheck = result(str, str2);
console.log(strCheck);