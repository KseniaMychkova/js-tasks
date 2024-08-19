// На вход подается строка, содержащая несколько предложений. 
// Напишите программу, которая подсчитывает количество предложений в строке. 
// Входные: "Hello. How are you? I'm fine!" → Результат: 3 
// Входные: "This is one sentence." → Результат: 1 
// Входные: "What's your name?MynameisJohn."→Результат:2

let str = prompt();
let strArr = str.split('.');
let strArr2 = strArr.split('!');
let strArr3 = strArr2.split('?');

console.log(strArr3.length);