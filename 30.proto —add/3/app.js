// 3. У тебя есть массив строк words, и тебе нужно создать новый массив uppercaseWords, в котором все строки будут записаны в верхнем регистре.

const arr = ['gfgfg', 'gggh', 'gggggg', 'eeee']

const uppercaseWords = arr.map(el => {
    return el = el.toUpperCase()
})
console.log(uppercaseWords);