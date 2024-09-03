// 9. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры. 
// Создать новый массив, содержащий только те строки, которые начинаются с символов a или h. 
// Проверить ввод только текстовых значений. Использовать метод filter. 
// Входные: ["ann", "school", "hschool", "borabora"] → Результат: ["ann", "hschool"] 
// Входные: ["apple", "banana", "harvest", "grape"] → Результат: ["apple", "harvest"] 
// Входные: ["home", "anchor", "boat"] → Результат: ["home", "anchor"]

let n = prompt('Введите количество элементов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('Введите уэлементы массива'));
}

const result_filter = arr.filter(function(el) {
    if (isNaN(el)) {
        if (el.startsWith('a') || el.startsWith('h')) {
            return el;
        }
    }
})

console.log(result_filter);