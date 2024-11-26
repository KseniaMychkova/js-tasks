// class Calculator {
//     num_1: number;
//     num_2: number;
//     constructor(num_1: any, num_2: number) {
//         this.num_1 = num_1
//         this.num_2 = num_2
//     }
//     check(): boolean | never {
//         if (isNaN(this.num_1) || isNaN(this.num_2)) throw new Error('Not a number');
//         if (this.num_1 > 0 || this.num_2 > 0) throw new Error('Число меньше 0');
//         if (!this.num_1 || !this.num_2) throw new Error('Ничего не ввели');
//         return true
//     }
//     add() {
//         try {
// this.check()
//             return this.num_1 + this.num_2
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     subtract() {
// this.check()
//         try {
//             return this.num_1 - this.num_2
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     multiply() {
// this.check()
//         try {
//             return this.num_1 * this.num_2
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     divide() {
// this.check()
//         try {
//             return this.num_1 / this.num_2
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }
// const calculator: Value_6 = new Calculator(20, 10)
// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());
class Calculator {
    check(num_1, num_2) {
        if (isNaN(num_1) || isNaN(num_2))
            throw new Error('Not a number');
        if (num_1 < 0 || num_2 < 0)
            throw new Error('Число меньше 0');
        if (!num_1 || !num_2)
            throw new Error('Ничего не ввели');
        return true;
    }
    add(num_1, num_2) {
        try {
            this.check(num_1, num_2);
            return num_1 + num_2;
        }
        catch (error) {
            console.log(error);
        }
    }
    subtract(num_1, num_2) {
        try {
            this.check(num_1, num_2);
            return num_1 - num_2;
        }
        catch (error) {
            console.log(error);
        }
    }
    multiply(num_1, num_2) {
        try {
            this.check(num_1, num_2);
            return num_1 * num_2;
        }
        catch (error) {
            console.log(error);
        }
    }
    divide(num_1, num_2) {
        try {
            this.check(num_1, num_2);
            return num_1 / num_2;
        }
        catch (error) {
            console.log(error);
        }
    }
}
const calculator = new Calculator();
console.log(calculator.add(20, 10));
console.log(calculator.subtract(20, 10));
console.log(calculator.multiply(20, 10));
console.log(calculator.divide(20, 10));
