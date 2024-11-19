// Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не делятся на 2.

const arr_5: number[] = [1, 3, 9, 12, 8]
let resultArr_5:number[] = []

for(let i:number = 0; i < arr_5.length; i++) {
    if(arr_5[i] % 3 === 0 && arr_5[i] % 2 !== 0)
        resultArr_5.push(arr_5[i])
}

console.log(resultArr_5);
