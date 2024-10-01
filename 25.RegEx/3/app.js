// 3. На вход подается строка из 2 и более слов. Необходимо все символы пробела заменить на пустую строку.

let str = 'kseniya mychkova kjgj jhsdfuijhs'
let newStr = ''
const changeStr = (str) => {
    newStr = str.replaceAll(/ /gm, '')
    return newStr
}
const result = changeStr(str)
console.log(result);