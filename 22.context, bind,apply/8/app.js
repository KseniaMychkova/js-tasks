// 8. Реализуйте функцию, которая будет подсчитывать количество своих вызовов с использованием замыкания. Каждый раз, когда функция вызывается, счетчик увеличивается на1 ивозвращаеттекущее значениесчетчика.

function doNum() {
    let sum = 0;
    return function() {
        sum++;
        console.log(sum);

    }
}
const result = doNum()
result()
result()
result()
result()
result()