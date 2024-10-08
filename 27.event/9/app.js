// У вас есть кнопка. После каждого нажатия менять background

const tag = document.querySelector('button')
let boolean = true

tag.addEventListener('click', () => {
    if (boolean === true) {
        tag.style = 'background-color: white'
        boolean = false
    } else {
        tag.style = 'background-color: red'
        boolean = true
    }
})