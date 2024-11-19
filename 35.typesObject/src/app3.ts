// На входе динамичный массивчисел. Используя reduce выведите сумму чисел массива

let arr_3: number[] = []

for(let i:number = 0; i < 5; i++){
    arr_3.push(+prompt('Введите число'))
}

let result:number = arr_3.reduce((sum: number, el:number) => {
    return sum += el
}, 0)
 console.log(result);
 


