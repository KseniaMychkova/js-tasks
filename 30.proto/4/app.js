// По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в CamelCase (примерСтрокиВCamelCase)


const input = document.querySelector('input')
const button = document.querySelector('button')
const result = document.querySelector('.result')



const isValid = () => {
    if (input.value.length <= 0) throw new Error('Вы ничего не ввели')
}

button.addEventListener('click', () => {
    try {
        const inputArr = input.value.split(' ')
        const arr = [inputArr[0]]
        for (let i = 1; i < inputArr.length; i++) {
            arr.push(inputArr[i][0].toUpperCase() + inputArr[i].slice(1).toLowerCase())
        }
        result.textContent = arr.join('')
        input.value = ''

    } catch (error) {
        result.textContent = error
    }
})