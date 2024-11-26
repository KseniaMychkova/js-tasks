// У вас есть массив объектов вида приведенного в приложении. Необходимо вывести тот товар, где количество * прайс является наибольшим значением

interface Products_7 {
    id?: number, title?: string, count?: number, price?: number
}

const arr_7: Products_7[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },]

// const MaxProd = ():Products_7 =>{
//     let test:number = 0
//     let prod:Products_7 = {}
//     arr_7.forEach((el:Products_7)=> {
//         if(el.count * el.price > test) {
//             test = el.count * el.price
//             prod = el
//         }
//     })
//     return prod
// }

// console.log(MaxProd());

const MaxProd = ():Products_7 []=>{
    let test:number = 0
    let indexCount: number
    arr_7.forEach((el:Products_7, i: number)=> {
        if(el.count * el.price > test) {
            test = el.count * el.price
            indexCount = i
        }
    })
    arr_7[indexCount].title = arr_7[indexCount].title.replaceAll('', '_')
    return arr_7
}

console.log(MaxProd());



