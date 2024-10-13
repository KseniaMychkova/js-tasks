// По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за границы кнопки сновка скрывать

const button = document.querySelector('button')
const text = document.querySelector('.text')

button.addEventListener('mouseover', () => {
    text.style = 'display: block'
})
button.addEventListener('mouseout', () => {
    text.style = 'display: none'
})