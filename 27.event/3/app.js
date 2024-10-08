const tag = document.querySelector('button')
const tagInput = document.querySelector('input')

tag.addEventListener('click', () => {
    (!tagInput.value) ? console.log('вы ничего не ввели'): console.log(tagInput.value);



})