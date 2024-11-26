// Создайте класс Product, который содержит объект product (продукт) с полями и price (цена продукта), title (название продукта). Реализуйте метод displayProductInfo(), который выводит массив продуктов, где цена > 20. Создайте экземплярклассаProduct ивызовитеметод displayProductInfo().

interface ProductCard {
    productsARR: InfoCard[];
    displayProductInfo(): string[]
}

interface InfoCard {
    price: number;
    title: string

}

class Product_10 {
    productsARR: InfoCard[] = [
        {
            price: 27,
            title: 'Креветки'
        },
        {
            price: 21,
            title: 'Лосось'
        },
        {
            price: 10,
            title: 'Скумбрия'
        }]


    displayProductInfo() {
        let testProduct: string[] = []
        this.productsARR.forEach((el: InfoCard) => {
            if (el.price > 20) testProduct.push(el.title)
        })
        return testProduct
    }
}

const product_10: ProductCard = new Product_10()
console.log(product_10.displayProductInfo());
