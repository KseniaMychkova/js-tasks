// Создайте класс Student, который содержит свойства name (имя) и age (возраст). Инициализация свойств name, age происходит в конструкторе класса. Создайте несколько экземпляровклассаStudentи выведитесвойства.
class Student_3 {
    name_3;
    age_3;
    constructor(name_3, age_3) {
        this.name_3 = name_3;
        this.age_3 = age_3;
    }
}
const student_3_1 = new Student_3('Kseniya', 34);
const student_3_2 = new Student_3('Test', 24);
const student_3_3 = new Student_3('Test2', 44);
console.log(student_3_1.name_3, student_3_1.age_3);
console.log(student_3_2.name_3, student_3_2.age_3);
console.log(student_3_3.name_3, student_3_3.age_3);