// .На входе объект.Необходимо проверить, пустой ли объект.Если объект пустой, вернуть false, если
// содержит хотя бы одну пару(ключ: значение), вернуть true.
// Входные: {}→
// Результат: false
// Входные: { "a": 1 }→
// Результат: true

const obj = {};

for (let key in obj) {
    if (obj.length === 0) {
        console.log(false);
    } else {
        console.log(true);
    }
}