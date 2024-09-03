// Преобразуйте первую букву каждого слова в строке в верхний регистр используя цикл
// for.
// Входные: "hello world"→
// Результат: "Hello World"
// Входные: "javascript language"→
// Результат: "Javascript Language“

const str = prompt().split(' ');
const strSecondWord = str.indexOf(' ') + 1;
const strUpper = str[strSecondWord].toUpperCase();
let add = '';


for (let i = 0; i < str.length; i++) {
    add += `${str[i][0].toUpperCase()}${str[i].slice(1)} `
}
console.log(add);