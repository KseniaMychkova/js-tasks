// 20. На вход подается строка. Определите, является ли строка хорошей. Строка считается хорошей,
// если в ней присутствует подстрока «хорош» в любом регистре.
// Входные: "я очень хороший текст" → Результат: true
// Входные: "ЭТО НЕ ХОРОШО" → Результат: true
// Входные: "плохой текст" → Результат: false

let str = prompt().trim().toLowerCase();

console.log(str.includes('хорош'));