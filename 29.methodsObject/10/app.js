// Увас есть объект с информацией опользователе. Извлеките имя ивозраст пользователя с использованиемдеструктуризации.

const user = { id: 1, name_: 'Hanna', age: '24' }

const { name_, age } = user
console.log(name_, age);