// По нажатию на кнопку поменять местами значения 2 инпутов.

const tagButton = document.querySelector('button');
const tagFirstInp = document.querySelector('.firstInp')
const tagSecondInp = document.querySelector('.secondInp')
let boolean = true

tagButton.addEventListener('click', () => {
    if (boolean === true) {
        tagFirstInp.value = '???'
        tagSecondInp.value = '!!!'
        boolean = false
    } else {
        tagFirstInp.value = '!!!'
        tagSecondInp.value = '???'
        boolean = true
    }
})