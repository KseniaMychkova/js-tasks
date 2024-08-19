// На вход подается строка, представляющая электронную почту.
// Если строка содержит символ @ и заканчивается на.com или.ru, выведите true, иначе false.
// Входные: "user@domain.com"→
// Результат: true
// Входные: "hello@world.ruhello@world.ru"→
// Результат: true Входные: "example@gmail"→
// Результат: false

let str = prompt('Введите электронную почту');

if (str.includes('@') && str.endsWith('.com') || str.endsWith('.ru')) {
    console.log(true);
} else {
    console.log(false);
}