// У вас есть массив объектов вида приведенного в приложении. Необходимо вывести все товары в обратном порядке


interface Products {
    id: number, title: string, count: number, price: number
}

const arr_2: Products[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },]


const result_2 = (): void=> {
    arr_2.forEach((el: Products) => {
        el.title = el.title.split('').reverse().join('')
    })
    console.log(arr_2)
}
result_2();





