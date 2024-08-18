// 13. Пользователь вводит строку. Удалите лишние пробелы, приведите все символы к нижнему
// регистру и повторите строку трижды.
// Входные: " HeLLo WoRld " → Результат: "hello worldhello worldhello world"
// Входные: " Java " → Результат: "javajavajava"
// Входные: "text " → Результат: "texttexttext"

let str = prompt().trim().toLowerCase();

console.log(str.repeat(3));