// Напишите цикл for, который выводит числа от 1 до 100. 
// Если число одновременно кратно 7 и 9, прервитевыполнениецикла.

for (let i = 1; i < 101; i++) {
    if (i % 7 === 0 && i % 9 === 0) {
        break;
    }
    console.log(i);

}