// 24. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры. Проверить, содержит ли массив хотя бы одно положительное число. Использовать метод some. 
// Входные: [1,-2,-3,-4] → Результат: true 
// Входные: [-1,-2,-3,-4] → Результат: false 
// Входные: [10,-10, 20] → Результат: true

let n = prompt('Введите количество элементов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('Введите элементы массива'));
}

const result_some = arr.some(function(el) {
    return el > 0 ? true : false;
})
console.log(result_some);