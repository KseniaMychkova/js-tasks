// 9. На вход подается массив чисел. Вернуть массив, в котором все отрицательные числа замененына 0.Добавить проверку наввод (все элементы массива должныбыть числами). [-1, 2,-3, 4]-> [0, 2, 0, 4]
let arr = [-1, 2, -3, 4]

const doNewArr = (arrToChange) => {
    let newArr = []
    arrToChange.forEach(el => {
        if (isNaN(el)) throw new Error('В массиве есть другие типы данных')
    })
    arrToChange.forEach(el => {
        el < 0 ? newArr.push(0) : newArr.push(el)
    })
    return newArr
}

const result = doNewArr(arr);
console.log(result);