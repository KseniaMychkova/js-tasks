// Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку необходимо получить значение из инпута. Проверить, что это число > 0. Если проверка true, то вывести в Результат ряд Фибоначчи.


const tag = document.querySelector('button')
const tagInput = document.querySelector('input')
const tagP = document.querySelector('.res')

tag.addEventListener('click', () => {
    const fibonachchiRow = [0, 1]
    try {
        if (tagInput.value < 0) throw new Error('Вы ввели отрицательное значение')
        else {
            for (let i = 2; i < tagInput.value; i++) {
                fibonachchiRow.push(fibonachchiRow[i - 2] + fibonachchiRow[i - 1])
            }
        }
        tagP.textContent = `Рузультат: ${fibonachchiRow}`
        console.log(tagP.textContent);

    } catch (error) {
        console.log(error);

    }
})