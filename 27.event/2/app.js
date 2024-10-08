const tag = document.querySelector('button')
const tagInput = document.querySelector('input')

tag.addEventListener('click', (() => {
    tagInput.value = `+375(29)111-11-11`
}))