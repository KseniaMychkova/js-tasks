// 10. На входе n– количество элементов массива, затем пользователь заполняет массив arr с клавиатуры. 
// В памяти также есть статичная переменная со значением "javascript". 
// Создать новый массив из строк массива arr, которые включают значение переменной "javascript".
//  Проверить ввод только текстовых значений. 
// Использоватьметод forEach. 
// Входные: ["I love javascript", "coding", "javascript is fun", "python"] → Результат: ["I love javascript", "javascript is fun"] 
// Входные: ["javascript", "java", "typescript"] → Результат: ["javascript"]

let n = prompt('Введите количество элементов массива');
let arr = [];
const stat = "javascript";
let result_arr = []

for (let i = 0; i < n; i++) {
    arr.push(prompt('Введите элементы массива'));
}

arr.forEach(function(el) {
    if (isNaN(el)) {
        if (el.includes(stat)) {
            result_arr.push(el);
        }
    }
})
console.log(result_arr);