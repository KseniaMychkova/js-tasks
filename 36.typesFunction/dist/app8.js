// У вас есть массив строковых значений почт. Необходимо вывести значения массива без дубликатов. Добавить проверки на тип данных, почту
const arr_8 = ['k2606676@gmail.com', 'kseniya-checha@', 'k2606676@gmail.com', 'kseniya-checha@yandex.ru'];
function isValid() {
    let new_arr_8 = [];
    arr_8.forEach((el) => {
        if (typeof el === "string") {
            if (/[a-zA-Z0-9\!\#\$\^\&\*\(\)\-\_\=\+]+@+[a-z]+.[a-z]+/gm.test(el)) {
                if (!new_arr_8.includes(el)) {
                    new_arr_8.push(el);
                }
            }
        }
    });
    return new_arr_8;
}
console.log(isValid());
