// Проверьте, является ли введенное значение числом. Если это число, выведите true, иначе — false. (Решить задачу через: if … else, тернарный оператор)

// Входные: 42 → Результат: true
// Входные: "Hello" → Результат: false

let num = prompt();

// if (isNaN(num)) {
//     console.log(false);
// } else {
//     console.log(true);
// }

isNaN(num) ? console.log(false) : console.log(true);