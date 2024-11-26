// У вас есть массив объектов вида приведенного в приложении. Необходимо вывести итоговую стоимость на складе. Итоговая стоимость = количество * цена + ...
const arr_4 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
const totalPrice = () => {
    let res = 0;
    arr_4.forEach((el) => {
        res += el.count * el.price;
    });
    return res;
};
console.log(totalPrice());
