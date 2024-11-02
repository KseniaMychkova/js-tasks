// По условию задачи даны инпути кнопка. Напишите функцию, которая преобразует любое предложение инпутав предложение VAPORWAVE. предложение VAPORWAVE преобразует все буквы в верхний регистр и добавляет 2 пробела между каждой буквой (или специальным символом) Why isn't my code working?– W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?

const input = document.querySelector('input')
const button = document.querySelector('button')
const result = document.querySelector('.result')

const isValid = () => {
    if (input.value.length <= 0) throw new Error('Вы ничего не ввели')
}

button.addEventListener('click', () => {
    try {
        isValid()
        let newStr = ''
        for (let i = 0; i < input.value.length; i++) {
            newStr += input.value[i].toUpperCase()
        }
        newStr = newStr.replaceAll(' ', '')
        result.textContent = newStr.replaceAll('', '  ')

    } catch (error) {
        result.textContent = error
    }
})