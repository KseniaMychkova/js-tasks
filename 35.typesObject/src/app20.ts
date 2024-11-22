// Создайте массив объектов, представляющих книги, и найдите книгу с самым большим количеством страниц (count – одно из полей объекта)

interface Book_20 {
    id: number, name: string, price: number, count: number
}

const obj_book_20: Book_20[] = [
    {id: 1, name: 'Горе от ума', price: 45, count: 200}, 
    {id: 2, name: 'Три товарища', price: 55, count: 250},
    {id: 3, name: 'Машины-помощники', price: 30, count: 300},
    {id: 4, name: 'Титан', price: 90, count: 301},
]

let count_20: number = 0
let name_20: string = ''

for (let i:number = 0; i < obj_book_20.length; i++) {
    if(obj_book_20[i].count > count_20) {
        count_20 = obj_book_20[i].count
        name_20 = obj_book_20[i].name
    }
}
console.log(name_20);

