// 1. Создайте объект calculator с полем result и методами add и subtract, которые принимают в качестве параметров число и изменяют result соответственно. В задаче использовать контекст

const calculator = {
    result: 0,
    add: function(num) {
        return this.result += num;
    },
    subtract: function(num) {
        return this.result -= num;
    }
}

console.log(calculator.add(15));
console.log(calculator.add(10));
console.log(calculator.subtract(35));