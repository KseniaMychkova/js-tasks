// 1. Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea() (вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника. Формула для вычисленияплощадипрямоугольника:S=длина*ширина Входные: Rectangle(5, 4) → Результат: 20 Входные: Rectangle(10, 3) → Результат: 30 Входные: Rectangle(7, 7) → Результат: 49
class Shape {
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    isValid() {
        if (!this.width || !this.height)
            throw new Error('Вы ничего не ввели');
        if (isNaN(this.width) || isNaN(this.height))
            throw new Error('Вы ввели не число');
        if (this.width < 0 || this.height < 0)
            throw new Error('Вы ввели отрицательное число');
    }
    calculateArea() {
        try {
            this.isValid();
            return this.width * this.height;
        }
        catch (error) {
            console.log(error);
        }
    }
}
const rectangle = new Rectangle(5, 4);
console.log(rectangle.calculateArea());
