// 22. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры. Создать массив, в котором каждый элемент массива является произведением его индекса и значения. Использоватьметод map. 
// Входные: [1, 2, 3, 4] → Результат: [0, 2, 6, 12] 
// Входные: [5, 10, 15] → Результат: [0, 10, 30] 
// Входные: [2, 4, 6] → Результат: [0, 4, 12]

let n = prompt('Введите количестве элементов');
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('Введите элементы массива'));
}

const result = arr.map(function(el, i, arr) {
    return el * i;
})
console.log(result);