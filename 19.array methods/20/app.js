// 20. На входе n – количество элементов массива, затем пользователь заполняет массив с клавиатуры. Используяметодreduce, объединить все строки в массиве в одну строку,разделенную запятыми. Входные: ["apple", "banana", "cherry"] → Результат: "apple,banana,cherry" Входные: ["red", "green", "blue"] → Результат: "red,green,blue"

let n = prompt();
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt());
}

const result_reduce = arr.reduce(function(union, el, i) {
    if (i == arr.length - 1) {
        return union + el;
    } else {
        return union + el + ',';
    }
}, '')
console.log(result_reduce);