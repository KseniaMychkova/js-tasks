// 11. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Создать новый массив, где каждый элемент преобразуется в строку вида #name. 
// Использовать методы map и forEach. 
// Входные: ["hschool", "company"] → Результат: ["#hschool", "#company"] 
// Входные: ["apple", "banana"] → Результат: ["#apple", "#banana"] 
// Входные: ["car", "bike", "bus"] → Результат: ["#car", "#bike", "#bus"]

let n = prompt('Введите количество элементов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('Введите элементы массива'));
}

const result_map = arr.map(function(el) {
    return '#' + el
})
console.log(result_map);