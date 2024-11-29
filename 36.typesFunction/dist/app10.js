// Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже вернет 5. Использовать каррирование
function f(a) {
    return function (b) {
        return a + b;
    };
}
const result_10 = f(2)(3);
console.log(result_10);
// console.log(f(2)(3));
// console.log(f(2, 3));
