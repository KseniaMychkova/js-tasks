// Дана строка. Напишите программу, которая с помощью цикла for подсчитывает
//  количество гласных букввстроке. 
//  Гласные: a, e, i, o, u. 
//  Входные: "Hello!" Результат: Количество гласных: 2 
//  Входные: "Sky" Результат: Количество гласных: 0

const str = prompt();
const letter = 'a, e, i, o, u'
let result = 0;

for (let i = 0; i < str.length; i++) {
    if (letter.includes(str[i])) {
        result++
    }
}
console.log(`Количество гласных: ${result}`);