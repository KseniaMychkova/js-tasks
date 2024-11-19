// Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.
const arr_str_8 = ['anna', 'kseniya', 'tim'];
let result_8 = '';
for (let i = 0; i < arr_str_8.length; i++) {
    if (arr_str_8[i] === arr_str_8[i].split('').reverse().join(''))
        result_8 = arr_str_8[i];
}
console.log(result_8);
