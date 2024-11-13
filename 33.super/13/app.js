// Создайте класс Point с координатами x, y, z. Добавьте метод distanceTo(otherPoint), который вычисляет расстояние до другой точки по формуле:

class Point {
    x;
    y;
    z;
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    distanceTo() {
        return Math.sqrt((this.x - this.x) ** 2 + (this.y - this.y) ** 2 + (this.z - this.z) ** 2)
    }
}

const point = new Point(2, 8, 20)
console.log(point.distanceTo());