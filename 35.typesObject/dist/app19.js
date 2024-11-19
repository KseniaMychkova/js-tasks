// Создайте массив объектов, представляющих книги, и отобразите книгигде цена каждой > 50 (price – одно из полей объекта)
const obj_book = [
    { id: 1, name: 'Горе от ума', price: 45 },
    { id: 2, name: 'Три товарища', price: 55 },
    { id: 3, name: 'Машины-помощники', price: 30 },
    { id: 4, name: 'Титан', price: 90 },
];
let test_obj = [];
obj_book.forEach((el) => {
    if (el.price > 50) {
        test_obj.push(el);
    }
});
console.log(test_obj);
