// Создайте абстрактный класс "Транспортное средство" (Vehicle), в котором будут два абстрактных метода: "завести" (start) и "остановить" (stop). 
// Реализуйте два класса-наследника — "Автомобиль" (Car) и "Мотоцикл" (Motorcycle). 
// Эти классы должны расширять класс "Транспортное средство" и реализовать методы "завести" и "остановить", чтобы они соответствовали поведению этих транспортных средств (например,через console.log). 
// Входные: let car = new Car(); car.start(); → Результат: Car started 
// Входные: let car = new Car(); car.stop(); → Результат: Car stopped 
// Входные: let motorcycle = new Motorcycle(); motorcycle.start(); → Результат: Motorcycle started 
// Входные: let motorcycle = new Motorcycle(); motorcycle.stop(); → Результат: Motorcycle stopped


abstract class Vehicle {
    abstract start(): void
    abstract stop(): void
}

class Car extends Vehicle {
    start(): void {
        console.log('Car started ');

    }
    stop(): void {
        console.log('Car stopped');
    }
}

class Motorcycle extends Vehicle {
    start(): void {
        console.log('Motorcycle started ');
    }
    stop(): void {
        console.log('Motorcycle stopped');
    }
}

let car = new Car()
let motorcycle = new Motorcycle()

car.start()
car.stop()
motorcycle.start()
motorcycle.stop()