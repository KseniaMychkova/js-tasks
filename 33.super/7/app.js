// 7. Создайте родительский класс NumberGenerator, который будет генерировать и возвращать
// случайное число с помощью метода generateNumber().Затем создайте дочерний класс
// SquareRootCalculator, который переопределяет метод generateNumber() и находит квадратный
// корень этого числа без использования встроенной функции Math.sqrt().
// Входные: new SquareRootCalculator().generateNumber()(предположим, сгенерированное число 16)→
// Результат: 4
// Входные: new SquareRootCalculator().generateNumber()(предположим, сгенерированное число 25)→
// Результат: 5

class NumberGenerator {
    generateNumber = () => {
        const result = Math.round(Math.random() * 100)
        return result

    }
}

class SquareRootCalculator extends NumberGenerator {
    generateNumber() {
        super.generateNumber()

        return super.result ** 2

    }
}
const squareRootCalculator = new SquareRootCalculator()
console.log(squareRootCalculator.generateNumber());