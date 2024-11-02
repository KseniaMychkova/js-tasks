// 9. У тебя есть кнопка и пустой список. Каждый раз, когда пользователь нажимает на кнопку, в список должен добавляться новый элемент с текстом «Новый элемент».

const button = document.querySelector('button')
const ul = document.querySelector('ul')


button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = 'Новый элемент'
    ul.appendChild(li)
})