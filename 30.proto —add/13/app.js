const button = document.querySelectorAll('button')
const first = document.querySelector('.btn1')
const second = document.querySelector('.btn2')
const third = document.querySelector('.btn3')
const content = document.querySelector('.content')
const text = document.querySelector('.text')
const price = document.querySelector('.price')
let count = false
const arr = [{
        title: 'Coffee',
        price: '$4.00',
    },
    {
        title: 'Capuchino',
        price: '$4.50',
    },
    {
        title: 'Americano',
        price: '$3.00',
    }
]

button.forEach(el => {
    el.addEventListener('click', () => {
            c9) text.textContent = res[0].title price.textContent = res[0].price
        if (count === false) {
            content.style = "display: block"
            count = true
        } else {
            content.style = "display: none"
            count = false
        }
    })
})