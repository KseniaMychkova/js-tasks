// Реализуйте класс Calculator, который будет хранить в себе 4 метода: сумма чисел, разность, произведение, частное. 2 числа передаются в класс, далее вызываеются соответствующие функции. Добавить проверки на ввод

// class Calculator {
//     num1;
//     num2;
//     constructor(n1, n2) {
//         this.num1 = n1
//         this.num2 = n2
//     }
//     sum = () => {
//         return this.num1 + this.num2
//     }
//     difference = () => {
//         return this.num1 - this.num2
//     }
//     mult = () => {
//         return this.num1 * this.num2
//     }
//     division = () => {
//         return this.num1 / this.num2
//     }
// }

// const calculator = new Calculator(4, 7)
// console.log(calculator.sum());
// console.log(calculator.difference());
// console.log(calculator.mult());
// console.log(calculator.division());


// class Calculator {
//     sum = (a, b) => {
//         return a + b
//     }
//     difference = (a, b) => {
//         return a - b
//     }
//     mult = (a, b) => {
//         return a * b
//     }
//     division = (a, b) => {
//         return a / b
//     }
// }

// const calculator = new Calculator()
// console.log(calculator.sum(1, 3));
// console.log(calculator.difference(5, 6));
// console.log(calculator.mult(8, 2));
// console.log(calculator.division(10, 5));


class Calculator {
    num1 = +prompt();
    num2 = +prompt();

    isValid = () => {
        if (!this.num1 || !this.num2) return 'Вы ничего не ввели'
        if (isNaN(this.num1) || isNaN(this.num2)) return 'Вы ввели не число'

    }

    sum = () => {
        const check = this.isValid()
        if (check === undefined) return this.num1 + this.num2
        else { return check }
    }
    difference = () => {
        const check = this.isValid()
        if (check === undefined) return this.num1 - this.num2
        else { return check }
    }
    mult = () => {
        const check = this.isValid()
        if (check === undefined) return this.num1 * this.num2
        else {
            return check
        }
    }
    division = () => {
        const check = this.isValid()
        if (check === undefined) return this.num1 / this.num2
        else {
            return check
        }
    }
}

const calculator = new Calculator()
console.log(calculator.sum());
console.log(calculator.difference());
console.log(calculator.mult());
console.log(calculator.division());