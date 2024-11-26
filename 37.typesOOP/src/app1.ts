// Создайте класс Student, который содержит проинициализированные свойства name (имя) и age (возраст). Создайте экземпляр класса Student и выведите свойства.
interface Person {
    name: string;
    age: number;
}
class Student {
    name:string;
    age:number

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age
    }
}

const student: Person = new Student('Kseniya', 34)

console.log(student.name, student.age);
