// 6. Проверьте, включает ли строка .com или .ru. Выведите true или false.
// Входные: "example.com" → Результат: true
// Входные: "website" → Результат: false
// Входные: "myweb.rusite" → Результат: true

let str = prompt().trim();

if (str.includes('.ru') || str.includes('.com')) {
    console.log(true);

} else {
    console.log(false);
}