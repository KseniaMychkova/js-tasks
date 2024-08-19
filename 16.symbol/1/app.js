// Пользователь вводит слово. Преобразуйте его в хештег. 
// Проверка: строка должна состоять только из текста. 
// Входные: "hSСhOol"→ Результат: '#hschool' 
//Входные: "JavaScript" → Результат: '#javascript'

let str = prompt();

if (isNaN(str)) {
    console.log(`#${str.toLowerCase()}`)
} else {
    console.log('Введите текст');
}