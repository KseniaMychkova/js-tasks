// Создайте массив строк и выведите на экран все элементы, которые содержат букву 'a'.
const arrStr = ['aaa', 'gfgfh', 'bbba', "ccc"];
let newArr = [];
for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i].includes('a'))
        newArr.push(arrStr[i]);
}
console.log(newArr);
