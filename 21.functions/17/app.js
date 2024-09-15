// 17. Написать функцию, принимающую в параметрах строку текста в маленьком регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый элемент массива в чередование регистров toLowerCase, toUpperCase hschool-> HsChOoL


const doReg = () => {
    let str = 'hschool'
    let newArr = [];

    const result_forEach = [...str].forEach((el, i) => {
        i % 2 === 0 ? newArr.push(el.toUpperCase()) : newArr.push(el.toLowerCase());
    })
    return newArr.join('');
}

console.log(doReg());