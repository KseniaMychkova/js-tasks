// Реализуйте функцию, которая принимает начальное значение и шаг. Функция должна возвращать другую функцию, которая при каждом вызове увеличивает текущее значение на шаг и возвращает его.

// const sequence = createSequence(10, 2);
// console.log(sequence());  // 12
// console.log(sequence());  // 14
// console.log(sequence());  // 16

function createSequence(num, step) {
    let result = num
    return function() {
        return result += step
    }
}

const sequence = createSequence(10, 2);
console.log(sequence()); // 12
console.log(sequence()); // 14
console.log(sequence()); // 16