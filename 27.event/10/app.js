// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в инпут. После нажатия на заблокировать данное действие запрещается, тем самым выключая возможность редактирования значения инпута

const tagBlock = document.querySelector('.lock')
const tagUnlock = document.querySelector('.unlock')
const tagInput = document.querySelector('input')

tagBlock.addEventListener('click', () => {
    tagInput.disabled = true
})
tagUnlock.addEventListener('click', () => {
    tagInput.disabled = false
})