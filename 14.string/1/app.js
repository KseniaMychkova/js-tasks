// Проверьте, является ли введенная строка пустой. Решение через: if … else, тернарный оператор.

// Входные: "" → Результат: true
// Входные: "Hello" → Результат: false

let str = prompt();

// if (str === '') {
//     console.log(true);
// } else {
//     console.log(false);
// }

str === '' ? console.log(true) : console.log(false);