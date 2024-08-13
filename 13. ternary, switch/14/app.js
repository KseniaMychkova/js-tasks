// * Пользователь вводит три числа: a, b и c. Напишите программу, которая определяет, является ли тройка чисел сторонами треугольника. Для этого следует проверить следующие условия:
// Сумма двух сторон должна быть больше третьей стороны. (a + b > c, a + c > b, b + c > a)
// Если это так, то далее определить, какой тип треугольника можно построить:
// Если все три стороны равны, выведите Равносторонний треугольник.
// Если две стороны равны, выведите Равнобедренный треугольник.
// Если все три стороны разные, выведите Разносторонний треугольник.
// Если треугольник не существует (условие не выполняется), выведите Треугольник не существует.
// Добавьте проверку на ввод только чисел.

// Входные: 5, 5, 5 → Результат: Равносторонний треугольник
// Входные: 3, 4, 5 → Результат: Разносторонний треугольник
// Входные: 6, 6, 10 → Результат: Равнобедренный треугольник
// Входные: 1, 2, 3 → Результат: Треугольник не существует
// Входные: 10, 15, 25 → Результат: Треугольник не существует
// Входные: 7, 7, 14 → Результат: Треугольник не существует

let a = prompt();
let b = prompt();
let c = prompt();

if (isNaN(a || b || c)) {
    console.log('Вы ввели не число!');
} else if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log('Равносторонний треугольник');
    } else if (a === b || b === c || a === c) {
        console.log('Равнобедренный треугольник');
    } else {
        console.log('Разносторонний треугольник');
    }
} else {
    console.log('Треугольник не существует');
}