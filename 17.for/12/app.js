// На входе число n – кол-во случайных элементов. 
// Выведите n случайных целых чисел от 1 до 100, используя Math.random()..

let n = prompt('Введите число');

// for (let i = 0; i <= n; i++) {
//     console.log(Math.round(Math.random() * 100));
// }

// let i = 0
// while (i < n) {
//     i++
//     console.log(Math.round(Math.random() * 100));
// }

let i = 0
do {
    i++
    console.log(Math.round(Math.random() * 100));
}
while (i < n)