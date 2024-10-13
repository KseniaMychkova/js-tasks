// Создайте блок текста с кнопкой "Показать/Скрыть". При клике на кнопку текст должен показываться или скрываться.

const text = document.querySelector('.text')
const button = document.querySelector('button')
const div = document.querySelector('div')
let boolean = true

button.addEventListener('click', () => {
    if (boolean === true) {
        text.style = 'display: none'
        boolean = false
    } else {
        text.style = 'display: block'
        boolean = true
    }
})