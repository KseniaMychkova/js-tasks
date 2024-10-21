// Создайте объект, представляющий информацию о товарах в интернет-магазине (например, { product1: 10, product2: 5, product3: 8 }). Используйте Object.values() для подсчета общего количестваразличныхтоваров.

const productaCard = { product1: 10, product2: 5, product3: 8 }

const main = () => {
    const values = Object.values(productaCard)
    const result_reduce = values.reduce((sum, el) => {
        return sum + el
    }, 0)
    return result_reduce
}
console.log(main());