// 18. Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”. Функция должна преобразовать строку в формат “xxxx-xx-xx”.

const doDate = (changeDate) => changeDate.split('/').reverse().join('-')

doDate('11/09/1990')
console.log(doDate());