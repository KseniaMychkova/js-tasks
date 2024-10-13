// Добавьте картинку на страницу. При наведении на картинку мышкой необходимо ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то возвращается первая картинка

const img = document.querySelector('img')

img.addEventListener('mouseover', () => {
    img.src = "./Рисунок2.jpg"
})

img.addEventListener('mouseout', () => {
    img.src = "./Рисунок1.jpg"
})