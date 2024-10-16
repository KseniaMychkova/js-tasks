// 7. На вход подается строка в виде пароля. Необходимо написать регулярное • Буквы в UPPER регистре • Буквы в LOWER регистре • Числа выражение для данной строки. Если же строка подходит под регулярное выражение, то вывести булевое true, в противном случае бросить исключение и обработать. Пароль должен содержать: • Специальные символы • Длина не менее 8 символов

let str = 'GGh$2121216jjjh'

const checkPass = (pass) => {
    try {
        if (/^[A-Za-z0-9\!\$\&\*\^%]{9,}$/gm.test(pass)) return true
        else throw new Error('пароль не подходит')
    } catch (error) {
        return error
    }
}
const result = checkPass(str)
console.log(result);