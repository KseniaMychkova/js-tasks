// Создайте класс Rectangle, который будет иметь свойства width и height.Напишите метод getArea(), который возвращает площадь прямоугольника.

// Входные: Rectangle(5, 10)→ Результат: 50
// Входные: Rectangle(3, 7)→ Результат: 21
// Входные: Rectangle(6, 9)→ Результат: 54

// class Rectangle {
//     width;
//     height;
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     getArea = () => {
//         return this.width * this.height
//     }
// }
// const rectangle = new Rectangle(3, 7)
// console.log(rectangle.getArea());


// class Rectangle {
//     getArea = (width, height) => {
//         return width * height
//     }
// }
// const rectangle = new Rectangle()
// console.log(rectangle.getArea(3, 7));


class Rectangle {
    width = 6;
    height = 9;
    getArea = () => {
        return this.width * this.height
    }
}
const rectangle = new Rectangle()
console.log(rectangle.getArea());