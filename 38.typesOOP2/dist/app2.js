// Создайте абстрактный класс Animal (Животное) с абстрактным методом makeSound() (издатьЗвук). Затем создайтедва дочернихкласса: • Dog • Cat Каждый из этих классов должен наследовать Animal и реализовывать метод makeSound(), возвращаясоответствующийзвукживотного. Входные: Dog().makeSound() → Результат: "Гав-гав" Объяснение:МетодmakeSound() дляобъектаклассаDog долженвернутьзвуксобаки. Входные: Cat().makeSound() → Результат: "Мяу" Объяснение:МетодmakeSound() дляобъектаклассаCat долженвернутьзвуккошки.
class Animal {
}
class Dog extends Animal {
    makeSound() {
        return 'Гав-гав';
    }
}
class Cat extends Animal {
    makeSound() {
        return 'Мяу';
    }
}
const dog = new Dog();
const cat = new Cat();
console.log(dog.makeSound());
console.log(cat.makeSound());
