// 2. Напишите функцию, которая принимает строку состоящую из нескольких слов. Каждое нечетное слово строки функция должна преобразовать в нижний регистр, все четные слова, соответственно, в верхний happy new year -> happy NEW year


function doString(a) {
    let arr = a.split(' ')
    let b = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            b.push(arr[i].toLowerCase());
        } else {
            b.push(arr[i].toUpperCase());
        }
    }
    return b.join(' ');
}
let str = prompt('Введите строку из нескольких строк')

const result = doString(str);
console.log(result);