// По условию задачи даны 2 инпута и кнопка. Необходимо вернуть true, если часть символов 1 строки есть в другой. 'rkqodlw', 'world‘– true 'kacvtas', 'steak' – false

const first = document.querySelector('#first')
const second = document.querySelector('#second')
const button = document.querySelector('button')
const result = document.querySelector('.result')

const isValid = () => {
    if (first.value.length <= 0 || second.value.length <= 0) throw new Error('Вы ничего не ввели')
    if (!isNaN(first.value.length) || !isNaN(second.value.length)) throw new Error('Вы ввели number')
}
button.addEventListener('click', () => {
    try {
        if (first.value.length > second.value.length) {
            for (let i = 0; i < second.value.length; i++) {
                if (!first.value.includes(second.value[i])) {
                    console.log(false);
                    return
                }
            }
        } else {
            for (let i = 0; i < first.value.length; i++) {
                if (!second.value.includes(first.value[i])) {
                    console.log(false);
                    return
                }
            }
        }
        console.log(true);

    } catch (error) {
        result.textContent = error
    }

})