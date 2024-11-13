// 2. Создайте две переменные и присвойтеимчисловыезначения.Выведитевконсольчисло,которое ближе к 10. Если оба числа находятся на одинаковом расстоянии от 10, выведите "Оба числа равноудаленыот10"


const num1: number = 9;
const num2: number = 11;

if (Math.abs(10 - num1) > Math.abs(10 - num2)) {
    console.log(num2);
}
else if (Math.abs(10 - num1) < Math.abs(10 - num2)) {
    console.log(num1)
}
else if (Math.abs(10 - num1) == Math.abs(10 - num2)){
    console.log('Оба числа равноудалены от 10')
}