// Пользователь вводит строку и число n. Найдите символ в строке под индексом n. Добавьте
//  проверку, чтобыубедиться, что введено числоn.
//  Входные: "JavaScript", 4 → Результат: "S"
//  Входные: "Hello", 10 → Результат: "Индекс вне диапазона"

let a = prompt('Введите строку');
let b = prompt('Введите число');

if (isNaN(b)) {
    console.log("Вы ввели не число");
} else if (b > a.length - 1) {
    console.log("Индекс вне диапазона");
} else {
    console.log(a[b]);
}