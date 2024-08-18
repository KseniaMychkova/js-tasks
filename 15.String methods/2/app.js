// 2. Преобразуйте строку ' Full StaCK DevELoper ' в массив вида ['full', 'stack', 'developer].
// Входные: ' Full StaCK DevELoper ' → Результат: ['full', 'stack', 'developer']
// Входные: ' JaVa ScriPt ' → Результат: ['java', 'script']
// Входные: 'PYTHON java' → Результат: ['python', 'java']

let str = prompt().trim().toLowerCase();

console.log(str.split(' '));