// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически от 1 до n). Необходимо вывести количество пар ключ значение объекта)

const n = 10
const obj = {}

for (let i = 0; i < n; i++) {
    obj[i] = Math.round(Math.random() * n)
}

console.log(obj);