// 5. Реализуйте функцию, которая принимает число и возвращает возвенную в квадрат каждую цифру числа соединяя их. Добавить проверки навводчисла 9119-> 811181 (92 === 81, 12=== 1)

function doSqua(num) {
    try {
        if (isNaN(num)) throw new Error('введено не число')
        let str = String(num)
        let newStr = ''
        for (let i = 0; i < str.length; i++) {
            newStr += str[i] ** 2
        }
        return newStr

    } catch (error) {
        return error
    }
}
const result = doSqua(9119)
console.log(result);