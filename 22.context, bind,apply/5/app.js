// Напишите функцию, которая принимает адрес электронной почты и возвращает объект с полями email и active. Поле active должно быть true, если адрес содержит символ '@' и '.com’ / ‘.by', и false в противном случае. { email, active: true / false }

const testEmail = () => {
    let email = 'some@gmail.com'
    let obj = {
        email: null,
        active: null,
    }
    if (email.includes('@') && email.includes('.com') || email.includes('@') && email.includes('.by')) {
        obj.email = email;
        obj.active = true;
    }
    return obj
}

const result = testEmail()
console.log(result);