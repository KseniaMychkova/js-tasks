// 2. На вход подается строка вида “имя фамилия возраст”. Необходимо написать регулярное выражение для данной строки. Если же строка подходит под регулярное выражение, то вывести булевое true, в противном случае бросить исключение и обработать
let str = 'Kseniya Mychkova 34 years'

const checkStr = (str) => {
    try {
        if (/^[A-Z][a-z]+ [A-Z][a-z]+ [0-9]{1,3} years$/gm.test(str)) return true
        else throw new Error('не подходит под условия')

    } catch (error) {
        return error
    }

}
const result = checkStr(str)
console.log(result);