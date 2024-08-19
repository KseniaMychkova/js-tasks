// Проверка слова на палиндром. 
// Если слово читается одинаково с обеих сторон, выведите true, иначе false. 
// Входные: "мем"→ Результат: true 
// Входные: "тест" → Результат: false

let word = prompt();

let wordArr = word.split('');
let wordArrRev = wordArr.reverse();

if (word === wordArrRev.join('')) {
    console.log(true);
} else {
    console.log(false);
}