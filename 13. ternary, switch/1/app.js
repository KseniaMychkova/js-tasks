// Определите, кратко ли введенное число трём. (Решить задачу через: if … else, тернарный оператор)

// Входные: 9 → Результат: true
// Входные: 7 → Результат: false

let numValue = prompt();

// if (numValue % 3 === 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

numValue % 3 === 0 ? console.log(true) : console.log(false);