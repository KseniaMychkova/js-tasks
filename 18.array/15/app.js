// Повторите заданное предложение prompt указанное количество раз n - prompt.
//  Метод: Используйте цикл for.
//  Входные: ("Привет", 3) → Результат: "Привет Привет Привет "
//  Входные: ("Мир", 2) → Результат: "Мир Мир "
//  Входные: ("JavaScript", 1) → Результат: "JavaScript "

let word = prompt('Введите слово');
let num = +prompt('Введите число');
let sent = '';

for (let i = 0; i < num; i++) {
    sent += `${word} `;

}
console.log(sent + ' ');