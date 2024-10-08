// У вас есть кнопка. После нажатия поменять background.

const tag = document.querySelector('button')

tag.addEventListener('click', () => {
    tag.style = 'background-color: red'
})