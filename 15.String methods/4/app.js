// 4. Преобразуйте строку вида "HTML JavaScript PHP" в "HTML-JAVASCRIPT-PHP".
// Входные: "HTML JavaScript PHP" → Результат: "HTML-JAVASCRIPT-PHP"
// Входные: "css react node" → Результат: "CSS-REACT-NODE"

let a = prompt().toUpperCase().trim();

console.log(a.replaceAll(' ', '-'));