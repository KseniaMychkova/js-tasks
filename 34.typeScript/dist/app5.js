// Напишите программу, которая проверяет, является ли число num2 квадратом числа num1. 
// Выведитесообщениевконсоль,указывающеерезультатпроверки. 
// Входные: num1=3,num2=9→Результат:"9являетсяквадратом3" 
// Входные: num1=4,num2=20→Результат:"20неявляетсяквадратом4"
const num1_5 = 4;
const num2_5 = 20;
if (num1_5 * num1_5 === num2_5) {
    console.log(`${num2_5} является квадратом ${num1_5}`);
}
else {
    console.log(`${num2_5} не является квадратом ${num1_5}`);
}
