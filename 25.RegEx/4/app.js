// 4. На вход подается строка в виде электронной почты пользователя. Необходимо написать регулярное выражение для данной строки. Если же строка подходит под регулярное выражение, то вывести булевое true, в противном случае бросить исключение и обработать

let email = 'k2606676@gmail.com';

const checkEmail = (email) => {
    try {
        if (/^[A-Za-z0-9\_-]+@[a-z]{2,7}\.[a-z]{2,6}$/gm.test(email)) return true
        else throw new Error('не подходит под условия')
    } catch (error) {
        return error
    }
}
const result = checkEmail(email)
console.log(result);