// 11. Вырежьте из строки "aaa bbb ccc" слово "bbb".
// Входные: "aaa bbb ccc" → Результат: "aaa ccc"
// Входные: "bbb ccc aaa" → Результат: "ccc aaa"
// Входные: "ccc bbb aaa" → Результат: "ccc aaa“

let str = prompt().trim();
let strFirst = str.indexOf("bbb");
let strSlice = str.slice(strFirst)


if (str.startsWith('bbb')) {
    console.log(str.slice(0 + 'bbb'.length));
} else {
    let a = str.slice(0, strFirst);
    let b = str.slice(strFirst + 'bbb'.length)
    console.log(a + b);
}