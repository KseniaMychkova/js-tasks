// Реализуйте класс Anagram(Анаграмма это слово или фраза, полученный путем замены букв исходного слова или фразы).Создать функцию для вывода ряда true, если слова являются анаграммами. Добавитьпроверкина ввод


// class Anagram {
//     str1;
//     str2;
//     constructor(s1, s2) {
//         this.str1 = s1
//         this.str2 = s2
//     }
//     check = () => {
//         if (!isNaN(this.str1) || !isNaN(this.str2)) return 'Вы ввели число'
//         else {
//             const arr = this.str2.split('')
//             const result = arr.every(el => {
//                 if (this.str1.includes(el) && this.str1.length === arr.length) return true
//             })
//             return result
//         }
//     }
// }

// const anagram = new Anagram('lamp', 'palmc')
// console.log(anagram.check());



// class Anagram {
//     str1 = 'lamp';
//     str2 = 'palmf';

//     check = () => {
//         if (!isNaN(this.str1) || !isNaN(this.str2)) return 'Вы ввели число'
//         else {
//             const arr = this.str2.split('')
//             const result = arr.every(el => {
//                 if (this.str1.includes(el) && this.str1.length === arr.length) return true
//             })
//             return result
//         }
//     }
// }

// const anagram = new Anagram()
// console.log(anagram.check());


class Anagram {
    check = (str1, str2) => {
        if (!isNaN(str1) || !isNaN(str2)) return 'Вы ввели число'
        else {
            const arr = str2.split('')
            const result = arr.every(el => {
                if (str1.includes(el) && str1.length === arr.length) return true
            })
            return result
        }
    }
}

const anagram = new Anagram()
console.log(anagram.check('lamp', 'palm'));