// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и по нажатию на кнопку формирует массив строк. Необходимо вывести: полный массив из всех элементов, а также массив из уникальных значений

const input = document.querySelector('input')
const button = document.querySelector('button')
const result = document.querySelector('.result')
const uniq = document.querySelector('.uniq')
const arr = []
const arrUniq = []

const isValid = () => {
    if (!isNaN(input.value)) throw new Error('Вы ввели не строку')
}

input.addEventListener('change', () => {
    if (input.value.length <= 0) button.disabled = true
    else button.disabled = false
})

button.addEventListener('click', () => {
    try {
        isValid()
        arr.push(`${input.value}, `)
        result.textContent = arr
        input.value = ''
        arr.forEach((el, i) => {
            if (!arrUniq.includes(el)) arrUniq.push(el)
        })
        uniq.textContent = arrUniq
        input.style = 'border-color: gray'

    } catch (error) {
        result.textContent = error
        input.style = 'border-color: red'
        button.disabled = true
    }
})