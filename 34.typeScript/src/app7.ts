// Напишитепрограмму, которая принимает строку str и переставляет местами первый и последний символыстроки.
// Выведитерезультат в консоль. 
// Входные: str = "hello" → Результат: "oellh" 
// Входные: str = "typescript" → Результат: "tpescripy"

let str_7:string = "typescript"


console.log(`${str_7[str_7.length - 1]}${str_7.slice(1, str_7.length - 1)}${str_7[0]}`);
