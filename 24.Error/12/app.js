// 12. На вход подается строка в виде электронной почты пользователя. Необходимо найти в данной почте “@”. Если же есть, то вывести булевое true, в противном случае бросить исключение и его обработать


const checkEmail = (email) => {
    try {
        if (email.includes('@')) {
            return true
        } else {
            throw new Error('Введите email корректно')
        }
    } catch (error) {
        return error
    }
}
const result = checkEmail(prompt('Введите email'));
console.log(result);