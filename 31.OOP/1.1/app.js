// 1. у вас есть в классе 2 числа. ваша задача написать 4 метода для работы с этими чсислами: сложение, выч, умн, дел

class WorkWithNumber {
    num1 = 18
    num2 = 3

    resultSum = (num1, num2) => {
        console.log(this.num1 + this.num2);
    }
    resultSubtract = (num1, num2) => {
        console.log(this.num1 - this.num2);
    }
    resultMult = (num1, num2) => {
        console.log(this.num1 * this.num2);
    }
    resultDivision = (num1, num2) => {
        console.log(this.num1 / this.num2);
    }

}

const workWithNumber = new WorkWithNumber()

workWithNumber.resultSum()
workWithNumber.resultSubtract()
workWithNumber.resultMult()
workWithNumber.resultDivision()