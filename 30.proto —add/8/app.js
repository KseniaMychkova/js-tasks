// 8.  У тебя есть кнопка и место для отображения счётчика в параграфе. При каждом клике на кнопку число в счётчике должно увеличиваться на 1.

const button = document.querySelector('button')
const result = document.querySelector('.result')

button.addEventListener('click', () => {
    result.textContent = +result.textContent + 1
})