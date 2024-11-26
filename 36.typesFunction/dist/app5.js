// У вас есть массив объектов вида приведенного в приложении. Необходимо вывести товар с максимальным прайсом
const arr_5 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
// const maxPrice = (): Products_5 => {
//     let res_5: number = 0
//     let prod: Products_5 = {}
//     arr_5.forEach((el: Products_5) => {
//         if (el.price > res_5) {
//             res_5 = el.price
//             prod = el
//         }
//     })
//     return prod
// }
// console.log(maxPrice());
const maxPrice = () => {
    let res_5 = 0;
    let prod = {};
    arr_5.forEach((el) => {
        if (el.count * el.price > res_5) {
            res_5 = el.count * el.price;
            prod = el;
        }
    });
    return prod;
};
console.log(maxPrice());
