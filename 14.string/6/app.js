// 6. Пользователь вводит день, месяц и год. Выведите дату в формате: "[день].[месяц].[год]". Решение
//  через: конкатенация, интерполяция.
//  Входные: "13", "08", "2024" → Результат: "13.08.2024"
//  Входные: "01", "01", "2022" → Результат: "01.01.2022“

let a = prompt('Введите день');
let b = prompt('Введите месяц');
let c = prompt('Введите год');

//console.log(a + '.' + b + '.' + c);
console.log(`${a}.${b}.${c}`);