// 27. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры. Создать новый массив,содержащий строки длиной менее 5 символов. Использовать метод filter. 
// Входные: ["apple", "banana", "cat"] → Результат: ["cat"]
//  Входные: ["dog", "cat", "apple"] → Результат: ["dog", "cat"] 
// Входные: ["hschool", "company"] → Результат: []


let n = prompt('Введите количество элементов');
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('Введите элементы массива'))
}

const result_filter = arr.filter((el) => el.length < 5 ? true : null);

console.log(result_filter);