// На вход подается строка, содержащая несколько предложений. 
// Напишите программу, которая подсчитывает количество предложений в строке. 
// Входные: "Hello. How are you? I'm fine!" → Результат: 3 
// Входные: "This is one sentence." → Результат: 1 
// Входные: "What's your name?MynameisJohn."→Результат:2

const str = prompt();
const sentenceCount = str.split('.').length - 1 + str.split('?').length - 1 + str.split('!').length - 1;


console.log(sentenceCount);