// Создайте динамический массив строк. Используя Some выведите true в случае если хотя бы 1 элемент массива имеет длину > 5 символов.
let arrStr_4 = [];
for (let i = 0; i < 3; i++) {
    arrStr_4.push(prompt('Введите строку'));
}
let resultSome_4 = arrStr_4.some((el) => {
    if (el.length > 5)
        return true;
});
console.log(resultSome_4);
