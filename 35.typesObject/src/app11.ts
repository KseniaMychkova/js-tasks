// На входе динамичный массивстрок. Используя every выведите true если все элементы массива соответствуют регулярному выражению почты

const arr_str_11: string[] = []

for(let i:number = 0; i < 3; i++) {
    arr_str_11.push(prompt('Введите электронную почту'))
}

let result_11:boolean = arr_str_11.every(el => {
    if (/[a-z][a-zA-Z0-9!#$&*-_=+]+@+[a-z]+.[a-z]+/gm.test(el))
        return true
})

console.log(result_11);
