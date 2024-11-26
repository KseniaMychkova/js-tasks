// Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод getArea() (вычисление площади круга). Создайте экземпляр класса CircleR и выведитеплощадьокружности. Площадькруга:π*r^2
class CircleR {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return 3.14 * this.radius ** 2;
    }
}
const circleR = new CircleR(12);
console.log(circleR.getArea());
