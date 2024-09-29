// 7. На вход подается строка. Необходимо удалить все гласные из строки. Добавить проверки на ввод строки (ввод должен быть строкой). "hello"-> "hll", "world"-> "wrld"

let letter = 'eyuioaQEYUIOA';
let str = prompt('Введите строку')

const doNewStr = (strTransform, test) => {
    let newStr = ''
    if (typeof strTransform !== 'string') throw new Error('Вы ввели не строку');
    for (let i = 0; i < strTransform.length; i++) {
        if (test.includes(strTransform[i])) {
            continue
        } else {
            newStr += strTransform[i]
        }
    }
    return newStr
}

const result = doNewStr(str, letter);
console.log(result);