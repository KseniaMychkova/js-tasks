// 13. На входе массив чисел. Необходимо сформировать объект, где ключ– это элемент массива, а значение–true илиfalse. Если числочетное, то значениебудет true, если нечетное– false. 
// Входные: [1, 2, 3, 4, 5] → Результат: {1: false, 2: true, 3: false, 4: true, 5: false} 
// Входные: [10, 15, 22, 33] → Результат: {10: true, 15: false, 22: true, 33: false}


const arr = [1, 2, 3, 4, 5];
const obj = {};

const result = arr.filter(function(el, arr, i) {
    if (el % 2 === 0) {
        return obj[el] = true;
    } else {
        return obj[el] = false;
    }
}, 0);
console.log(obj);