// 19. Пользователь вводит с клавиатуры два числа: a и b.
// Проверьте, что a делится без остатка на b.
// Если это так—выведите «Делится» и результат деления, иначе выведите «Делится с остатком» и остаток отделения. 
// Входные: a=20, b=5→Результат: Делится, результат=4 
// Входные: a=15, b=4→Результат: Делится с остатком, остаток=3 

let a = prompt();
let b = prompt();
let c = a / b;
if (a % b === 0) {
    console.log('Делится, результат=', c);
} else {
    console.log('Делится с остатоком, остаток=', a % b);
}