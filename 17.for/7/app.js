// Пользователь вводит строку, представляющую число.
// Необходимо просуммировать все цифры в
// строке.
// Входные: "123"→
// Результат: 6
// Входные: "111111111111"→
// Результат: 12

const str = prompt();
let result = 0;

for (let i = 0; i < str.length; i++) {
    result += +str[i]

}
console.log(result);