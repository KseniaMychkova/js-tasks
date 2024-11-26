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
    getArea(width, height) {
        return width * height;
    }
}
const rectangle_2 = new Rectangle();
console.log(rectangle_2.getArea(15, 15));
