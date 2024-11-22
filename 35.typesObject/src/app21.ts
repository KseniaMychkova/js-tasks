// Напишите программу, которая находит и выводит длину наиболее длинного слова в заданной строке.

const str_21: string = 'Напишите программу, которая находит и выводит длину наиболее длинного слова в заданной строке'.replaceAll(',', '')
const str_21_arr: string[] =  str_21.split(' ')

let count_21:number = 0
let result_21:string = ''

for (let i:number = 0; i < str_21_arr.length; i++) {
    if(str_21_arr[i].length > count_21) {
        count_21 = str_21_arr[i].length
        result_21 = str_21_arr[i]
    }
}

console.log(result_21);
