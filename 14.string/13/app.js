// 13. Пользователь вводит одно из названий домашних животных: "собака", "кошка", "попугай", "рыбка".
//  Выведите соответствующий тип животного: "Млекопитающее", "Млекопитающее", "Птица", "Рыба".
//  Решениечерез:switch... case.
//  Входные: "собака"→ Результат: "Млекопитающее"
//  Входные: "кошка"→ Результат: "Млекопитающее"
//  Входные: "попугай"→ Результат: "Птица"
//  Входные: "рыбка" → Результат: "Рыба"


let a = prompt('Введите одно из следующих животных: собака, кошка, попугай, рыбка');

switch (a) {
    case 'собака':
        console.log('Млекопитающее')
        break;
    case 'кошка':
        console.log('Млекопитающее')
        break;
    case 'попугай':
        console.log('Птица')
        break;
    case 'рыбка':
        console.log('Рыба')
        break;
    default:
        console.log('Не определен');
        break;
}