// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить проверку, что поле не пустое. После каждого клика очищать значение input. Если вводимое значение не проходит валидацию, то на месте массива вывести сообщение об ошибке красным цветом

const input = document.querySelector('input')
const button = document.querySelector('button')
const p = document.querySelector('.result')


button.addEventListener('click', () => {
    try {
        if (!input.value) {
            p.textContent = 'Error: вы ничего не ввели'
            p.style = 'color: red'
            throw new Error("Вы ничего не ввели");
        }
        p.textContent += `${input.value}, `
        console.log(p.textContent);
        input.value = ''

    } catch (error) {
        console.log(error);


    }
    if (!input.value) throw new Error("Вы ничего не ввели");

})