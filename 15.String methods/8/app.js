// 8. Замените все @ на ! в строке.
// Входные: "user@domain.com" → Результат: "user!domain.com"
// Входные: "@@email@@@" → Результат: "!!email!!!"

let str = prompt().trim();

console.log(str.replaceAll('@', '!'));