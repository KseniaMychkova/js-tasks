// Преобразуйте первую букву каждого слова в строке в верхний регистр используя цикл
// for.
// Входные: "hello world"→
// Результат: "Hello World"
// Входные: "javascript language"→
// Результат: "Javascript Language“

const str = prompt();
const strSecondWord = str.indexOf(' ') + 1;
const strUpper = str[strSecondWord].toUpperCase();


for (let i = 0; i < str.length; i++) {
    console.log(`${str[0].toUpperCase()}${str.slice(1, strSecondWord)}${strUpper}${str.slice(strSecondWord + 1)}`);
    break;

}