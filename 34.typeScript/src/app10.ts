// Напишите программу, которая находит наибольший общий делитель (НОД) двух чисел num1 и num2. 
// Входные: num1=15, num2=25→Результат:"НОД:5" 
// Входные: num1=14, num2=28→Результат:"НОД:14"

const num1_10: number = 15;
const num2_10: number = 25;
let more:number = 0
let less:number = 0
let result_10: number = 0

if(num1_10 === num2_10){
    console.log(`НОД ${num1_10}`)

}
else if (num1_10 > num2_10){
    more = num1_10;
    less = num2_10
}
else{
    more = num2_10;
    less = num1_10
}


if (more % less === 0) {
        console.log(`НОД ${less}`)
    }
    else {
        for (let i = 0; i < more; i++) {
            if (more % i === 0 && less % i === 0) {
                result_10 = i
            }
            console.log(`НОД ${result_10}`);
        }
    }


