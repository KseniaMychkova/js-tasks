// 3. найти произведение всех элементов массива.  (рекурсия)

class MultWithRec {
    mult = (arr) => {
        if (arr.length === 0) return 1
        return arr[0] * this.mult(arr.slice(1))
    }
}

const multWithRec = new MultWithRec()
console.log(multWithRec.mult([1, 9, 7, 5, 2]));