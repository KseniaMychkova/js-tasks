// 11. Вырежьте из строки "aaa bbb ccc" слово "bbb".
// Входные: "aaa bbb ccc" → Результат: "aaa ccc"
// Входные: "bbb ccc aaa" → Результат: "ccc aaa"
// Входные: "ccc bbb aaa" → Результат: "ccc aaa“

let str = prompt().trim();
let strFirst = str.indexOf("bbb");
let strLast = str.lastIndexOf("b");

console.log(str.slice(strFirst, strLast));