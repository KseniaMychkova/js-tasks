// По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и по нажатию на кнопку формирует массив. Необходимо вывести среднее значение этого массива

const button = document.querySelector('button')
const input = document.querySelector('input')
const arrValue = document.querySelector('.arrValue')
const avg = document.querySelector('.avg')
const arr = []
const isValid = () => {
    if (isNaN(input.value)) throw new Error('Вы ввели не число');
    if (input.value < 0) throw new Error('Вы ввели отрицательное число');
    if (input.value.length <= 0) throw new Error('Вы ничего не ввели');



}

button.addEventListener('click', () => {
    try {
        isValid()
        button.style = `background-color: #${Math.round(Math.random() * 100) *10}`
        arr.push(input.value)
        input.value = ''
        arrValue.textContent = arr
        const result = arr.reduce((sum, el) => {
            return sum += +el
        }, 0)
        avg.textContent = result / arr.length
        avg.style = 'color: black'


    } catch (error) {
        avg.textContent = error
        avg.style = 'color: red'
    }
})