// Создайте функцию, которая принимает объект и имя свойства. Используйте hasOwnProperty, чтобы проверить, существует ли данное свойство в объекте, и вернуть соответствующее сообщение.

const studentsCard = { Анна: 95, Иван: 88, Мария: 92 }

const check = (obj, str) => {
    const result = obj.hasOwnProperty(str)
    return result
}

console.log(check(studentsCard, prompt()));