class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const student = new Student('Kseniya', 34);
console.log(student.name, student.age);
