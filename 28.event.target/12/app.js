// Задача: Создание простого слайдера. 
// Условия:
// Нужно создать слайдер с изображениями, который будет переключаться с помощью стрелок «влево» и «вправо».
// Изображения будут сменяться плавно без анимаций.
// Количество изображений не фиксировано, слайдер должен работать с любым количеством.
// Можно перемещаться к следующему или предыдущему изображению с помощью кнопок.

const left = document.querySelector('#prevButton')
const right = document.querySelector('#nextButton')
    // const container = document.querySelectorAll('#sliderContainer img')
const image = document.querySelector('#sliderContainer img')
let curentImageIndex = 0


// 2 вариант 

const data = [{
    index: 0,
    path: './a.jpg',
}, {
    index: 0,
    path: './b.jpg',
}, {
    index: 0,
    path: './c.jpg',
}]

right.addEventListener('click', () => {
    if (curentImageIndex >= data.length - 1) curentImageIndex = 0
    else curentImageIndex++

        image.src = data[curentImageIndex].path
})

left.addEventListener('click', () => {
    if (curentImageIndex <= 0) curentImageIndex = data.length - 1
    else curentImageIndex--

        image.src = data[curentImageIndex].path
})

// 1 вариант

// right.addEventListener('click', () => {
//     if (curentImageIndex >= container.length - 1) {
//         curentImageIndex = 0
//     } else {
//         curentImageIndex++
//     }
//     container.forEach((el, i) => {
//         el.style = 'display:none'
//         if (i === curentImageIndex) el.style = 'display:block; width: 300px'
//     })
// })

// left.addEventListener('click', () => {
//     if (curentImageIndex <= 0) {
//         curentImageIndex = container.length - 1;
//     } else {
//         curentImageIndex--
//     }
//     container.forEach((el, i) => {
//         el.style = 'display:none'
//         if (i === curentImageIndex) el.style = 'display:block; width: 300px'
//     })

// })