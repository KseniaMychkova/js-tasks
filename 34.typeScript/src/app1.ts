// 1. Напишитепрограмму, которая проверяет, делится ли заданное число num на 3 и 5одновременно. Если делится, выведите "Числоделится на 3и5", иначе"Числоне делитсяна3и5". Входные: num=15→Результат:"Числоделится на 3и5" Входные: num=14→Результат:"Числонеделитсяна 3и5"

const num: number = 15
const n1: number = 3
const n2: number = 5

if(num % n1 === 0 && num % n2 === 0) {

 console.log(`Число делится на ${n1} и ${n2}`)}
 else {console.log(`Число не делится на ${n1} и ${n2}`)}
