// Напишите цикл for, который выводит числа от 1 до 100. 
// Если число кратно 4, но не кратно 8, 
// пропустите его и перейдите к следующей итерации. 
// Если число кратно 5 и 10 одновременно, остановитецикл полностью.

for (let i = 1; i < 101; i++) {
    if (i % 4 === 0 && i % 8 !== 0) {
        continue;
    } else if (i % 5 === 0 && i % 10 === 0) {
        break;

    }
    console.log(i);

}