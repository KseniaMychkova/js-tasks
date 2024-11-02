// 8. Реализуйте класс Validator. У него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является то false.

// class Validator {
//     email;
//     constructor(str) {
//         this.email = str
//     }
//     isEmail = () => {
//         try {
//             if (this.email.includes('@') && this.email.includes('.ru') || this.email.includes('.com') || this.email.includes('.by')) return true
//             else {
//                 throw new Error(false)
//             }
//         } catch (error) {
//             return error
//         }
//     }
// }

// const validator = new Validator('k2606676@gmail.com')
// console.log(validator.isEmail());


// class Validator {
//     email;
//     constructor(str) {
//         this.email = str
//     }
//     isEmail = () => {
//         try {
//             if (/[a-zA-Z0-9!#$%^&*()_\-=+]+@[a-zA-Z0-9]+\.[a-zA-Z]+/gm.test(this.email)) return true
//             else {
//                 throw new Error(false)
//             }
//         } catch (error) {
//             return error
//         }
//     }
// }

// const validator = new Validator('k2606676@gmail.com')
// console.log(validator.isEmail());


class Validator {

    isEmail = (email) => {
        try {
            if (/[a-zA-Z0-9!#$%^&*()_\-=+]+@[a-zA-Z0-9]+\.[a-zA-Z]+/gm.test(email)) return true
            else {
                throw new Error(false)
            }
        } catch (error) {
            return error
        }
    }
}

const validator = new Validator()
console.log(validator.isEmail('k2606676@gmail.com'));