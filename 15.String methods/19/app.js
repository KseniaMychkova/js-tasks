// 19. На вход подается строка, состоящая из имени и фамилии, разделенных пробелом. Проверьте, что
// имя и фамилия начинаются с заглавной буквы.
// Входные: "Chris Alan" → Результат: true
// Входные: "chris alan" → Результат: false
// Входные: "John Doe" → Результат: true

let str = prompt('Введите имя и фамилию');
let a = str.indexOf(' ');

if (str[0] !== str[0].toUpperCase() || str[a + 1] !== str[a + 1].toUpperCase()) {
    console.log(false);

} else {
    console.log(true);
}