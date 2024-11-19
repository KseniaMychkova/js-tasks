// На входе динамичный массивчисел. Используя map выведите массив строк четности и нечетности, в соответствии со значением числа: [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]


const arr_13: Array<number> = []

for(let i:number = 0; i < 6; i++) {
    arr_13.push(+prompt())
}

let result_13: string [] = arr_13.map((el: number) => {
    if(el % 2 === 0) {
       return 'Чет'
    }
    else {
return 'Нечет'
    }
})

console.log(result_13);


