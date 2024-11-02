// На вход программе подается число в двоичной системе счисления. Необходимо преобразовать его в десятичную систему счисления


const input = document.querySelector('input')
const button = document.querySelector('button')
const result = document.querySelector('.result')

const isValid = () => {
    if (isNaN(input.value.length <= 0)) throw new Error('Вы ничего не ввели')
    if (isNaN(input.value)) throw new Error('Вы ввели не число')
}

button.addEventListener('click', () => {
    isValid()
    let res = 0
    for (let i = 0; i < input.value.length; i++) {
        let step = +input.value.length - 1 - [i]
        res += input.value[i] * 2 ** step
    }
    result.textContent = res

})