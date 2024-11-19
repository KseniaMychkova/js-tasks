// Создайте массив объектов, представляющих книги, и найдите книгу с самым большим количеством страниц (count – одно из полей объекта)


interface Book_20{
    id: number,
    name: string,
    price: number,
    count: number
}
const obj_book_20: Book_20[] = [
    {id: 1, name: 'Горе от ума', price: 45, count: 200}, 
    {id: 2, name: 'Три товарища', price: 55, count: 250},
    {id: 3, name: 'Машины-помощники', price: 30, count: 300},
    {id: 4, name: 'Титан', price: 90, count: 301},
]

let result_20: string = ''
let test_count: number = 0

obj_book_20.forEach((el: Book_20) => {
    if(el.count > test_count) {
        test_count = el.count
        result_20 = el.name
    }
})

console.log(result_20);
