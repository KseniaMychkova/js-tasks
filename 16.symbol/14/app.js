// На вход подается строка в формате пути, например '/home/user/dir/file.txt'. 
// Необходимо извлечь и вернуть имяфайла,то есть подстроку после последнего символа/. 
// Входные: '/home/user/dir/file.txt' → Результат: 'file.txt' 
// Входные: '/docs/report.pdf' → Результат: 'report.pdf' 
// Входные: '/images/photo.png' → Результат: 'photo.png’

let str = prompt().trim();

console.log(str.slice(str.lastIndexOf('/') + 1));