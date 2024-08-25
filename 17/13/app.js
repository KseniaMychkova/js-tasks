// Пользователь вводит строку и число n. Повторите строку n раз с помощью цикла for.
// Входные: "hello", 3 → Результат: "hellohellohello"
// Входные: "abc", 2 → Результат: "abcabc"
// Входные: "xyz", 5 → Результат: "xyzxyzxyzxyzxyz"

const str = prompt();
let n = +prompt();

for (let i = 0; i <= n; i++) {
    console.log(str.repeat(n));
    break;
}