// 10. На вход подается массив чисел. Найти количество уникальных элементов в массиве. Добавить проверку наввод (всеэлементы должныбыть числами). [1, 2, 2, 3, 4, 4, 5]-> 5 (уникальные элементы: 1, 2, 3, 4, 5)

const uniq = (arr) => {
    try {
        arr.forEach(el => {
            if (isNaN(el)) throw new Error('В массиве есть другие типы данных')
        })
        let sum = 0
        let newArr = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr[i + 1]) {
                sum++
                newArr.push(arr[i])
            }
        }
        return `${sum} (уникальные элементы: ${newArr})`
    } catch (error) {
        return error
    }
}

const result = uniq([1, 2, 2, 3, 4, 4, 5]);
console.log(result);