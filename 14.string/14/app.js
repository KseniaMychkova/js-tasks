// 14. Пользователь вводит два числа. Определите, какое из них больше. Если числа равны, верните
//  "Равны". Решениечерез: тернарный оператор.
//  Входные: 5, 10 → Результат: "10"
//  Входные: 7, 7 → Результат: "Равны"

let a = prompt('Введите число');
let b = prompt('Введите число');

a > b ? console.log("Больше ", a) : a < b ? console.log("Больше ", b) : console.log('Равны');