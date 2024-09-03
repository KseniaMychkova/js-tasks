// 30. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры. Найти наименьшее число в массиве. Если в массиве нет чисел, вывести "Нет чисел". Использовать метод reduce. 
// Входные: [10, 3, 5, 7] → Результат: 3 
// Входные: ["apple", "banana", "cherry"] → Результат: "Нет чисел" 
// Входные: [50, 20, 30] → Результат: 20


let n = prompt('Введите количество элементов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(+prompt('Введите элементы массива'));
}

const result_reduce = arr.reduce(function(result_min, el) {
    if (!isNaN(el)) {
        if (el < result_min) {
            return result_min = el;
        } else {
            return result_min
        }
    } else {
        console.log('Нет чисел');

    }
}, Infinity)

console.log(result_reduce);