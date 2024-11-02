// Реализуйте класс WordString, который будет иметь следующие методы: метод reverseString, переворачивающий строку, метод upperFirst, возвращающий строку, где первая буква заглавная и метод upperEvery, который делает заглавной первую букву каждого слова этой строки.

// class WordString {
//     str = 'hschool js'
//     reverseString = () => {
//         return this.str.split(' ').reverse().join(' ')
//     }
//     upperFirst = () => {
//         return this.str[0].toUpperCase() + this.str.slice(1)
//     }

//     upperEvery = () => {
//         const arr = this.str.split(' ')
//         const result = arr.map(el => {
//             return el[0].toUpperCase() + el.slice(1)
//         })
//         return result.join(' ')
//     }
// }

// const wordString = new WordString()
// console.log(wordString.reverseString());
// console.log(wordString.upperFirst());
// console.log(wordString.upperEvery());

// class WordString {
//     str;
//     constructor(str) {
//         this.str = str
//     }
//     reverseString = () => {
//         return this.str.split(' ').reverse().join(' ')
//     }
//     upperFirst = () => {
//         return this.str[0].toUpperCase() + this.str.slice(1)
//     }

//     upperEvery = () => {
//         const arr = this.str.split(' ')
//         const result = arr.map(el => {
//             return el[0].toUpperCase() + el.slice(1)
//         })
//         return result.join(' ')
//     }
// }

// const wordString = new WordString('hschool js')
// console.log(wordString.reverseString());
// console.log(wordString.upperFirst());
// console.log(wordString.upperEvery());


class WordString {
    reverseString = (str) => {
        return str.split(' ').reverse().join(' ')
    }
    upperFirst = (str) => {
        return str[0].toUpperCase() + str.slice(1)
    }

    upperEvery = (str) => {
        const arr = str.split(' ')
        const result = arr.map(el => {
            return el[0].toUpperCase() + el.slice(1)
        })
        return result.join(' ')
    }
}

const wordString = new WordString()
console.log(wordString.reverseString('hschool js'));
console.log(wordString.upperFirst('hschool js'));
console.log(wordString.upperEvery('hschool js'));