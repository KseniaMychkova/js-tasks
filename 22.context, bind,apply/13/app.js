// 13. Напишите функцию, принимающую в качестве параметра статичный объект. Функция возвращает новый объект, где значения– исключительно числа первоначального объекта. IIFE
// Входные данные:
// const input1 = {
//     a: 1,
//     b: "string",
//     c: 2,
//     d: false,
//     e: 3,
//     f: null
// };
// Ожидаемый результат:
// const expected1 = {
//     a: 1,
//     c: 2,
//     e: 3
// };
const input1 = {
    a: 1,
    b: "string",
    c: 2,
    d: false,
    e: 3,
    f: null
};
(function(testObj) {
    let newObj = {}
    for (let key in testObj) {
        if (typeof(testObj[key]) === 'number') {
            newObj[key] = testObj[key];
        } else {
            continue
        }
    }
    console.log(newObj);
}(input1))