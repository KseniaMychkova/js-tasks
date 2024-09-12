// 1. Пользователь вводит имя фамилию. Необходимо создать функцию возвращающую строку вида «Привет, {имя} {фамилия}»

function doName(a, b) {
    return `Привет ${firstName} ${secondName}`

}

let firstName = prompt();
let secondName = prompt();

const resultName = doName(firstName, secondName);
console.log(resultName);