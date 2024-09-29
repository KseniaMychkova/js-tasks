// 11. Вычислить сумму последовательности целых чисел до первого встреченного нуля. Гарантируется наличие хотя бы одного нуля в последовательности. Дополнительное условие - убедиться, что все элементы последовательности являются числами. [5, 1, 2, 3, 0, 1, 5, 0, 2] –> 11 (5 + 1 + 2 + 3 = 11)

const doMult = (arr) => {
    try {
        arr.forEach(el => {
            if (isNaN(el)) throw new Error('В массиве присутствуют другие типы данных')
        })
        const check = arr.some((el) => el == 0 ? true : false);
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            if (check == true) {
                if (arr[i] > 0) {
                    sum += arr[i]
                } else if (arr[i] == 0) {
                    break
                }
            }
        }
        return sum

    } catch (error) {
        return error
    }
}
const result = doMult([5, 1, 2, 3, 0, 1, 5, 0, 2]);
console.log(result);