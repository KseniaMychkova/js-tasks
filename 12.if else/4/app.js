// 4. У известного американского писателя Рэя Бредбери есть роман «451 градус по Фаренгейту».
// Напишите скрипт, который определяет, какой температуре по шкале Цельсия соответствует
// указанное значение по шкале Фаренгейта. Используйте формулу: C = 5/9 ∙ (F - 32).
// Входные: 451 по Фаренгейту → Результат: 232.78 по Цельсию
// Входные: 212 по Фаренгейту → Результат: 100 по Цельсию

let F = 451;

console.log(5 / 9 * (F - 32));

F = 212;
console.log(5 / 9 * (F - 32));