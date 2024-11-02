// Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина столбов одинаковая. По условию задачи даны 3 инпута и кнопка. По клику на кнопку вызывается функция, принимающая три параметра: количество столбов (≥ 2); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50 сантиметров). Рассчитайте расстояние между первым и последним столбом в сантиметрах

const count = document.querySelector('#first')
const distance = document.querySelector('#second')
const width = document.querySelector('#third')
const button = document.querySelector('button')
const result = document.querySelector('.result')

button.addEventListener('click', () => {
    result.textContent = +width.value * +count.value + (count.value - 1) * +distance.value
})