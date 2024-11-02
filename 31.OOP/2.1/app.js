// найти произведение всех элементов массива.  (без рекурсии)

class Mult {
    arr = [1, 9, 7, 5, 2]
    result_reduce = this.arr.reduce((mult, el) => {
        return mult *= el
    }, 1)
}

const mult = new Mult()
console.log(mult.result_reduce);