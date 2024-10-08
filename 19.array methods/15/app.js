// 15. Напишите функцию, которая принимает неограниченное количество аргументов (чисел) и возвращает их сумму. Используйте оператор rest для обработки аргументов. 
// Входные: sum(1, 2, 3) → Результат: 6 
// Входные: sum(4, 5, 6, 7) → Результат: 22

function sum(...arr) {
    const result = arr.reduce(function(sum, el) {
        return sum += el
    }, 0)
    console.log(result);

}
sum(4, 5, 6, 7);