// Дан массив объектов с полями "название", "цена" и "количество". Найдите суммарную стоимостью всех товаров учитывая количество каждого. Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...
const arrOfProducts = [
    {
        name: 'coffee',
        price: 50,
        count: 5
    },
    {
        name: 'tea',
        price: 20,
        count: 2
    },
    {
        name: 'water',
        price: 5,
        count: 10
    },
];
let result_23 = 0;
for (let i = 0; i < arrOfProducts.length; i++) {
    result_23 += arrOfProducts[i].price * arrOfProducts[i].count;
}
console.log(result_23);
