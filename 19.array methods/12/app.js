// 12. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.
//  Значения могут быть строкового или числового типа данных. 
// Составить два массива: один из строк, другой —из чисел.
// Использовать метод forEach. 
// Входные: ["apple", 10, "banana", 20, 30, "cherry"] → Результат: ["apple", "banana", "cherry"], [10, 20, 30] 
// Входные: [5, "dog", 7, "cat"] → Результат: ["dog", "cat"], [5, 7] 
// Входные: ["a", "b", "c", 1, 2, 3] → Результат: ["a", "b", "c"], [1, 2, 3]

let n = prompt('Введите количество элементов массива');
let arr = [];
let arrString = [];
let arrNumber = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('Введите элементы массива'));
}

arr.forEach(function(el) {
    isNaN(el) ? arrString.push(el) : arrNumber.push(el);
})
console.log(arrString, arrNumber);