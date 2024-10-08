const tag = document.querySelector('button')
const tagInput = document.querySelector('input')

tag.addEventListener('click', () => {
    try {
        if (!tagInput.value) throw new Error('Вы ничего не ввели')
        if (isNaN(tagInput.value)) throw new Error('Вы ввели не числа')
        else console.log(tagInput.value);

    } catch (error) {
        console.log(error);

    }
})