// 10. У тебя есть кнопка и абзац текста. Когда пользователь нажимает на кнопку, текст должен скрываться. Если нажать на кнопку ещё раз, текст снова должен отображаться.

const button = document.querySelector('button')
const p = document.querySelector('p')
let count = 0

button.addEventListener('click', () => {
    if (count % 2 !== 0) p.style = 'display: none'
    else p.style = 'display: block'
    count++
})