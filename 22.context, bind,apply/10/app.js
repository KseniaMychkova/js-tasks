// 10. Напишите IIFE, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы. [1, 1, 2, 2, 2, 3, 4, 5, 5, 5]–> [1, 2, 3, 4, 5].

(function(arr) {
    let newArr = []
    for (let el of arr) {
        !newArr.includes(el) ? newArr.push(el) : null;
    }
    console.log(newArr);
}([1, 1, 2, 2, 2, 3, 4, 5, 5, 5]))