// Создайте массив из чисел и строк и удалите из него все повторяющиеся элементы, оставив только уникальные значения.

const arr_9: Array <number | string> = ['hschool', 'hanna', 3, 'hschool', 3];
let new_arr_9: Array<number | string> = []

for (let i:number = 0; i < arr_9.length; i++) {
    if(!new_arr_9.includes(arr_9[i])) new_arr_9.push(arr_9[i])
}
console.log(new_arr_9);
