// На входе динамичный массивстрок. Используя forEach создайте новый массив из элементов, каждое значение которого имеет вид !name [“hschool”, “company”] -> [“!hschool”, “!company”]

// let arr_15: string[] = []

// for (let i:number = 0; i < 3; i++) {
//     arr_15.push(prompt())
// }

// let result_15 = arr_15.map((el:string) => {
//     return el = `!${el}`
// })

// console.log(result_15);


let arr_15: string[] = []
let result_15: string[] = []

for (let i:number = 0; i < 3; i++) {
    arr_15.push(prompt())
}

for (let i:number = 0; i < arr_15.length; i++) {
    result_15.push(`!${arr_15[i]}`)
}

console.log(result_15);
