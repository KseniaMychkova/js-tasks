// Создайте базовый класс Shape с методом getArea(), который возвращает площадь фигуры. Реализуйте подклассы Rectangle, Circle и Triangle, которые наследуют от Shape и реализуют метод getArea() для расчета площади по формулам:
// 	•	Прямоугольник: area = width * height
// 	•	Круг: area = π * radius^2
// 	•	Треугольник: area = (base * height) / 2


class Shape {
    getArea() {

    }
}

class Rectangle extends Shape {
    getArea(width, height) {
        super.getArea()
        return width * height
    }
}
class Circle extends Shape {
    getArea(π, radius) {
        super.getArea()
        return π * (radius * 2)
    }
}
class Triangle extends Shape {
    getArea(base, height) {
        super.getArea()
        return (base * height) / 2
    }
}

const rectangle = new Rectangle()
console.log(rectangle.getArea(5, 8));

const сircle = new Circle()
console.log(сircle.getArea(3.14, 4));

const triangle = new Triangle()
console.log(triangle.getArea(10, 20));