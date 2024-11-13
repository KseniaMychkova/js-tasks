// 6. Создайте родительский класс Number, который будет хранить статичное число.Затем создайте
// дочерний класс SquareRootCalculator, который будет содержать метод calculateSquareRoot(),
//     вычисляющий квадратный корень этого числа без использования встроенной функции Math.sqrt().
// Входные: new SquareRootCalculator(16)→ Результат: 4
// Входные: new SquareRootCalculator(25)→ Результат: 5
// Входные: new SquareRootCalculator(1)→ Результат: 1

class Number {
    num = 16
}

class SquareRootCalculator extends Number {
    calculateSquareRoot() {
        for (let i = 0; i < this.num; i++) {
            if (i ** 2 === this.num) return i
        }
    }
}

const squareRootCalculator = new SquareRootCalculator()
console.log(squareRootCalculator.calculateSquareRoot());