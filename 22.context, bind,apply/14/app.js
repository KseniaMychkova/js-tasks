// 14. Напишите функцию, принимающую в качестве параметра статичный объект. Функция возвращает количество пар ключ /значение. IIFE
const input1 = {
    a: 1,
    b: "string",
    c: 2,
    f: null
};
(function(testObj) {
    let result = 0;
    for (let key in testObj) {
        if (key) {
            result++
        }
    }
    console.log(result);

}(input1))