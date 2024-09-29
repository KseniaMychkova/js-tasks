// 14. *Реализуйте функцию, которая принимает массив последовательных (возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки на элементы массива ["a","b","c","d","f"] -> "e" ["O","Q","R","S"] -> "P

const checkLetter = (arr) => {
    try {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'string') {
                continue
            } else {
                throw new Error('В массиве присутствует другой тип данных')
            }
        }
        // arr.forEach(el => {
        //     if (el !== 'string') throw new Error('В массиве присутствует другой тип данных')
        //         if (el.length > 1) throw new Error('В массиве не только буквы')
        // })
    } catch (error) {
        return error
    }
}
const result = checkLetter(['a', 'b', 'c', 'd', 'f']);
console.log(result);