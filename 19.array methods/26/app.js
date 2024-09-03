// 26. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры. Вывести true, если все строки в массиве имеют длину более 3 символов. Использовать метод every. 
// Входные: ["apple", "banana", "cherry"] → Результат: true 
// Входные: ["dog", "cat", "apple"] → Результат: false
//  Входные: ["hschool", "company", "cherry"] → Результат: true

let n = prompt('Введите количество элементов массива');
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('Введите элементы массива'));
}

const result_every = arr.every(function(el) {
    return el.length > 3 ? true : false;
})
console.log(result_every);