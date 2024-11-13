// 11.  У тебя есть кнопка для добавления элемента в список и кнопка для удаления всех элементов из списка. Когда пользователь нажимает на первую кнопку, создается новый элемент списка с текстом «Элемент N» (где N — порядковый номер элемента). При нажатии на вторую кнопку все элементы из списка удаляются.

const buttonAdd = document.querySelector('.add')
const buttonDel = document.querySelector('.del')
const ul = document.querySelector('ul')
let N = 1

buttonAdd.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = `Элемент ${N}`
    ul.appendChild(li)
    N++
})

buttonDel.addEventListener('click', () => {
    ul.innerHTML = ''
})