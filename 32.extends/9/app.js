// 9. Создайте класс DataGenerator с полем size и методом generateArray(), который возвращает массив чисел от 1 до size. Наследуйте от него класс SquareArray, добавив метод getSquareArray(), который вызывает generateArray() и возвращает массив, где каждый элемент возведен в квадрат.

// Входные: SquareArray(3).getSquareArray() → Результат: [1, 4, 9]
// Входные: SquareArray(5).getSquareArray() → Результат: [1, 4, 9, 16, 25]
// Входные: SquareArray(2).getSquareArray() → Результат: [1, 4]


// class DataGenerator {
//     size = 5
//     arr = []
//     generateArray = () => {
//         for (let i = 0; i < this.size; i++) {
//             this.arr.push(Math.round(Math.random() * this.size))
//         }
//         return this.arr
//     }
// }

// class SquareArray extends DataGenerator {
//     getSquareArray = () => {
//         const result = this.generateArray().map(el => el ** 2)
//         return result
//     }
// }

// const squareArray = new SquareArray()
// console.log(squareArray.getSquareArray());


// class DataGenerator {

//     arr = []
//     generateArray = (size) => {
//         for (let i = 0; i < size; i++) {
//             this.arr.push(Math.round(Math.random() * size))
//         }
//         return this.arr
//     }
// }

// class SquareArray extends DataGenerator {
//     getSquareArray = (size) => {
//         const result = this.generateArray(size).map(el => el ** 2)
//         return result
//     }
// }

// const squareArray = new SquareArray()
// console.log(squareArray.getSquareArray(5));

class DataGenerator {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    generateArray = (size) => {
        return this.arr.slice(0, size)

    }
}

class SquareArray extends DataGenerator {
    getSquareArray = (size) => {
        const result = this.generateArray(size).map(el => el ** 2)
        return result
    }
}

const squareArray = new SquareArray()
console.log(squareArray.getSquareArray(8));