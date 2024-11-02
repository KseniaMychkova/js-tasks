// Напишите функцию, принимающую в качестве параметра статичный объект. Функция возвращает новый объект, где значения – исключительно числа первоначального объекта. IIFE

(function(obj) {
    let arr = Object.entries(obj)
    const resultObj = {}
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i][1] === 'number') resultObj[arr[i][0]] = arr[i][1]
    }
    console.log(resultObj);
}({ id: 1, name_: 'Kseniya', age: 34 }))