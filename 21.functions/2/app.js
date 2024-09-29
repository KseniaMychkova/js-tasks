// 2. Напишите функцию, которая принимает строку состоящую из нескольких слов. Каждое нечетное слово строки функция должна преобразовать в нижний регистр, все четные слова, соответственно, в верхний happy new year -> happy NEW year

// 1 способ

// function doString(a) {
//     let arr = a.split(' ')
//     let b = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             b.push(arr[i].toLowerCase());
//         } else {
//             b.push(arr[i].toUpperCase());
//         }
//     }
//     return b.join(' ');
// }
// let str = prompt('Введите строку из нескольких строк')

// const result = doString(str);
// console.log(result);


//2 способ

const doString = (doNewStr) => {
    let arr = doNewStr.split(' ');
    let newArr = [];
    arr.forEach((el, i) => i % 2 !== 0 ? newArr.push(el.toUpperCase()) : newArr.push(el.toLowerCase()));

    return newArr.join(' ')

}
const result_doString = doString(prompt('Введите строку из 2 и более слов'));
console.log(result_doString);