// 5 Создайте класс NumberGenerator с методом generateNumbers(size), который возвращает массив чисел от 1 до size. Наследуйте от него класс EvenNumbers, добавив метод getEvenNumbers(size), который вызывает generateNumbers(size) и фильтрует только четные числа.

// Входные: new EvenNumbers().getEvenNumbers(6) → Результат: [2, 4, 6]
// Входные: new EvenNumbers().getEvenNumbers(10) → Результат: [2, 4, 6, 8, 10]
// Входные: new EvenNumbers().getEvenNumbers(3) → Результат: [2]


// class NumberGenerator {
//     size = 8
//     arr = []
//     generateNumbers = () => {
//         for (let i = 0; i < this.size; i++) {
//             this.arr.push(i)
//         }
//         return this.arr
//     }
// }

// class EvenNumbers extends NumberGenerator {
//     getEvenNumbers = () => {
//         const result = this.generateNumbers().filter(el => el % 2 === 0 && el !== 0)
//         return result
//     }
// }

// const evenNumbers = new EvenNumbers()
// console.log(evenNumbers.getEvenNumbers());