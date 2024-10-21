// На входе статичный объект и строка str. Написать функцию на поиск в объекте значения str используяObject.values ()

const object = { яблоко: 'красное', банан: 'желтый', апельсин: 'оранжевый' };
const str = prompt();

const found = (obj, str) => {
    const values = Object.values(obj)
    const result = values.some(el => {
        if (el === str) return true
    })
    return result
}

console.log(found(object, str));