// Создайте массив объектов, представляющих книги, и найдите книгу где автор Булгаков (author – одно из полей объекта)

interface Library {
    id: number, 
    author: string,
    name: string,
    price: number
}

const arr_of_obj_18 = [
    {id: 1, author: 'Грибоедов', name: 'Горе от ума', price: 45}, 
    {id: 2,author: 'Ремарк', name: 'Три товарища', price: 55},
    {id: 3, author: 'Булгаков', name: 'Мастер и маргарита', price: 30},
    {id: 4, author: 'Драйзер', name: 'Титан', price: 90},
]

let result_18:string = ''

arr_of_obj_18.forEach(el => {
    if(el.author === 'Булгаков') result_18 = el.name
})

console.log(result_18);
