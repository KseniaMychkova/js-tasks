// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и заполняет массив. Необходимо создать массив только из чисел. 

const arr_7: number [] = []

for( let i:number = 0; i < 5; i++) {
    let elem:string = prompt('Введите значения')
    if(!isNaN(+elem)){
        arr_7.push(+elem)
    }
}

console.log(arr_7);
