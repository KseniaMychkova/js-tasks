// Создайте два “symbol” с одинаковым описанием и сравните их. 
// Выведите результат сравнения в консоль.

let a = Symbol('level');
let b = Symbol('level');

if (a === b) {
    console.log('равны');
} else {
    console.log('не равны');
}