// Создайте класс Student, который содержит свойства name (имя) и age (возраст). Инициализация свойств name, age происходит в getter, setter класса. Создайте экземплярклассаStudentивыведитесвойства.
class Student_4 {
    name_4;
    age_4;
    setName(name_4) {
        this.name_4 = name_4;
    }
    setAge(age_4) {
        this.age_4 = age_4;
    }
    getName() {
        return this.name_4;
    }
    getAge() {
        return this.age_4;
    }
}
const student_4 = new Student_4();
student_4.setName('Kseniya');
student_4.setAge(34);
console.log(student_4.getName());
console.log(student_4.getAge());
