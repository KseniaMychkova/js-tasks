const cold = document.querySelector('.cold')
const hot = document.querySelector('.hot')
const divMenu = document.querySelector('.menu_')

const menu = [{
    title: 'tea',
    category: 'hot'
}, {
    title: 'coffee',
    category: 'hot'
}, {
    title: 'ice creame',
    category: 'cold'
}]

hot.addEventListener('click', () => {
    const result = menu.filter(el => el.category === 'hot', true)
    divMenu.innerHTML = `<p>${result[0].title}</p> <p>${result[1].title}</p>`

})

cold.addEventListener('click', () => {
    const result = menu.filter(el => el.category === 'cold', true)
    divMenu.innerHTML = `<p>${result[0].title}</p>`

})