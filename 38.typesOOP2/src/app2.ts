// Создайте абстрактный класс Animal (Животное) с абстрактным методом makeSound() (издатьЗвук). Затем создайтедва дочернихкласса: • Dog • Cat Каждый из этих классов должен наследовать Animal и реализовывать метод makeSound(), возвращаясоответствующийзвукживотного. Входные: Dog().makeSound() → Результат: "Гав-гав" Объяснение:МетодmakeSound() дляобъектаклассаDog долженвернутьзвуксобаки. Входные: Cat().makeSound() → Результат: "Мяу" Объяснение:МетодmakeSound() дляобъектаклассаCat долженвернутьзвуккошки.


abstract class Animal {
    abstract makeSound(): void
}

interface IAnimal {
    makeSound(): string
}
class Dog extends Animal implements IAnimal {
    makeSound(): string {
        return 'Гав-гав';
    }
}

class Cat extends Animal implements IAnimal {
    makeSound(): string {
        return 'Мяу';
    }
}

const dog: IAnimal = new Dog()
const cat: IAnimal = new Cat()
console.log(dog.makeSound());
console.log(cat.makeSound());

