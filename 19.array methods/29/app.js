// 29. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры. Использовать метод filter, чтобы создать новый массив, содержащий только элементы, которые являются положительными числами. 
// Входные: [1,-2, 3,-4, 5] → Результат: [1, 3, 5] 
// Входные: [0,-10,-20] → Результат: "Массив пуст" 
// Входные: [10, 20, 30] → Результат: [10, 20, 30]


let n = prompt('Введите количество элементов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('Введите элементы массива'));
}

const result_filter = arr.filter(function(el) {
    if (el > 0) {
        return el;
    }
})

result_filter.length == 0 ? console.log('Массив пуст') : console.log(result_filter);