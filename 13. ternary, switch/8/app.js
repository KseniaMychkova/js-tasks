// Пользователь вводит число: 1, 2, 3 или 4. Если введенное значение равно '1', то вывести в консоль 'зима'; если '2' – 'весна' и так далее. Добавьте проверку на ввод только чисел. Решите задачу через switch-case.


// Входные: 1 → Результат: зима
// Входные: 4 → Результат: лето
// Входные: hi → Результат: Вы ввели не число!


let a = prompt('введите число от 1 до 4');

if (isNaN(a)) {
    console.log('Вы ввели не число!');
} else if (a < 1 || a > 4) {
    console.log('Вы ввели не корректное число!');
} else {
    switch (a) {
        case '1':
            console.log('зима');
            break;
        case '2':
            console.log('весна');
            break;
        case '3':
            console.log('лето');
            break;
        case '4':
            console.log('весна');

    }
}