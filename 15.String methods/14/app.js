// 14. Дана строка из слов, разделенных пробелом. Определите количество слов с строке.
// Входные: "hello world" → Результат: 2
// Входные: "JavaScript is awesome" → Результат: 3

let str = prompt().trim();
let strMas = str.split(' ')

console.log(strMas.length);