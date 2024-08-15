// Определите, заканчивается ли строка на восклицательный знак "!". Решение через: if … else, тернарный оператор.

// Входные: "Hello!" → Результат: true
// Входные: "Hello" → Результат: false

let str = prompt();

// if (str[str.length - 1] === '!') {
//     console.log(true);
// } else {
//     console.log(false);
// }

str[str.length - 1] === '!' ? console.log(true) : console.log(false);