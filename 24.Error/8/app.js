// 8. Реализуйте функцию, которая находит наибольшее общее кратное (НОК) двух чисел. Добавить проверку наввод (вводимые значения должны быть целыми числами). Пример: НОК(6, 8)-> 24
let first = prompt('Введите первое целое число')
let second = prompt('Введите второе целое число')

const multiple = (num1, num2) => {
    try {
        if (Number.isInteger(num1) || Number.isInteger(num2)) throw new Error('Введено не целое число');

    } catch (error) {
        return error
    }
}
const result = multiple(first, second);
console.log(result);