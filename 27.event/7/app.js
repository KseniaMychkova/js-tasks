// Записать в результат удвоенное значение инпута. Добавить проверки 


const tag = document.querySelector('button')
const tagInput = document.querySelector('input')
const tagP = document.querySelector('.result')

tag.addEventListener('click', () => {
    try {
        if (isNaN(tagInput.value)) throw new Error('Вы ввели не число')
        tagP.textContent = `Результат: ${tagInput.value * 2}`
        console.log(tagP.textContent);

    } catch (error) {
        console.log(error);

    }
})