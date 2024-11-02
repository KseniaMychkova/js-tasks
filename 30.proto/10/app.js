// Разработчик запушил в главную ветку GitHub js файл с многострочными комментариями (/* */). Предстоящее демо гарантирует демонстрацию экрана с кодом проделанной работы за спринт. Программисту необходимо вырезать все комментарии в коде новым коммитом. Задача: вырезать куски кода комментариев используя регулярные выражения воизбежание публичного стыда.

let js = 'код'
    /*const isValid = () => {
    if (!isNaN(input.value)) throw new Error('Вы ввели не строку')
}
input.addEventListener('change', () => {
    if (input.value.length <= 0) button.disabled = true
    else button.disabled = false
})*/

const cut = (comment) => {
    let changeFile = ''
    changeFile = comment.replaceAll(/\/\*[a-zA-Z0*9 =\(\)\>\<\{\}\[\]\s\!\.\'\"\:а-яА-Я\,]+\*\//gm, '')
    return changeFile
}
console.log(cut(js));