// Создайте массив объектов, представляющих книги, и найдите книгу где автор Булгаков (author – одно из полей объекта)

interface Library {
    id: number, author: string, name: string, price: number 
}

const arr_of_obj_18: Library[] = [
    {id: 1, author: 'Грибоедов', name: 'Горе от ума', price: 45}, 
    {id: 2,author: 'Ремарк', name: 'Три товарища', price: 55},
    {id: 3, author: 'Булгаков', name: 'Мастер и маргарита', price: 30},
    {id: 4, author: 'Драйзер', name: 'Титан', price: 90},
]

let name_book: string = ''

for (let i:number = 0; i < arr_of_obj_18.length; i++) {
    if (arr_of_obj_18[i].author === 'Булгаков') name_book = 'Мастер и маргарита'
}

console.log(name_book);
