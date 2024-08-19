// Пользователь вводит строку и числоn. Повторите строку n раз.
// Входные: "hello", 3→ Результат: "hellohellohello"
// Входные: "abc", 2→ Результат: "abcabc"
// Входные: "xyz", 5→ Результат: "xyzxyzxyzxyzxyz"

let str = prompt('Введите строку');
let num = prompt('Введите число')

console.log(str.repeat(num));