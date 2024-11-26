// Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод getCircumference() (вычисление длины окружности). Создайте экземпляр класса CircleC и выведите длинуокружности. Длинаокружности:2* π * r
// interface CirC{
//     getCircumference(radius:number):number
// }
// class CircleC {
//     getCircumference(radius:number) {
//         let result_9:number = 2 *  3.14 * radius
//         return result_9
//     }
// }
class CircleC {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    getCircumference() {
        let result_9 = 2 * 3.14 * this.radius;
        return result_9.toFixed(2);
    }
}
const circleC = new CircleC(10);
console.log(circleC.getCircumference());
