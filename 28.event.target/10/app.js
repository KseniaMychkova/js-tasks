// Вы вводите строку. Проверить является ли это слово палиндром. Добавить проверки

const input = document.querySelector('input')
const button = document.querySelector('button')
const p = document.querySelector('.result')


button.addEventListener('click', () => {
    try {
        if (!isNaN(input.value)) throw new Error("Вы ввели число");
        if (!input.value) throw new Error("Вы ничего не ввели");

        const changeInput = input.value.split('').reverse().join('')

        input.value === changeInput ? p.textContent = `${input.value} - это палиндром` : p.textContent = `${input.value} - это не палиндром`

    } catch (error) {
        console.log(error);

    }
})