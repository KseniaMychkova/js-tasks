// Введите строку. Если она равна “hschool”, выведите true. В противном случае false.

// Входные: hschool → Результат: true
// Входные: hscool → Результат: false

let str = prompt();

switch (str) {
    case 'hschool':
        console.log(true);
        break;
    default:
        console.log(false);
        break;
}