// Пользователь вводит номер месяца. Необходимо вывести пору года по номеру месяца. Добавьте проверку, чтобы убедиться, что введенные значения — числа. (Решить задачу через switch … case)

// Входные: 3 → Результат: Весна
// Входные: 8 → Результат: Лето 
// Входные: hi → Результат: Вы ввели не число!

let a = prompt();


if (!isNaN(a)) {

    switch (a) {
        case '1':
            console.log('Январь');
            break;
        case '2':
            console.log('Февраль');
            break;
        case '3':
            console.log('Март');
            break;
        case '4':
            console.log('Апрель');
            break;
        case '5':
            console.log('Май');
            break;
        case '6':
            console.log('Июнь');
            break;
        case '7':
            console.log('Июль');
            break;
        case '8':
            console.log('Август');
            break;
        case '9':
            console.log('Сентябрь');
            break;
        case '10':
            console.log('Октябрь');
            break;
        case '11':
            console.log('Ноябрь');
            break;
        case '12':
            console.log('Декабрь');
            break;
        default:
            console.log('Введите число от 1 до 12');
            break;
    }

} else {
    console.log('Вы ввели не число!');
}