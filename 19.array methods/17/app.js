// 17. Напишите функцию, которая принимает любое количество строковых аргументов и возвращает массив этих строк в верхнем регистре. Используйте оператор rest. 
// Входные: toUpperCase('apple', 'banana', 'cherry') → Результат: ['APPLE', 'BANANA', 'CHERRY'] 
// Входные: toUpperCase('dog', 'cat') → Результат: ['DOG', 'CAT']


function toUpperCase(...arr) {
    const result = arr.map(function(el) {
        return el.toUpperCase();
    })
    console.log(result);

}
toUpperCase('dog', 'cat')