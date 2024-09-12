// 10. На входе объект с ключами name, age, birthday, значения которых– пустые строки.Необходимо
// считать данные с клавиатуры и заполнить объект соответствующими данными, добавив проверки
// на ввод
const obj = {
    'name': '',
    'age': '',
    'birthday': ''
};
let arr = [];

for (let key in obj) {
    if (key == 'name') {
        obj.name = prompt('Введите имя');
        if (typeof obj.name === 'string') {
            arr.push(obj.name)
        }
    } else if (key == 'age') {
        obj.age = +prompt('Введите возраст');
        if (typeof obj.age === 'number') {
            arr.push(obj.age)
        }
    } else if (key == 'birthday') {
        obj.birthday = prompt('Введите дату рождения');
        if (typeof obj.birthday === 'string') {
            arr.push(obj.birthday)
        }
    }
}
console.log(arr);