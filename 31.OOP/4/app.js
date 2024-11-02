// 4. Реализуйте класс MathСalculation. В него передается число n – количество элементов массива. На основании числа формируется динамический массив из n элементов внутри класса. Создать функцию для подсчета всех четных чисел массива. Добавить проверки на ввод

class MathСalculation {
    n;
    arr = []
    constructor(n) {
        this.n = n;
    }
    generateArray = () => {
        for (let i = 0; i < this.n; i++) {
            this.arr.push(Math.round(Math.random() * 10))
        }
        return this.arr;

    }

    generateSum = () => {
        let result = 0
        this.arr.forEach(el => {
            if (el % 2 === 0) result++
        })
        return result
    }

}

const mathСalculation = new MathСalculation(6)
console.log(mathСalculation.generateArray());
console.log(mathСalculation.generateSum());