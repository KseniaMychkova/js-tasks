// 12. На входе число от 1 до 4, указывающее время суток: 1 — утро, 2 — день, 3 — вечер, 4 — ночь.
//  Выведитесоответствующееназваниевременисуток.Решениечерез:switch ... case.
//  Входные: 1 → Результат: "Утро"
//  Входные: 3 →Результат: "Вечер"

let a = prompt('Введите число от 1 до 4');

if (isNaN(a)) {
    console.log('Вы ввели не число');
} else if (a > 4 || a < 1) {
    console.log('Недопустимый диапазон')
} else {
    switch (a) {
        case '1':
            console.log('утро');
            break;
        case '2':
            console.log('день');
            break;
        case '3':
            console.log('вечер');
            break;
        case '4':
            console.log('ночь');
            break;
    }
}