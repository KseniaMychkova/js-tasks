// На странице расположен маркированный список. Пользователь кликает на каждый item списка. Необъодимо отловить на какой из элементов нажал пользователь и отобразить

const ul = document.querySelector('ul')
const p = document.querySelector('.result')

ul.addEventListener('click', (event) => {
    p.textContent = event.target.textContent

})