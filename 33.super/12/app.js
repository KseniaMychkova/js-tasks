// Создайте класс NumberList, который хранит массив чисел. Реализуйте метод findMax() для поиска наибольшего элемента массива. Метод должен использовать алгоритм линейного поиска и возвращать наибольший элемент.

class NumberList {
    arr = [1, 2, 3, 5, 8, 11]
    max = 0
    findMax = () => {
        this.arr.forEach(el => {
            if (this.max < el)
                this.max = el
        })
        return this.max
    }
}
const numberList = new NumberList()
console.log(numberList.findMax());