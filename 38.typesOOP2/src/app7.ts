// Создайте класс ArrayAnalyzer, который будет содержать массив чисел как поле класса, инициализируемоечерезконструктор.Реализуйтеметоды: • getAverageдлявычислениясреднегозначениямассива, • getMaxдляпоискамаксимальногозначениявмассиве, • getMinдляпоискаминимальногозначениявмассиве.
// Входные: let analyzer = new ArrayAnalyzer([1, 2, 3, 4, 5]); analyzer.getAverage(); → Результат: 3
// Входные: let analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]); analyzer.getMin(); → Результат: 5

interface IArrayAnalyzer {
    arr_of_number: number[];
    getAverage():number;
    getMax():number;
    getMin():number;
}

class ArrayAnalyzer {
    arr_of_number: number[] = []

    constructor(arr_of_number: number[]) {
        this.arr_of_number = arr_of_number
    }
    getAverage() {
        let count: number = 0
        let resultSum = this.arr_of_number.reduce((sum: number, el: number) => {
            count++
            return sum += el
        }, 0)
        return resultSum / count
    }

    getMax() {
        let max:number = 0
        this.arr_of_number.forEach((el:number)=>{
            if(el>max) max = el
        })
        return max
    }
    getMin() {
        let min:number = +Infinity
        this.arr_of_number.forEach((el:number)=>{
            if(el<min) min = el
        })
        return min
    }
}

const arrayAnalyzer:IArrayAnalyzer = new ArrayAnalyzer([1, 2, 3, 4, 5])
console.log(arrayAnalyzer.getAverage());
console.log(arrayAnalyzer.getMax());

const arrayAnalyzer2 = new ArrayAnalyzer([10, 20, 5, 30, 15])
console.log(arrayAnalyzer2.getMin());
