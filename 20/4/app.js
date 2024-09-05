// На входе объект.Необходимо вывести все значения, которые являются четными числами.
// Входные: { "a": 1, "b": 2, "c": 4 }→
// Результат: [2, 4]
const obj = { "a": 1, "b": 2, "c": 4 };
const result = [];
for (let key in obj) {
    if (obj[key] % 2 === 0) {
        result.push(obj[key]);
    }
}
console.log(result);