// Создайте функцию, которая принимает объект и строку (имя свойства) и возвращает true, если такое свойство существует в объекте, и false, если нет, используяObject.keys()

const object = { яблоко: 'красное', банан: 'желтый', апельсин: 'оранжевый' }
const testObject = (obj, str) => {
    const check = Object.values(obj)
    const result = check.some(el => {
        if (el === str) return true
    })
    return result
}

console.log(testObject(object, prompt('Введите строку')));