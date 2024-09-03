// На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры.Используяметодreduce, найтип роизведение всехчиселвмассиве.
// Входные: [2, 3, 4]→ Результат: 24
// Входные: [1, 5, 10]→ Результат: 50


let n = prompt();
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt());
}

const result_reduce = arr.reduce(function(mult, el) {
    return mult *= el
}, 1)
console.log(result_reduce);