// Создайте несколько элементов (например, кнопок) на странице. При клике на элемент, используйте event.target для определения на какой из элементов производилось действие и измените цвет.

const div = document.querySelector('div')

div.addEventListener('click', (event) => {
    if (event.target.textContent === 'Желтый') event.target.style = 'background-color: yellow'
    if (event.target.textContent === 'Красный') event.target.style = 'background-color: red'
    if (event.target.textContent === 'Зеленый') event.target.style = 'background-color: green'
})