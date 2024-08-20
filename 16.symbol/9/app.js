// Пользователь вводит строку, состоящую из слов, разделенных пробелами. 
// Преобразуйте каждое словотак, чтобы первая буквабыластрочной,а остальные—заглавными. 
// Входные: "HELLO WORLD" → Результат:"hELLO wORLD" 
// Входные: "JavaScript LANGUAGE" → Результат: "jAVA sCRIPT lANGUAGE" 
// Входные: "CODING is FUN" → Результат:"cODING iS fUN"

let str = prompt().toUpperCase();
let strArr = str.split(' ');

if (strArr.length === 1) {
    console.log(strArr[0][0].toLowerCase() + strArr[0].slice(1));
} else if (strArr.length === 2) {
    console.log(strArr[0][0].toLowerCase() + strArr[0].slice(1) + ' ' + strArr[1][0].toLowerCase() + strArr[1].slice(1));
} else if (strArr.length === 3) {
    console.log(strArr[0][0].toLowerCase() + strArr[0].slice(1) + ' ' + strArr[1][0].toLowerCase() + strArr[1].slice(1) + ' ' + strArr[2][0].toLowerCase() + strArr[2].slice(1));
}