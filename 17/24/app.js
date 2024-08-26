// Дана строка. Напишите программу, которая с помощью цикла for подсчитывает 
// количество символов в строке без учета пробелов. 
// Входные: "Hello World" Результат: Количество символов: 10 
// Входные: " JavaScript is awesome! " Результат: Количество символов: 20

// let str = prompt();
// let str2 = str.replaceAll(' ', '');

// console.log(str2.length);

let str = prompt();
let strLength = 0;


for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
        continue;
    }
    strLength++
}
console.log(strLength);