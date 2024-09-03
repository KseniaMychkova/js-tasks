// 19. На входе n– количество элементов массива, затем пользователь заполняет массив с клавиатуры. Используяметодreduce, посчитатьколичествочисел в массиве. Входные: [1, 'a', 3, 'b', 5] → Результат: 3 Входные: ['apple', 'banana', 'cherry'] → Результат: 0


let n = prompt();
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt());
}

const result_reduce = arr.reduce(function(count, el) {
    if (!isNaN(el)) {
        return count + 1;
    } else {
        return count + 0;
    }
}, 0)
console.log(result_reduce);