// По двойному клику на кнопку изменить цвет кнопки

const button = document.querySelector('button')

button.addEventListener('dblclick', () => {
    button.style = 'background-color: red'
})