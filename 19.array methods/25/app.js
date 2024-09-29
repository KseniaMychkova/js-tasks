// 25. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры. Создать новый массив,состоящий из длин строк в исходном массиве. 
// Использовать метод map. 
// Входные: ["apple", "banana", "cherry"] → Результат: [5, 6, 6] 
// Входные: ["dog", "cat"] → Результат: [3, 3] 
// Входные: ["hschool", "company"] → Результат: [7, 7]

let n = prompt('Введите колтчество элементов массива');
let arr = [];
let newArr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt('Введите элементы'));
}

arr.forEach(function(el) {
    newArr.push(el.length)
})
console.log(newArr);

// const result_map = arr.map(function(el) {
//     return el = el.length
// })
// console.log(result_map);