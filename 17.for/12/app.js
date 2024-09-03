// На входе число n – кол-во случайных элементов. 
// Выведите n случайных целых чисел от 1 до 100, используя Math.random()..

const n = +prompt();

for (let i = 1; i <= n; i++) {
    console.log(Math.random() * 100);

}