// 4. Создайтепеременнуюстроки.Напишитепрограмму,которая определяет, содержитли строкахотя быоднуцифру.Еслида, выведите"Строкасодержитцифры",иначе"Строка несодержитцифр". Входные: str = "Hello123" → Результат: "Строка содержит цифры" Входные: str = "Hello" → Результат: "Строка не содержит цифр"
const str = prompt('Введите строку');
let result = false;
for (let i = 0; i < 9; i++) {
    if (str.includes(String(i))) {
        result = true;
        break;
    }
    else {
        result = false;
    }
}
if (result === true)
    console.log('Строка содержит цифры');
else
    console.log('Строка не содержит цифр');
