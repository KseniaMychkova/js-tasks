// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить проверку, что поле не пустое

const tagButton = document.querySelector('button')
const tagInput = document.querySelector('input')
const tagP = document.querySelector('.result')

tagButton.addEventListener('click', () => {
    try {
        if (!tagInput.value) throw new Error('Вы ничего не ввели')
        tagP.textContent += `${tagInput.value}, `
        console.log(tagP.textContent);
        tagInput.value = ''

    } catch (error) {
        console.log(error);

    }
})