// У вас есть массив объектов вида приведенного в приложении. Необходимо вывести средний прайс среди всех продуктов

interface Products {
    id: number, title: string, count: number, price: number
}

const arr_6: Products[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },]

// const mediumPrice = ():number => {
// let result_6: number = arr_6.reduce((sum:number, el:Products) => {
//     return sum += el.price
// }, 0)
// return result_6 / arr_6.length
// }

// console.log(mediumPrice());

const mediumPrice = ():number => {
    let result_6: number = arr_6.reduce((sum:number, el:Products) => {
        return sum += el.price * el.count
    }, 0)
    return result_6 / arr_6.length
    }
    
    console.log(mediumPrice());
