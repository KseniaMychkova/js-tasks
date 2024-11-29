// оздайтеабстрактныйклассFruit (Фрукт) соследующимполем: • fruits: массив объектов, где каждый объект имеет свойства id, title (название) и price (цена) 
// Затем создайте дочерний класс Apple (Яблоко), который наследует Fruit. 
// В классе Apple реализуйте метод getAppleInfo(), который должен возвращать информацию о яблоке из массива fruits, где title равно "яблоко". 
// Входные: [ {"id": 1, "title": "яблоко", "price": 50}, {"id": 2, "title": "банан", "price": 30}, {"id": 3, "title": "груша", "price": 45} ] → Результат: {"id": 1, "title": "яблоко", "price": 50} 
// Входные: [ {"id": 1, "title": "банан", "price": 35}, {"id": 2, "title": "киви", "price": 70}} ] → Результат: nul



interface IFruits {
    id:number;
    title:string;
    price:number
}

interface IApple {
    fruits: IFruits[];
    getAppleInfo(test:string)
}

 abstract class Fruit {
    abstract fruits: IFruits[]
 }

 class Apple extends Fruit {
    fruits: IFruits[] = [
        {"id": 1, "title": "яблоко", "price": 50}, 
        {"id": 2, "title": "банан", "price": 30}, 
        {"id": 3, "title": "груша", "price": 45}
    ]

    getAppleInfo(test:string){
        this.fruits.forEach((el:IFruits)=> {
            if(test === el.title)
                console.log(el);
                
        })
    }
 }

 const apple: IApple = new Apple()
 apple.getAppleInfo('груша')
 