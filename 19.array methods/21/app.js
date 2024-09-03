// 21. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры. Используя метод reduce, найти максимальное число в массиве. Входные: [3, 7, 2, 5] → Результат: 7 Входные: [1, 9, 8, 3] → Результат: 9 Входные: [4, 4, 4, 4] → Результат: 4


let n = prompt();
let arr = [];


for (let i = 0; i < n; i++) {
    arr.push(+prompt());
}

const reduceMax = arr.reduce(function(result_max, el) {
    if (el > result_max) {
        return result_max = el;
    } else {
        return result_max;
    }
}, -Infinity)
console.log(reduceMax);