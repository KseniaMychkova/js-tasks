// Выведитекаждыйэлементмассива[1, 2, 2, 3, 4, 4, 3, 4, 5] без повторений.
//  Методы: Используйтециклыfor, for...of.
//  Входные: [1, 2, 2, 3, 4, 4, 3, 4, 5] → Результат: [1, 2, 3, 4, 5]

const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5].sort();
let arrNew = []


for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1])
        arrNew.push(arr[i]);

}
console.log(arrNew);