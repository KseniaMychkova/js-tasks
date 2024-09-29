// Реализуйте функцию, которая принимает минимальное и максимальное значения, и возвращает функцию, которая проверяет, попадает ли переданное ей число в этот диапазон.

// const isInRange = createRangeChecker(5, 10);
// console.log(isInRange(7));  // true
// console.log(isInRange(4));  // false
// console.log(isInRange(10)); // true

function createRangeChecker(min, max) {
    return function(num) {
        return num > min && num < max ? true : false;
    }
}

const isInRange = createRangeChecker(5, 10);
console.log(isInRange(7)); // true
console.log(isInRange(4)); // false
console.log(isInRange(10)); // true