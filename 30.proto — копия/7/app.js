// 7. У тебя есть кнопка, и при каждом её нажатии цвет фона страницы должен переключаться между белым и голубым.

const button = document.querySelector('button')
const body = document.querySelector('body')
let count = 0

button.addEventListener('click', () => {
    if (count % 2 !== 0) body.style = 'background-color: white'
    else body.style = 'background-color: blue'
    count++
})