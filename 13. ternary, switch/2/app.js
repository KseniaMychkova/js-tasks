// Пользователь вводит число от 1 до 7, указывающее день недели. Выведите название соответствующего дня недели. (Решить задачу через: if … else, switch … case)

// Входные: 1 → Результат: Понедельник
// Входные: 5 → Результат: Пятница

let day = +prompt();

// if (day === 1) {
//     console.log('Понедельник');
// } else if (day === 2) {
//     console.log('Вторник');
// } else if (day === 3) {
//     console.log('Среда');
// } else if (day === 4) {
//     console.log('Четверг');
// } else if (day === 5) {
//     console.log('Пятница');
// } else if (day === 6) {
//     console.log('Суббота');
// } else if (day === 7) {
//     console.log('Воскресенье');
// } else {
//     console.log('введите цифру от 1 до 7');
// }

switch (day) {
    case (1):
        console.log('Понедельник');
        break;
    case (2):
        console.log('Вторник');
        break;
    case (3):
        console.log('Среда');
        break;
    case (4):
        console.log('Четверг');
        break;
    case (5):
        console.log('Пятница');
        break;
    case (6):
        console.log('Суббота');
        break;
    case (7):
        console.log('Воскресенье');
        break;
    default:
        console.log('введите цифру от 1 до 7');
        break;
}