// Дана таблица c 1 колонкой. Под таблицей сделайте форму (инпут и кнопка), с помощью которой можно будет добавить нового значение в таблицу.

const table = document.querySelector('table')
const input = document.querySelector('input')
const button = document.querySelector('button')
const tr = document.querySelector('tr')

button.addEventListener('click', () => {
    document.createElement(tr.textContent = input.value)
    input.value = ''
})