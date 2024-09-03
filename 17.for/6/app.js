// На входе массив [1, 'hi', 2, 'hello', 3]. 
// Переберите все элементы массива циклом for. Каждый элемент
// проверить на isNaN
// Входные: [1, 'hi', 2, 'hello', 3] → Результат:
// Число 1
// Строка hi
// Число 2
// Строка hello
// Число 3

const arr = [1, 'hi', 2, 'hello', 3];

for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        console.log(`Число ${arr[i]}`);
    } else if (isNaN(arr[i])) {
        console.log(`Строка ${arr[i]}`);

    }
}