// Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.


const arr: number [] = [1, 2, 3, 4, 5, 6, 7, 8]
let sum: number = 0;

arr.forEach((el:number) => {
    if(el % 2 === 0) sum += el
})

console.log(sum);
