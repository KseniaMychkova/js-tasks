// Создайте класс PasswordGenerator с методом generate(length), который возвращает строку случайных символов длиной length, включающую заглавные и строчные буквы, цифры и специальные символы.

class PasswordGenerator {
    str = `qwertyuiopasdfghjklzxcvbnm\,\.\/'1230456789QQWERTYUIOPASDFGHJKLZXCVBNM`
    pass = ''
    generate = (length) => {
        for (let i = 0; i < length; i++) {
            let num = Math.floor(Math.random() * this.str.length)
            this.pass += this.str[num]
        }
        return this.pass
    }
}

const passwordGenerator = new PasswordGenerator()
console.log(passwordGenerator.generate(12));