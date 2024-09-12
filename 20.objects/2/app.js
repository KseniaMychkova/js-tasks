// 2. На входе объект.Необходимо вывести все ключи, которые являются числами.
// Входные: →
// Результат: ["1", "2"]
let obj = { "1": "a", "2": "b", "name": "c" };
const result = [];
for (let key in obj) {
    if (!isNaN(key)) {
        result.push(key);
    }
}
console.log(result);