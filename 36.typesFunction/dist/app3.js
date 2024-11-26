// У вас есть массив объектов вида приведенного в приложении. Необходимо вывести только те товары из положения, количество которых внутри массива кратно 3
const arr_3 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
const result_3 = () => {
    let arr_result = [];
    arr_3.forEach((el) => {
        if (el.count % 3 === 0)
            arr_result.push(el);
    });
    return arr_result;
};
console.log(result_3());
