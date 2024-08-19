// Пользователь вводит строку, состоящую из слов, разделенных пробелами. 
// Преобразуйте каждое словотак, чтобы первая буквабыластрочной,а остальные—заглавными. 
// Входные: "HELLO WORLD" → Результат:"hELLO wORLD" 
// Входные: "JavaScript LANGUAGE" → Результат: "jAVA sCRIPT lANGUAGE" 
// Входные: "CODING is FUN" → Результат:"cODING iS fUN"

let str = prompt();
let strArr = str.split(' ');

if (strArr.length === 1) {
    console.log(str[0].toUpperCase());
} else if (strArr.length === 2) {
    console.log(str[0].toUpperCase() && str[str.indexOf(' ') + 1])
}