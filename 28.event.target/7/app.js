// Создайте форму с выпадающим списком для выбора единицы измерения (например, дюймы, сантиметры, метры). При выборе единицы измерения отображайте соответствующее значение.

const select = document.querySelector('select')
const p = document.querySelector('.text')

select.addEventListener('change', (event) => {
    p.textContent = event.target.value
})