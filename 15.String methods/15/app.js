// 15. Дана строка из трех слов, разделенных пробелом. Вырежьте 2-е и 3-е слова.
// Входные: "hello world example" → Результат: 'hello'
// Входные: "JavaScript is awesome" → Результат: 'JavaScript'
// Входные: "I love coding" → Результат: 'I'

let str = prompt().trim();
let a = str.indexOf(' ');

console.log(str.slice(0, (a + 1)));