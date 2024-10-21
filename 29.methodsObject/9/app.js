// Создайтефункцию,котораяпринимаетдваобъекта.ИспользуйтеhasOwnProperty, чтобыобъединитьтолькотесвойства,которыесуществуютвобоихобъектах.

const objectFirst = { яблоко: 'красное', банан: 'желтый', апельсин: 'оранжевый', киви: 'зеленое', манго: 'желтое' }
const objectSecond = { банан: 'желтый', апельсин: 'оранжевый', манго: 'желтое', арбуз: 'желтый' }

const arrResult = []

const result = (first, second) => {
    const arrfirst = Object.entries(first)
    arrfirst.forEach((el) => {
        if (second[el[0]] && second[el[0]] === el[1])
            arrResult.push(el)
    })
    return arrResult
}

console.log(result(objectFirst, objectSecond));