// 3. На входе объект.Необходимо вывести все значения, которые являются числами
// Входные: { "a": 1, "b": "2", "c": 3 }→
// Результат: [1, 3] 
const obj = { "a": 1, "b": "2", "c": 3 };
const result = [];
for (let key in obj) {
    if (typeof obj[key] === 'number') {
        result.push(obj[key])
    }
}
console.log(result);