// Создайте класс Rectangle, который содержит свойства width (ширина) и height (высота), а также метод getArea(), который возвращает площадь прямоугольника (ширина* высота). Создайте экземплярклассаRectangleивыведите его площадь.
interface Value_2 {
    width?: number;
    height?: number;
    getArea(width: number, height: number): number
}
// class Rectangle {
//     width: number;
//     height: number

//     constructor(width: number, height: number) {
//         this.width = width;
//         this.height = height
//     }

//     getArea(): number {
//         return this.width * this.height
//     }
// }

// const rectangle: Value = new Rectangle(15, 15)
// console.log(rectangle.getArea());

class Rectangle {
    getArea(width: number, height: number): number {
        return width * height
    }
}

const rectangle_2: Value_2 = new Rectangle()
console.log(rectangle_2.getArea(15, 15));
