// 7. Пользователь вводит доменное имя и путь на сайте.Выведите полный URL в формате:
//     "https://[домен]/[путь]".Решение через: конкатенация, интерполяция.
// Входные: "example.com", "about"→
// Результат: "https://example.com/about"
// Входные: "mysite.ru", "contact"→
// Результат: https: //mysite.ru/contact

let a = prompt('Введите доменное имя');
let b = prompt('Введите путь на сайт');

//console.log("https\:" + a + "/" + b);
console.log(`https\:${a}/${b}`);