// 9. Данычисла 4,-2,5,19,-130,0,10.
// Найдите минимальное и максимальное число. 
// Входные:4,-2,5,19,-130,0,10→Результат: Мин=-130, Макс=19 
// Входные:1,-1,0→Результат: Мин=-1, Макс=1

let a = 4;
let b = -2;
let c = 5;
let d = 19;
let e = -130;
let f = 0;
let g = 10;
let min = Math.min(a, b, c, d, e, f, g);
let max = Math.max(a, b, c, d, e, f, g);

console.log('Мин=', min, ', Макс=', max);

let k = 1;
let l = -1;
let m = 0;
let min2 = Math.min(k, l, m);
let max2 = Math.max(k, l, m);

console.log('Мин=', min2, ', Макс=', max2);