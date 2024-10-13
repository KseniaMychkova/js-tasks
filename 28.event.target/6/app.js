// Создайте форму для регистрации с полями ввода имени, email и пароля. Реализуйте валидацию полей и отображение сообщений об ошибках при некорректном вводе.

const name_ = document.querySelector('.name')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const button = document.querySelector('button')

const isValid = () => {
    if (!isNaN(name_.value.trim())) throw new Error('вы ввели не имя')
    if (!email.value.trim().includes('@') && (!email.value.includes('.ru') || !email.value.includes('.com') || !email.value.includes('.by'))) throw new Error('Введите корректный адрес')
    if (!/^[A-Za-z0-9\!\$\&\*\^%]{9,}$/gm.test(password.value.trim())) throw new Error('Введите пароль, подходящий под требования')
}



button.addEventListener('click', () => {
    try {
        isValid()
        console.log('success');

    } catch (error) {
        console.log(error);

    }
})