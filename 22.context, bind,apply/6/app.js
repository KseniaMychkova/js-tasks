// Напишите функцию, которая принимает массив чисел и находит минимальное и максимальное значения в этом массиве. Добавьте проверки на ввод и выведите сообщение об ошибке, если значения массива не соответствуют условиям задачи.
const arr = [1, 2, 3, 4, 5];

const maxNum = (checkArr) => {
    let maxNum = -Infinity;
    let minNum = Infinity;
    for (let el of checkArr) {
        if (isNaN(el)) {
            console.log('В массиве не только числа');
        } else {
            if (maxNum < el) {
                maxNum = el;
            }
            if (minNum > el) {
                minNum = el;
            }
        }
    }
    return { максимальное: maxNum, минимальное: minNum }

}
const result = maxNum(arr);
console.log(result);