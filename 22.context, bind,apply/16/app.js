// Реализуйте функцию, которая возвращает функцию-генератор случайных чисел от 0 до 1. Однако, генератор должен быть ограничен заданным количеством вызовов. После превышения этого лимита генератор должен возвращать сообщение о том, что лимит исчерпан.

// Пример использования:

// random_gen = limited_random_generator(3)
// console.log(random_gen())  # 0.5487
// console.log(random_gen())  # 0.8765
// console.log(random_gen())  # 0.4321
// console.log(random_gen())  # "Лимит исчерпан"

function gen() {
    let limit = 0
    return function() {

        if (limit < 3) {
            limit++
            let res = '# '
            res += Math.random()
            console.log(res);

        } else {
            console.log('# Лимит исчерпан');

        }
    }
}
const result = gen();
result()
result()
result()
result()
result()