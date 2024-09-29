// 6. Реализуйте функцию, которая принимает массив чисел и возвращает индекс наибольшего числа. Если таких чисел несколько, вернуть индекс первого найденного. Добавить проверки наввод [1, 3, 7, 7, 5]-> 2

function indexOfMax(arr) {
    try {
        let max = -Infinity
        let indexMax = 0
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i])) throw new Error('в массиве присутсвует не число')

            if (max < arr[i]) {
                max = arr[i]
                indexMax = i
            }
        }
        return indexMax
    } catch (error) {
        return error
    }
}
const result = indexOfMax([1, 3, 7, 7, 5, 'jj'])
console.log(result);