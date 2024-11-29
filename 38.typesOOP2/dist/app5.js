// оздайтеабстрактныйклассFruit (Фрукт) соследующимполем: • fruits: массив объектов, где каждый объект имеет свойства id, title (название) и price (цена) 
// Затем создайте дочерний класс Apple (Яблоко), который наследует Fruit. 
// В классе Apple реализуйте метод getAppleInfo(), который должен возвращать информацию о яблоке из массива fruits, где title равно "яблоко". 
// Входные: [ {"id": 1, "title": "яблоко", "price": 50}, {"id": 2, "title": "банан", "price": 30}, {"id": 3, "title": "груша", "price": 45} ] → Результат: {"id": 1, "title": "яблоко", "price": 50} 
// Входные: [ {"id": 1, "title": "банан", "price": 35}, {"id": 2, "title": "киви", "price": 70}} ] → Результат: nul
class Fruit {
}
class Apple extends Fruit {
    fruits = [
        { "id": 1, "title": "яблоко", "price": 50 },
        { "id": 2, "title": "банан", "price": 30 },
        { "id": 3, "title": "груша", "price": 45 }
    ];
    getAppleInfo(test) {
        this.fruits.forEach((el) => {
            if (test === el.title)
                console.log(el);
        });
    }
}
const apple = new Apple();
apple.getAppleInfo('груша');
