// Вставьте двоеточие между двумя нечётными числами в числе.
//  Метод: Работа с числом как с массивом,использование цикла for.
//  Входные: 55639217 → Результат: "5:563:921:7"
//  Входные: 123456 → Результат: "1:23:456"
//  Входные: 113355 → Результат: "1:1:3:3:5:5“

const num = '55639217';
let numArr = num.split('');
let arrayNew = []

for (let i = 0; i < numArr.length; i++) {
    numArr[i] % 2 !== 0 && numArr[i + 1] % 2 !== 0 ? arrayNew.push(`${numArr[i]}:`) : arrayNew.push(numArr[i]);

}

console.log(arrayNew.join(''));