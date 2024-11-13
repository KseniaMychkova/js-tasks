// 2. Создайте класс Student, который будет содержать имя, возраст и массив оценок.Напишите метод
// getAverageGrade(), который возвращает средний балл студента.
// Входные: Student("Alice", 20, [5, 4, 5, 3, 4])→ Результат: "Alice (20) имеет средний балл 4.2"
// Входные: Student("Bob", 22, [3, 2, 3, 4, 3])→ Результат: "Bob (22) имеет средний балл 3.0"
// Входные: Student("John", 19, [4, 4, 4, 5, 5])→ Результат: "John (19) имеет средний балл 4.4«


// class Student {
//     getAverageGrade = (name, age, grade) => {
//         const result = grade.reduce((sum, el) => {
//             return sum += el
//         })
//         return `${name} (${age}) имеет средний балл ${result / grade.length}`
//     }

// }
// const student = new Student()
// console.log(student.getAverageGrade("Alice", 20, [5, 4, 5, 3, 4]));


// class Student {
//     name = "Bob";
//     age = 22;
//     grade = [3, 2, 3, 4, 3];
//     getAverageGrade = () => {
//         const result = this.grade.reduce((sum, el) => {
//             return sum += el
//         })
//         return `${this.name} (${this.age}) имеет средний балл ${result / this.grade.length}`
//     }

// }
// const student = new Student()
// console.log(student.getAverageGrade());


class Student {
    name;
    age;
    grade;
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade
    }
    getAverageGrade = () => {
        const result = this.grade.reduce((sum, el) => {
            return sum += el
        })
        return `${this.name} (${this.age}) имеет средний балл ${result / this.grade.length}`
    }

}
const student = new Student("John", 19, [4, 4, 4, 5, 5])
console.log(student.getAverageGrade());