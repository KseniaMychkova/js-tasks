// Напишите программу, которая проверяет, начинается ли строка str с гласной буквы. Гласными считаются: a, e, i, o, u. Выведите результат в консоль. Входные: str = "apple" → Результат: "Строка начинается с гласной" Входные: str = "banana" → Результат: "Строка не начинается с гласной"
const letter = 'aeiou';
const str_11 = 'abanana';
let result_11 = false;
for (let i = 0; i < letter.length; i++) {
    if (str_11[0] == letter[i]) {
        result_11 = true;
        break;
    }
    else {
        result_11 = false;
    }
}
if (result_11 === true)
    console.log('Строка начинается с гласной');
else
    console.log('Строка не начинается с гласной');
