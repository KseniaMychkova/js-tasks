// Создайте абстрактный класс University, которыйсодержит: • абстрактныйметод getStudentById(id: number), 
// • поле students — массивобъектовстудентов. 
// Реализуйте класс Student, который наследуется от University иреализуетметод getStudentById, возвращающий объект студента по его ID. const students = [  new Student(1, 'Alice'),  new Student(2, 'Bob'),  new Student(3, 'Charlie') ]; 
// Входные: let university = new UniversityStudent([  new Student(1, 'Alice'),  new Student(2, 'Bob') ]); university.getStudentById(1); → Результат:{id: 1, name: 'Alice' }
class University {
}
class Student extends University {
    students = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
    getStudentById(id) {
        let result = [];
        this.students.forEach((el) => {
            if (el.id === id)
                result.push(el);
        });
        return result;
    }
}
const student = new Student();
console.log(student.getStudentById(3));
console.log(student.getStudentById(1));
console.log(student.getStudentById(2));
