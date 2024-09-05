// 11. На входе пустой объект. Необходимо ввести с клавиатуры два числа, затем добавить в объект ключ avg со значением среднего арифметического введенных чисел.

const obj = {};
let num1 = +prompt();
let num2 = +prompt();
let result = (num1 + num2) / 2;

obj.avg = result;

console.log(obj);