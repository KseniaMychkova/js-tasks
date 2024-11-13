// 6.  У тебя есть кнопка и абзац. Когда пользователь нажимает на кнопку, текст в абзаце должен меняться на «Текст изменён!».

const p = document.querySelector('p')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    p.textContent = 'Текст изменён!'
})