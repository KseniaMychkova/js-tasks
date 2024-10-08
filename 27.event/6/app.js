// Необходимо отобразить кнопку и инпут со значением по умолчанию. По клику на кнопку заменить значение инпута

const tag = document.querySelector('button')
const tagInput = document.querySelector('input')

tag.addEventListener('click', () => {
    tagInput.value = '!!!'

})