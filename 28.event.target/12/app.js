// Задача: Создание простого слайдера. 
// Условия:
// Нужно создать слайдер с изображениями, который будет переключаться с помощью стрелок «влево» и «вправо».
// Изображения будут сменяться плавно без анимаций.
// Количество изображений не фиксировано, слайдер должен работать с любым количеством.
// Можно перемещаться к следующему или предыдущему изображению с помощью кнопок.

const left = document.querySelector('#prevButton')
const right = document.querySelector('#nextButton')
const container = document.querySelectorAll('#sliderContainer img')
let curentImageIndex = 0

right.addEventListener('click', () => {
    // if (curentImageIndex >= container.length - 1) return;
    curentImageIndex++
    container.forEach((el, i) => {
        el.style = 'display:none'
        if (i === curentImageIndex) el.style = 'display:block; width: 300px'
    })
    if (curentImageIndex === container.length - 1)
        curentImageIndex = -1
})

left.addEventListener('click', () => {
    // if (curentImageIndex <= 0) return;
    curentImageIndex--
    container.forEach((el, i) => {
        el.style = 'display:none'
        if (i === curentImageIndex) el.style = 'display:block; width: 300px'
    })
    if (curentImageIndex < container.length - 2)
        curentImageIndex = container.length
})